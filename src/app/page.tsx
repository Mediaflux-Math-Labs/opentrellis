import CustomFeed from '@/components/homepage/CustomFeed';
import GeneralFeed from '@/components/homepage/GeneralFeed';
import { buttonVariants } from '@/components/ui/Button'; // Ensure this function supports vibrant styling.
import { getAuthSession } from '@/lib/auth';
import { Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head'; // For adding custom font.

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export default async function Home() {
  const session = await getAuthSession();

  return (
    <>
      <Head>
        {/* Example for adding Google Fonts - choose a modern, vibrant font like Poppins */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <h1 className='font-bold text-3xl md:text-4xl text-gray-900 font-poppins'>Your feed</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 py-6'>
        {/* @ts-expect-error server component */}
        {session ? <CustomFeed /> : <GeneralFeed />}

        {/* subreddit info */}
        <div className='overflow-hidden h-fit rounded-lg shadow-md bg-gradient-to-r from-green-400 to-blue-500 text-white'>
          <div className='px-6 py-4'>
            <p className='font-semibold py-3 flex items-center gap-1.5 text-white'>
              <HomeIcon className='h-4 w-4 text-white' />
              Home
            </p>
          </div>
          <dl className='divide-y divide-gray-200 px-6 py-4 text-sm leading-6'>
            <div className='flex justify-between gap-x-4 py-3'>
              <p className=''>
                Your personal OpenTrellis frontpage. Come here to check in with your
                favorite communities.
              </p>
            </div>

            <Link
              className={`w-full mt-4 mb-6 text-white bg-green-600 hover:bg-green-700 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out`}
              href={`/r/create`}>
              Create Community
            </Link>
          </dl>
        </div>
      </div>
    </>
  )
}
