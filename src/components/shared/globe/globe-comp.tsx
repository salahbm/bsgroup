'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Capital, capitals } from './globe-data';
import Image from 'next/image';
import Globe from 'react-globe.gl';
import { useIsWindows } from '@/hooks/common/useWindows';

const GlobeView = ({ data }: { data: Capital }) => {
  const globeEl = useRef(null);
  const [loading, setLoading] = useState(true);
  const isWindows = useIsWindows();

  const handleClick = (capital: Capital) => {
    if (globeEl.current) {
      // @ts-ignore
      globeEl.current.pointOfView(
        { lat: capital.lat, lng: capital.lng, altitude: 0.7 },
        1000 // Duration in milliseconds
      );
    }
  };
  const handleReset = () => {
    if (globeEl.current) {
      // @ts-ignore
      globeEl.current.pointOfView(
        { lat: 20, lng: 0, altitude: 2 }, // Initial position
        1000 // Duration in milliseconds
      );
    }
  };

  const ringsData = useMemo(
    () => [
      {
        lat: 41.3112,
        lng: 69.2401,
        maxRadius: 10,
        propagationSpeed: 2,
        repeatPeriod: 1000,
        color: 'rgba(255, 0, 0, 0.5)',
      },
    ],
    []
  );

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      handleClick(data);
    }
  }, [data]);

  useEffect(() => {
    if (globeEl.current) {
      // @ts-ignore
      globeEl.current.pointOfView(
        { lat: 41.3112, lng: 69.2401, altitude: 2 },
        1000 // Initial duration in milliseconds
      );
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center z-10 min-h-[400px]">
          <Image
            src={'/logos/dark_logo.gif'}
            width={150}
            height={150}
            alt="Loading..."
          />
        </div>
      ) : (
        <>
          <div className="relative max-w-screen-xl  overflow-x-hidden cursor-move flex justify-center items-center rounded-2xl shadow-xl mx-4">
            <button
              onClick={handleReset}
              type="button"
              className="absolute top-3 left-3 z-10 p-2 bg-neutral-300 rounded-md cursor-pointer"
            >
              Reset
            </button>
            <Globe
              ref={globeEl as any}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              htmlElementsData={capitals}
              htmlLat={(d: any) => d?.lat}
              htmlLng={(d: any) => d?.lng}
              htmlElement={(d: any) => {
                const el = document.createElement('div');
                el.innerHTML = isWindows ? `${d.country}` : `${d.flag}`;
                el.style.cursor = 'pointer';
                el.style.color = 'white';
                el.style.textShadow = '0px 0px 10px white';
                el.style.fontSize = isWindows ? '12px' : '20px';
                return el;
              }}
              htmlTransitionDuration={1000}
              backgroundImageUrl={
                '//unpkg.com/three-globe/example/img/night-sky.png'
              }
              onGlobeClick={() => handleReset()}
              height={500}
              ringsData={ringsData}
              ringColor={() => '#ff6947'}
              ringMaxRadius={5}
              ringPropagationSpeed={2}
              ringRepeatPeriod={1000}
            />
          </div>
        </>
      )}
    </>
  );
};

export default GlobeView;
