import { NextResponse } from 'next/server';
import { DB } from '@/lib/db';
import { auth } from '../../../../../../auth';

// GET handler to fetch all social media configurations
export async function GET() {
  try {
    // Simple admin check - in a real app, you'd use a proper auth check
    // This is a placeholder that should be replaced with your actual auth logic
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    try {
      // Fetch all social media related configurations
      const configs = await DB.config.findMany({
        where: {
          key: {
            in: [
              'instagram_url',
              'instagram_api',
              'instagram_secret',
              'telegram_url',
              'telegram_api',
              'telegram_secret',
            ],
          },
        },
      });

      return NextResponse.json(configs);
    } catch (error) {
      // If the Config table doesn't exist yet, return an empty array
      const prismaError = error as { code?: string };
      if (prismaError.code === 'P2021') {
        console.warn('Config table does not exist yet, returning empty array');
        return NextResponse.json([]);
      }
      throw error; // Re-throw if it's a different error
    }
  } catch (error) {
    console.error('Error fetching social media configurations:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// POST handler to create or update social media configurations
export async function POST(req: Request) {
  try {
    // Simple admin check - in a real app, you'd use a proper auth check
    // This is a placeholder that should be replaced with your actual auth logic
    const session = await auth();
    if (!session?.user?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    // Parse request body
    const body = await req.json();
    const {
      instagram_url,
      instagram_api,
      instagram_secret,
      telegram_url,
      telegram_api,
      telegram_secret,
    } = body;

    // Create or update each configuration
    const configKeys = [
      { key: 'instagram_url', value: instagram_url },
      { key: 'instagram_api', value: instagram_api },
      { key: 'instagram_secret', value: instagram_secret },
      { key: 'telegram_url', value: telegram_url },
      { key: 'telegram_api', value: telegram_api },
      { key: 'telegram_secret', value: telegram_secret },
    ];

    try {
      // Process each configuration
      for (const { key, value } of configKeys) {
        // Skip empty values
        if (value === undefined || value === null || value === '') continue;

        try {
          // Check if config exists
          const existingConfig = await DB.config.findUnique({
            where: { key },
          });

          if (existingConfig) {
            // Update existing config
            await DB.config.update({
              where: { key },
              data: { value },
            });
          } else {
            // Create new config
            await DB.config.create({
              data: { key, value },
            });
          }
        } catch (configError) {
          // Handle the case where the Config table doesn't exist
          const prismaError = configError as { code?: string };
          if (prismaError.code === 'P2021') {
            console.warn(
              'Config table does not exist yet. Cannot save configuration.'
            );
            return NextResponse.json(
              {
                success: false,
                error:
                  'Config table does not exist yet. Please run database migrations first.',
              },
              { status: 503 }
            );
          }
          throw configError; // Re-throw if it's a different error
        }
      }

      return NextResponse.json({ success: true });
    } catch (prismaError) {
      // If there's a Prisma error, handle it appropriately
      console.error('Prisma error:', prismaError);
      throw prismaError;
    }
  } catch (error) {
    console.error('Error updating social media configurations:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
