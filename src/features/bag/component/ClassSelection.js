// ClassSelection.js

import React from 'react';

function ClassSelection({ classes, onSelectClass }) {
  return (
    <div>
      <h2>Select a Class:</h2>
      {classes.map((classInfo) => (
        <button
          key={classInfo.classId}
          onClick={() => onSelectClass(classInfo)}
        >
          {classInfo.className}
        </button>
      ))}
    </div>
  );
}

export default ClassSelection;
