import { APP_NAME } from '@/lib/constants'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select'
import { ChevronDown, SearchIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import Menu from './menu'

const categories = [
  { value: 'Kinyami', label: 'Kinyami' },
  { value: 'Fashion', label: 'Fashion' },
  { value: 'Lifestyle', label: 'Lifestyle' },
  { value: 'Beauty', label: 'Beauty' },
]

export default function Search() {
  return (
    <form
      action='/search'
      method='GET'
      className='flex items-stretch h-12 rounded-md shadow-sm bg-white border border-gray-300'
    >
      {/* Category Dropdown */}
      <Select name='category'>
        <SelectTrigger
          className='flex items-center justify-between px-3 bg-gray-100 text-black border-r border-gray-300 rounded-l-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary gap-2'
          aria-label='Select category'
        >
          <SelectValue placeholder='All' />
          <ChevronDown className='w-4 h-4 text-gray-500' />
        </SelectTrigger>
        <SelectContent className='bg-white text-black border border-gray-300 rounded-md shadow-lg'>
          {categories.map((category) => (
            <SelectItem
              key={category.value}
              value={category.value}
              className='px-3 py-2 hover:bg-gray-100 focus:bg-gray-200'
            >
              {category.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Input */}
      <input
        type='search'
        name='q'
        placeholder={`Search ${APP_NAME}...`}
        className='flex-1 px-4 py-2 text-black placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-primary'
        aria-label='Search input'
      />

      {/* Submit Button */}
      <button
        type='submit'
        className='flex items-center justify-center w-12 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary'
        aria-label='Submit search'
      >
        <SearchIcon className='w-5 h-5 text-black' />
      </button>
    </form>
  )
}

;<div className='px-4 py-2'>
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
</div>
