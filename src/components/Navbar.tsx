import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { Icons } from './Icons'; // Assuming Icons are used or to be used.
import { buttonVariants } from './ui/Button'; // Ensure vibrant styles are included.
import { UserAccountNav } from './UserAccountNav';
import SearchBar from './SearchBar';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className='fixed top-0 inset-x-0 h-fit bg-[#35c446] border-b border-[#2da736] z-[10] py-2 transition-all duration-300'>
      <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
        {/* Logo with updated styling */}
        <Link href='/' className='flex gap-2 items-center hover:text-[#c4fcd4]'>
          <img src='/favicon.ico' alt='Logo' className='h-8 w-8 sm:h-6 sm:w-6' />
          {/* Enhanced "Open Trellis" text styling */}
          <p className='hidden text-white text-xl font-bold md:block' style={{ fontFamily: "'Inter', sans-serif" }}>Open Trellis</p>
        </Link>

        {/* Search bar */}
        <SearchBar />

        {/* Actions */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href='/sign-in' className={`text-white bg-[#141414] hover:bg-[#279e33] px-4 py-2 rounded-md transition-all duration-300`}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
