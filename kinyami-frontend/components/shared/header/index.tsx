import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import data from '@/lib/data'
import { ChevronDown, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'
import Search from './search'

export default function Header() {
  return (
    <header className='bg-gray-700 text-white'>
      {/* Top Section */}
      <div className='px-4 py-2'>
        <div className='flex flex-wrap justify-between items-center gap-4'>
          {/* Logo */}
          <div className='flex items-center gap-4'>
            <Link
              href='/'
              className='flex items-center font-extrabold text-2xl'
              aria-label='Go to homepage'
            >
              <Image src='/logo.png' alt={APP_NAME} width={132} height={92} />
            </Link>
          </div>

          {/* Search Bar (Visible on All Screens) */}
          <div className='flex-1 max-w-xl w-full md:w-auto'>
            <Search />
          </div>

          {/* Menu */}
          <div className='flex items-center gap-4'>
            <Menu />
          </div>
        </div>

        {/* Mobile Dropdown Toggle */}
        <div className='md:hidden flex justify-center py-2'>
          <Button
            variant='ghost'
            className='flex items-center gap-1'
            aria-label='Toggle menu'
          >
            <ChevronDown className='w-5 h-5' />
          </Button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className='flex items-center px-4 py-2 bg-gray-800'>
        {/* All Categories Button */}
        <Button
          variant='ghost'
          className='flex items-center gap-2 text-base'
          aria-label='View all categories'
        >
          <MenuIcon className='w-5 h-5' />
          All
        </Button>

        {/* Navigation Links */}
        <div className='flex items-center flex-wrap gap-4 overflow-hidden max-h-[42px]'>
          {data.headerMenu.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className='text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200'
              aria-label={`Navigate to ${item.name}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
