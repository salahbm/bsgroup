import ContactForm from '@/components/shared/contact-form.';
import { BRAND_NAME } from '@/constants/name';
import { BookUser, Clock3, Mail, PhoneCall } from 'lucide-react';
import Image from 'next/image';

const Partners = () => {
  return (
    <section className="my-20" id="contact">
      <div className=" px-4 py-16 sm:px-6 lg:px-8 lg:py-20 ">
        <Image
          src="/images/partner.jpg"
          width={1000}
          height={400}
          alt="partners"
          className="object-cover shadow-lg w-full border rounded-xl border-gray-300  animate-fade-in-scale md:h-[450px] h-[250px]"
        />
        <div className="text-center justify-center items-center flex ">
          <p className="my-16 text-center  max-w-3xl  text-lg text-gray-600">
            At {BRAND_NAME}, we are dedicated to connecting exceptional talent
            with outstanding opportunities. Whether you are a job seeker looking
            to take the next step in your career, or an employer seeking the
            perfect candidate to join your team, our expert recruiters are here
            to assist you every step of the way.
          </p>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <BookUser />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Our Address
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Otaboy Eshonov 40 A
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Bukhara, Uzbekistan
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <PhoneCall />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contact
                    </h3>

                    <p className="text-gray-600 dark:text-slate-400">
                      +998 95 608-70-70
                      <br /> +998 95 608-00-70 <br />
                      +998 95 506-70-07
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <Mail />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Mail:
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      bsglobalinfo@mail.ru <br /> main@bsglobal.uz
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                    <Clock3 />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Working hours
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Monday - Friday: 09:00 - 17:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Saturday &amp; Sunday: 09:00 - 13:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;