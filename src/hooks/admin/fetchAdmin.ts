import { auth } from '../../../auth';
import { DB } from '@/lib/db';

export const handleAdmin = async () => {
  const session = await auth();

  if (!session?.user) {
    throw new Error(' Admin not found');
  }

  const getAdmin = await DB.admin.findUnique({
    where: {
      email: session.user.email as string,
    },
    select: {
      isAdmin: true,
    },
  });

  if (!getAdmin) {
    throw new Error(' Admin not found');
  }
  const isAdmin = getAdmin.isAdmin;

  if (!isAdmin) {
    throw new Error(' User is not an admin');
  }
  return isAdmin;
};
