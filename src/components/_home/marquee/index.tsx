import SectionHeader from '@/components/shared/SectionHeader';
import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const data = [
  { id: 0, src: '/people/person.jpeg' },
  { id: 1, src: '/people/person_1.jpeg' },
  { id: 2, src: '/people/person_2.jpg' },
  { id: 3, src: '/people/person_3.jpg' },
  { id: 4, src: '/people/person_4.jpg' },
  { id: 5, src: '/people/person_5.jpg' },
  { id: 6, src: '/people/person_6.jpg' },
  { id: 7, src: '/people/person_7.jpg' },
  { id: 8, src: '/people/person_8.jpg' },
  { id: 9, src: '/people/person_9.jpg' },
];

const data_2 = [
  { id: 10, src: '/people/person_10.jpg' },
  { id: 0, src: '/people/person_11.jpg' },
  { id: 1, src: '/people/person_12.jpg' },
  { id: 2, src: '/people/person_13.jpg' },
  { id: 3, src: '/people/person_14.jpg' },
  { id: 4, src: '/people/person_15.jpg' },
  { id: 5, src: '/people/person_16.jpg' },
  { id: 6, src: '/people/person_17.jpg' },
  { id: 7, src: '/people/person_18.jpg' },
];

const PeopleMarquee = () => {
  return (
    <div className="space-y-4 p-4 mt-16">
      <SectionHeader
        headerInfo={{
          title: 'OUR CANDIDATES',
          subtitle: 'SATISFIED Clients',
          description: `We are proud of our team. Here are some of our happy clients.`,
        }}
      />
      <Marquee autoFill pauseOnHover className="mt-8">
        {data.map((item) => (
          <div key={item.id} className="relative w-60 h-40 md:w-70 md:h-50 m-2">
            <Image
              src={item.src}
              alt="image"
              fill
              className="rounded-lg shadow-lg object-cover"
              sizes="(100vw, 100vh)"
            />
          </div>
        ))}
      </Marquee>
      <Marquee direction="right" autoFill pauseOnHover>
        {data_2.map((item) => (
          <div key={item.id} className="relative w-60 h-40 md:w-70 md:h-50 m-2">
            <Image
              src={item.src}
              alt="image"
              fill
              className="rounded-lg shadow-lg object-cover"
              sizes="(100vw, 100vh)"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PeopleMarquee;
