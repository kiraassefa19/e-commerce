'use client'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HomeCarousel({
  carouselItems,
}: {
  carouselItems: {
    image: string
    url: string
    description: string
    buttonCaption: string
    title: string
  }[]
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <div className='relative'>
      <Carousel
        dir='ltr'
        plugins={[plugin.current]}
        className='w-full mx-auto overflow-hidden'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselItems.map((item, index) => (
            <CarouselItem key={item.title}>
              <Link href={item.url} aria-label={`Go to ${item.title}`}>
                <div className='relative flex aspect-[16/6] items-center justify-center p-6 -m-1'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover w-full h-full rounded-lg'
                    priority={index === 0}
                  />
                  <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-transparent to-transparent text-white p-6'>
                    <h2
                      className={cn(
                        'text-xl font-bold mb-2 text-primary md:text-4xl lg:text-6xl'
                      )}
                    >
                      {item.title}
                    </h2>
                    <p className='hidden md:block text-sm md:text-base lg:text-lg mb-4'>
                      {item.description}
                    </p>
                    <Button className='hidden md:inline-block bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md'>
                      {item.buttonCaption}
                    </Button>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75'
          aria-label='Previous Slide'
        />
        <CarouselNext
          className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75'
          aria-label='Next Slide'
        />
      </Carousel>
    </div>
  )
}
