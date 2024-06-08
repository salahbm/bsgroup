import { Process } from '@/components/_home/process';
import { useTranslations } from 'next-intl';
import React from 'react';



const Home = () => {
  const t = useTranslations();
  return (
    <div>
      <h1 className=" font-italic text-green-700"> {t('Home.title')}</h1>
      <Process />
    </div>
  );
};

export default Home;