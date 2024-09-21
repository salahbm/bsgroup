import React from 'react';
import { Instagram, Send } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

const SocialMediaCard: React.FC = () => {
  const t = useTranslations('SocialMediaCard');

  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-lg transform transition-transform hover:scale-105">
      <div className="absolute top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="w-24 h-24 mb-4">
        <Image
          src="/logos/dark_logo_nobg.gif"
          alt="Profile Picture"
          width={96}
          height={96}
          className="rounded-full"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2 textGradient" translate="no">
        {t('companyName')}
      </h2>
      <p className="text-lg mb-6 text-center text-gray-600">
        {t('description')}
      </p>
      <div className="flex space-x-4">
        <a
          href="https://www.instagram.com/bsgroup.uz/"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center space-x-2 bg-pink-500 px-4 py-2 rounded-full text-white transition-colors hover:bg-pink-600'
          )}
        >
          <Instagram className="w-6 h-6" />
          <span>{t('instagram')}</span>
        </a>
        <a
          href="https://telegram.me/BSGroupUz"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'flex items-center space-x-2 bg-blue-500 px-4 py-2 rounded-full text-white transition-colors hover:bg-blue-600'
          )}
        >
          <Send className="w-6 h-6" />
          <span>{t('telegram')}</span>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaCard;
