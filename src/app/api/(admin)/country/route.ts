import { DB } from '@/lib/db';

import { NextResponse } from 'next/server';
import { auth } from '../../../../../auth';

export async function POST(req: Request) {
  try {
    const session = await auth();
    const { emoji, title, description, name } = await req.json();

    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const country = await DB.country.create({
      data: {
        name,
        description,
        title,
        emoji,
      },
    });

    return NextResponse.json(country);
  } catch (error) {
    console.log('[Courses] Error: ', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}