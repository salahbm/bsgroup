import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const data = [
  { id: 0, src: '/people/person.jpeg' },
  { id: 1, src: '/people/person_1.jpeg' },
  { id: 2, src: '/people/person_2.jpeg' },
];

const PeopleMarquee = () => {
  return (
    <div className="space-y-4 p-4">
      <Marquee autoFill>
        {data.map((item) => (
          <div key={item.id} className="relative w-36 h-36 md:w-48 md:h-48 m-2">
            <Image
              src={item.src}
              alt="image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Marquee>
      <Marquee direction="right" autoFill>
        {data.map((item) => (
          <div key={item.id} className="relative w-36 h-36 md:w-48 md:h-48 m-2">
            <Image
              src={item.src}
              alt="image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Marquee>
      <Marquee autoFill>
        {data.map((item) => (
          <div key={item.id} className="relative w-36 h-36 md:w-48 md:h-48 m-2">
            <Image
              src={item.src}
              alt="image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PeopleMarquee;
