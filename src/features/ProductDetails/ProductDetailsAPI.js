
export function fetchProductDetails({ id, publisherName, subjectName, className }) {
  // console.log({id, publisherName, subjectName, className})
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/publishers');
    const data = await response.json()
    const publisher = data.find((p) => p.id == Number(id));
    if (publisher) {
      const subject = publisher.subjects.find((s) => s.name === subjectName);
      if (subject) {
        // console.log({ classes: subject })
        const classDetails = subject.classes.find((c) => c.class === className.split('-').join(' '));
        // console.log({ classDetails });
        if (classDetails) {
          // console.log({  classDetails });
          resolve({ classDetails });
        } else {
          resolve({ classDetails: null }); // Class not found for this subject
        }
      } else {
        resolve({ classDetails: null }); // Subject not found for this publisher
      }
    } else {
      resolve({ classDetails: null }); // Publisher not found
    }
  });
}
