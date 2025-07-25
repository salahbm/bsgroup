import { BRAND_NAME } from '@/constants/name';
import { Params } from '@/types/global';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import Loader from '@/components/shared/loader';
import Sidebar from './_components/sidebar';
import Header from './_components/header';
import { SessionProvider } from 'next-auth/react';
import { handleAdmin } from '@/hooks/admin/fetchAdmin';
import NoAdminPage from './_components/no-admin';

export async function generateMetadata({
  params: { locale },
}: Params): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const description = t('home.description', { brand: BRAND_NAME });

  return {
    title: `Admin | ${BRAND_NAME}`,
    description,
  };
}

export default async function AdminLayout({
  children,
  params: { locale },
}: React.PropsWithChildren<Params>) {
  const isAdmin = await handleAdmin();
  setRequestLocale(locale);
  return (
    <main className="relative layout-container">
      <SessionProvider>
        <Suspense fallback={<Loader />}>
          {isAdmin ? (
            <div className="relative">
              <Header />
              <div className="flex overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-6 md:px-8 pt-16 pb-8">
                  <div className="mx-auto w-full max-w-7xl">
                    {children}
                  </div>
                </main>
              </div>
              <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>
          ) : (
            <>
              <NoAdminPage />
            </>
          )}
        </Suspense>
      </SessionProvider>
    </main>
  );
}
