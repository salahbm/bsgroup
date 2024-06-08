import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { Menu } from 'lucide-react';
import navBars from './nav-list';
import { Link, usePathname } from '@/i18n';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import LanguageSelector from './lang-selector';

const MobileNavbar = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
        <Menu />
      </SheetTrigger>

      <SheetContent side={'right'} className="p-0 bg-white w-72 pt-10">
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          {navBars.map((item) => (
            <motion.li
              key={item.id}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className={cn(
                'flex items-center justify-center gap-x-2 text-black text-sm p-2  hover:text-slate-600 hover:bg-slate-300/20',
                pathname?.endsWith(item.path!) &&
                  'text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700'
              )}
            >
              <Link href={item.path!}>{item.name}</Link>
            </motion.li>
          ))}
          <li className="flex items-center justify-center gap-x-2 text-black text-sm p-2 hover:text-slate-600 hover:bg-slate-300/20">
            <LanguageSelector />
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;