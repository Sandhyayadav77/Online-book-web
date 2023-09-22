
export function fetchClassesForSubjectAPI(publisherName, publisherId, subjectName) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/publishers');
    const data = await response.json()
    // console.log(typeof data[0].id)
    // console.log(typeof Number(publisherId))
    const publisher = data.find((p) => p.id == Number(publisherId));
    if (publisher) {
      const subject = publisher.subjects.find((s) => s.name === subjectName);
      // console.log(publisher);
      if (subject) {
        // console.log( { classes: subject.classes })
        resolve({ classes: subject.classes });
      } else {
        resolve({ classes: [] }); // Subject not found for this publisher
      }
    } else {
      resolve({ classes: [] }); // Publisher not found
    }
  })
}




// fetchClassesForSubjectAPI(1, "English")