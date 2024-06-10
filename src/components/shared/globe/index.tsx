'use client';

import { Capital, capitals } from './globe-data';

import { useMemo, useState } from 'react';

import dynamic from 'next/dynamic';

const MyGlobe = () => {
  const GlobeView = useMemo(
    () => dynamic(() => import('./globe-comp'), { ssr: false }),
    []
  );

  const [capitalToPass, setCapitalToPass] = useState<Capital>();

  function handleClick(capital: any) {
    setCapitalToPass(capital);
  }

  return (
    <div className="relative w-full pb-12">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="flex flex-wrap justify-center items-center p-4  ">
        {capitals.map((capital) => (
          <div
            key={capital.lat}
            className="cursor-pointer text-orange-500 hover:text-purple-500 m-2 p-4 border-2  shadow-lg hover:border-purple-500 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleClick(capital)}
          >
            <div className="text-center">
              <div className="font-semibold text-lg">{capital.country}</div>
              <div className="text-3xl">{capital.flag}</div>
            </div>
          </div>
        ))}
      </div>
      <GlobeView data={capitalToPass!} />
    </div>
  );
};

export default MyGlobe;