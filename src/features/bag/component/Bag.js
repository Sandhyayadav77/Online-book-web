import React, { useState } from 'react';
import ClassSelection from './ClassSelection';
import { RiShoppingBagLine } from 'react-icons/ri';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BagCreation() {
  const [selectedClass, setSelectedClass] = useState(' ');
  const [selectedClassId, setSelectedClassId] = useState(null); // New state variable

  const handleClassSelect = (event) => {
    const selectedValue = event.target.value;
    setSelectedClass(selectedValue);

    // Find the class object by name and set its ID
    const classInfo = classList.find((classItem) => classItem.className === selectedValue);
    if (classInfo) {
      setSelectedClassId(classInfo.classId);
    }
  };

  const createBagForClass = () => {
    if (selectedClass) {
      console.log('Creating bag for class:', selectedClass);
    } else {
      console.log('Please select a class before creating a bag.');
    }
  };

  const classList = [
    { classId: 1, className: 'Class 1' },
    { classId: 2, className: 'Class 2' },
    { classId: 3, className: 'Class 3' },
    { classId: 4, className: 'Class 4' },
    { classId: 5, className: 'Class 5' },
    { classId: 6, className: 'Class 6' },
    { classId: 7, className: 'Class 7' },
    { classId: 8, className: 'Class 8' },
    // Add more classes here
  ];

  return (
    <>
      <div className="max-w-md mx-auto p-6 border rounded-lg shadow-md">
        <div className="text-center">
          <RiShoppingBagLine className="text-4xl text-blue-500 mb-4" />
          <h1 className="text-2xl font-semibold">Create a Bag</h1>
        </div>
        <div className="mb-4">
          <label htmlFor="classSelect" className="block text-gray-700 font-semibold mb-2">
            Select a Class:
          </label>
          <select
            id="classSelect"
            className="w-full p-2 border rounded"
            onChange={handleClassSelect}
            value={selectedClass}
          >
            <option value="">Select a Class</option>
            {classList.map((classInfo) => (
              <option key={classInfo.classId} value={classInfo.className}>
                {classInfo.className}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full"
          onClick={createBagForClass}
        >
          Create Bag
        </button>
        {/* Add a link to the specific class bag */}
      </div>
      {selectedClassId && (
        <div>
          <Link to={`/bag/${selectedClassId}`}>
            <div style={{ textAlign: 'center' }}>
              <FaShoppingBag size={50} /> {/* Bag icon */}
              <p>{selectedClass}</p> {/* Class name */}
            </div>
          </Link>
        </div>
      )}</>
  );
}

export default BagCreation;
