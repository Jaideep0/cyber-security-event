'use client';

import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const preUploadedImages = new Array(8)
  .fill({ name: '', url: '' })
  .map((item, index) => ({
    name: `Email ${index + 1}`,
    url: `/images/emails_${index + 1}.png`,
  }));

export default function GuessEmail() {
  return (
    <div className="p-3 w-full rounded flex flex-row flex-wrap">
      {preUploadedImages.map((img, index) => (
        <a className="p-1 cursor-pointer w-1/2 border rounded p-2" key={index}>
          <img
            src={img.url}
            alt={`Email ${index + 1}`}
            className="rounded w-full h-full object-cover"
          />
        </a>
      ))}
    </div>
  );
}
