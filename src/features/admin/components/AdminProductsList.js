import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { selectAllPublishers, fetchAllPublsihersAsync } from '../../Product-list/ProductsListSlice'
// import {Link} from 'react-router-dom'
import { Link, useNavigate } from 'react-router-dom';

// publisher list 
export default function AdminProductsList() {
  const dispatch = useDispatch();
  const publishers = useSelector(selectAllPublishers);
  const navigate = useNavigate()
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
          <h2 className="text-3xl mb-6 text-center font-bold ">Publication Houses</h2>
          {/* <Link>
            <div className='flex justify-center items-center '>
              <button className='px-3 py-[6px] rounded-md bg-green-600 txt-sm font-semibold text-white mb-6 '>Add New Product</button>
            </div>
          </Link> */}
          <div className="publisher-list grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {publishers.map((publisher) => (
              <div>
                <Link key={publisher.id}
                  to={`/publishers/${encodeURIComponent(publisher.name)}/${encodeURIComponent(publisher.id)}`}
                  // to='/ParticularPublication'
                  // onClick={() => {
                  // navigate(`/publishers/${publisher.name}`);
                  // }}
                  className="publisher-card  ">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 ">
                    <img
                      src={publisher.logoImageUrl}
                      // alt={publisher.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75 px-3 py-2"
                    />
                  </div>
                  <h3 className="mt-4 text-xl text-gray-700 py-1  font-semibold text-center">{publisher.name}</h3>
                  {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.rating}</p> */}

                </Link>
                <div className='flex justify-center items-center '>
                  <button className='px-3 py-[6px] rounded-md bg-indigo-600 txt-sm font-semibold text-white'>Edit Product</button>
                </div>
              </div>
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

