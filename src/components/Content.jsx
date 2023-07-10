/* eslint-disable react/prop-types */

import Blog from './Blog';

const Content = ({ blogs, setBlogs, searchTerm, fetchError, loading }) => {
   return (
      <>
         {loading && <p className='text-success fs-4 fst-italic'>Loading data...</p>}
         {fetchError && !loading && (
            <p className='text-warning fs-4 fst-italic'>{fetchError}</p>
         )}
         {!fetchError && (
            <Blog blogs={blogs} setBlogs={setBlogs} searchTerm={searchTerm} />
         )}
      </>
   );
};

export default Content;
