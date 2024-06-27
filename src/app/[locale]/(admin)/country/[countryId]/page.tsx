import { toast } from '@/components/ui/use-toast';
import { fetchCountry } from '@/hooks/admin/fetch-country';
import UpdateCountryForm from './update-coutry';
import { Country } from '@prisma/client';

const CountryIdPage = async ({ params }: { params: { countryId: string } }) => {
  const country = await fetchCountry(params.countryId);
  if (!country) {
    toast({ title: 'Country not found' });
  }

  return (
    <div className="flex justify-center h-full p-6">
      <UpdateCountryForm initialData={country as Country} />
    </div>
  );
};

export default CountryIdPage;