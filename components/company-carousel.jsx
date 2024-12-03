'use client'

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import companies from '@/data/companies';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"

const CompanyCarousel = () => {
  console.log({companies})
  return (
    <Carousel
    className='w-full py-10'
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent className='flex gap-5 lg:gap-20 items-center'>
        {companies?.map(({ name, path, id }) => (
          <CarouselItem key={id} className='basis-1/3 lg:basis-1/6'>
            <Image src={path} alt={name} width={200} height={56} className='h-9 sm-h-14 w-auto object-contain' />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CompanyCarousel;
