// import React, { useState } from 'react'
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'



// const AdminProductForm = () => {
//   const [selectedClass, setSelectedClass] = useState(' ');
//   const [selectedClassId, setSelectedClassId] = useState(null); // New state variable

//   const handleClassSelect = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedClass(selectedValue);

//     // Find the class object by name and set its ID
//     const classInfo = classList.find((classItem) => classItem.className === selectedValue);
//     if (classInfo) {
//       setSelectedClassId(classInfo.classId);
//     }
//   };

//   const classList = [
//     { classId: 1, className: 'Class 1' },
//     { classId: 2, className: 'Class 2' },
//     { classId: 3, className: 'Class 3' },
//     { classId: 4, className: 'Class 4' },
//     { classId: 5, className: 'Class 5' },
//     { classId: 6, className: 'Class 6' },
//     { classId: 7, className: 'Class 7' },
//     { classId: 8, className: 'Class 8' },
//     // Add more classes here
//   ];

//   return (
//     <>

//       <form>
//         <div className="space-y-12 bg-white p-12">
//           <div className="border-b border-gray-900/10 pb-12">
//             <h2 className="text-base font-semibold leading-7 text-gray-900">Add New Product</h2>

//             <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               <div className="sm:col-span-4">
//                 <label htmlFor="publishername" className="block text-sm font-medium leading-6 text-gray-900">
//                   Publisher Name
//                 </label>
//                 <div className="mt-2">
//                   <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">

//                     <input
//                       type="text"
//                       id="publishername"
//                       autoComplete="publishername"
//                       className="block flex-1 w-screen border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>
//               </div>
//               {/* logo url  */}
//               <div className="col-span-full">
//                 <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
//                   Logo Url
//                 </label>
//                 <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
//                   <div className="text-center">
//                     <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
//                     <div className="mt-4 flex text-sm leading-6 text-gray-600">
//                       <label
//                         htmlFor="file-upload"
//                         className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
//                       >
//                         <span>Upload a file</span>
//                         <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                       </label>
//                       <p className="pl-1">or drag and drop</p>
//                     </div>
//                     <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-4">
//           <label htmlFor="classSelect" className="block text-gray-700 font-semibold mb-2">
//             Select a Class:
//           </label>
//           <select
//             id="classSelect"
//             className="w-full p-2 border rounded"
//             onChange={handleClassSelect}
//             value={selectedClass}
//           >
//             <option value="">Select a Class</option>
//             {classList.map((classInfo) => (
//               <option key={classInfo.classId} value={classInfo.className}>
//                 {classInfo.className}
//               </option>
//             ))}
//           </select>
//         </div>
//             </div>

//           </div>



//         </div>

//         <div className="mt-6 flex items-center justify-end gap-x-6">
//           <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//           >
//             Save
//           </button>
//         </div>
//       </form>
//     </>
//   )
// }

// export default AdminProductForm



import React, { useState } from 'react';

const PublisherForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    logoImageUrl: '',
    subjects: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddSubject = () => {
    const newSubject = {
      name: '',
      classes: [],
    };
    setFormData({
      ...formData,
      subjects: [...formData.subjects, newSubject],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to your backend or perform any required actions
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Add Publisher Data</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name">Publisher Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="logoImageUrl">Logo Image URL:</label>
          <input
            type="url"
            id="logoImageUrl"
            name="logoImageUrl"
            value={formData.logoImageUrl}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div>
          <h2>Subjects</h2>
          {formData.subjects.map((subject, index) => (
            <div key={index} className="border p-4 rounded">
              <label htmlFor={`subjectName${index}`}>Subject Name:</label>
              <input
                type="text"
                id={`subjectName${index}`}
                name={`subjects[${index}].name`}
                value={subject.name}
                onChange={handleInputChange}
                required
                className="border p-2 rounded"
              />
              {/* Add fields for classes and books here */}
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSubject}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Subject
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="p-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublisherForm;
