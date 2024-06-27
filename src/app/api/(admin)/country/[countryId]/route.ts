import { NextResponse } from 'next/server';
import { auth } from '../../../../../../auth';
import { DB } from '@/lib/db';

export async function PATCH(
  req: Request,
  { params }: { params: { countryId: string } }
) {
  try {
    const session = await auth();
    const { countryId } = params;
    console.log(`countryId:`, countryId);
    const { emoji, title, description, name } = await req.json();

    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const country = await DB.country.update({
      where: {
        id: countryId,
      },
      data: {
        emoji,
        name,
        title,
        description,
      },
    });

    return NextResponse.json(country);
  } catch (error) {
    console.log('[Country] Error: ', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
