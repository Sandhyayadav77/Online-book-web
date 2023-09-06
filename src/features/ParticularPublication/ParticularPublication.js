import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  incrementAsync,
  selectCount,
} from './ParticularPublicationSlice';
import { Link, useParams } from 'react-router-dom';


// particular publications with books 
const products = [
  {
    id: 1,
    name: 'Subject-Name',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019_1280.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'English',
  },
  {
    id: 1,
    name: 'Subject-Name',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019_1280.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'English',
  },
  {
    id: 1,
    name: 'Subject-Name',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019_1280.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'English',
  },
  {
    id: 1,
    name: 'Subject-Name',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019_1280.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'English',
  },
  {
    id: 1,
    name: 'Subject-Name',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019_1280.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'English',
  },
  {
    id: 1,
    name: 'Subject-Name',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019_1280.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'English',
  },
  {
    id: 1,
    name: 'Subject-Name',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2022/07/08/10/37/books-7309019_1280.png',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'English',
  },
  {
    id: 1,
    name: 'Subject-Name',
    href: '#',
    imageSrc: 'https://cdn.pixabay.com/photo/2016/03/27/19/32/book-1283865_1280.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'English',
  },
  // More products...
]
export function ParticularPublication() {
  const { publisherName } = useParams();

  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Publisher Subjects: {publisherName}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <Link to='/class'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
