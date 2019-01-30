import React from 'react';

function load(Component:any) {
  return (props:any) => (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </React.Suspense>
  );
}

export default load;
