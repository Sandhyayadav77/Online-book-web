import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { selectAllPublishers, fetchAllPublsihersAsync } from './ProductsListSlice'

import { Link, useNavigate } from 'react-router-dom';
// import products from '../../ecom data/publishers.json'
// const oldProducts = [
//   {
//     id: 1,
//     name: 'Earthen Bottle',
//     href: '/particularpublication',
//     price: '$48',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
//   },
//   {
//     id: 2,
//     name: 'Nomad Tumbler',
//     href: '/particularpublication',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
//     imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
//   },
//   {
//     id: 3,
//     name: 'Focus Paper Refill',
//     href: '/particularpublication',
//     price: '$89',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
//     imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
//   },
//   {
//     id: 4,
//     name: 'Machined Mechanical Pencil',
//     href: '/particularpublication',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   {
//     id: 5,
//     name: 'Machined Mechanical Pencil',
//     href: '/particularpublication',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   {
//     id: 6,
//     name: 'Machined Mechanical Pencil',
//     href: '/particularpublication',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   {
//     id: 7,
//     name: 'Machined Mechanical Pencil',
//     href: '/particularpublication',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
//   {
//     id: 8,
//     name: 'Machined Mechanical Pencil',
//     href: '/particularpublication',
//     price: '$35',
//     imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
//     imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
//   },
// ]

// const products = [
//   {
//     "id": 1,
//     "name": "Publisher A",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 2,
//     "name": "Publisher B",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 3,
//     "name": "Publisher C",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 4,
//     "name": "Publisher D",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 5,
//     "name": "Publisher E",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 6,
//     "name": "Publisher F",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 7,
//     "name": "Publisher G",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 8,
//     "name": "Publisher H",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 9,
//     "name": "Publisher I",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   },
//   {
//     "id": 10,
//     "name": "Publisher J",
//     "logoImageUrl": "https://via.placeholder.com/150"
//   }

// ]

export default function ProductsList() {
  const dispatch = useDispatch();
  const publishers = useSelector(selectAllPublishers);
  const navigate= useNavigate()
  // console.log(publishers);
  useEffect(() => {
    dispatch(fetchAllPublsihersAsync());
  }, [dispatch]);

  if (publishers.status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-7 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl mb-10 text-center font-bold">Publication Houses</h2>

          <div className="publisher-list grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {publishers.map((publisher) => (
              <Link key={publisher.id}
                to={`/publishers/${encodeURIComponent(publisher.name)}/${encodeURIComponent(publisher.id)}`}
                // to='/ParticularPublication'
                // onClick={() => {
                // navigate(`/publishers/${publisher.name}`);
                // }}
                className="publisher-card">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={publisher.logoImageUrl}
                    // alt={publisher.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{publisher.name}</h3>
                {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.rating}</p> */}
              </Link>
            ))}
          </div>

        </div>
        {/* pagination */}

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-9 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden mx-auto">
            <a
              href="/"
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                <span className="font-medium">97</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                  href="#"
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

