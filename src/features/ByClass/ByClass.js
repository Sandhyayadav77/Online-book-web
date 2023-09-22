import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClassforSubjectsAsync, selectClassesForSubject } from './ByClassSlice';
import { Link, useParams } from 'react-router-dom';

// class 1-8 books of particular after passing from the subject of individual publisher
export function ByClass() {

  const dispatch = useDispatch();
  const { publisherName, subjectName, id } = useParams()
  // console.log(publisherName, subjectName, id)
  const publisherId = id;
  useEffect(() => {
    return () => {
      dispatch(fetchClassforSubjectsAsync({ publisherId, publisherName, subjectName }))
    }
  }, [dispatch, publisherId, subjectName, publisherName])
  const classesForSubject = useSelector(selectClassesForSubject);
  // classesForSubject.map((product) => {
  //   console.log(product.class)
  // })

  const [cart, setCart] = useState([]);

  // Step 2: Define a function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  console.log('classesForSubject', classesForSubject)
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-14 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">{publisherName} -{subjectName}</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {classesForSubject.map((product, index) => (
              <div key={index} className="group relative">
                <Link to={`/product-details/${publisherName}/${id}/${subjectName}/${(product.class).split(' ').join('-')}`}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.book.byClassSubjectImageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500"><b>{product.class} </b> </p>
                      <p className="mt-1 text-sm text-gray-500"><b>{product.book.title} </b> </p>
                    </div>
                    {/* <p className="text-sm font-medium text-gray-900"> <b>Price : </b>{product.price}</p> */}
                    <p className="text-sm font-medium text-gray-900"> <b>Price : </b>{product.book.price}</p>
                  </div>
                </Link>
                {/* <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => addToCart(product)} // Call addToCart with the product when the button is clicked
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Add to Cart
                    </button> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
