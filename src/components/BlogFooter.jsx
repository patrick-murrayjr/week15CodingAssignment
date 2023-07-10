/* eslint-disable react/prop-types */
import React from 'react';

const BlogFooter = ({ blog }) => {
   return (
      <>
         <a href='#top'>Return to top</a>
         <p className='d-flex justify-content-end fs-6  fst-italic'>
            - Contributed by: {blog.author}
            <small className='text-body-secondary fs-6 text-end'>
               {`  -  ${blog.createdDate} - `}
            </small>
         </p>
      </>
   );
};

export default BlogFooter;
