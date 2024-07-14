import BlogItem from './BlogItem';
import SectionHeader from '../shared/SectionHeader';
import { fetchAllVacancies } from '@/hooks/admin/fetch-vacancy';
import { getTranslations } from 'next-intl/server';

const Blog = async () => {
  const vacancies = await fetchAllVacancies();
  const t = await getTranslations('Blog');
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: t('header.title'),
              subtitle: t('header.subtitle'),
              description: t('header.description'),
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {vacancies
            .filter(
              (vacancy) => vacancy.isTrend === true && vacancy.isActive === true
            )
            .slice(0, 3)
            .map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
