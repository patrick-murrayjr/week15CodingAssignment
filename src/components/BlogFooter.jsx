/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap';
const BlogFooter = ({ blog }) => {
   return (
      <>
         <a href='#top'>Return to top</a>
         <p className='d-flex justify-content-end fs-6 text-info fst-italic'>
            ~ Contributed by: {blog.author}
            <small className='fs-6 text-info text-end'>
               {` ,   ${blog.createdDate} ~ `}
            </small>
         </p>

         <Button variant='outline-info px-3'>Edit</Button>
         <Button variant='outline-danger ms-2'>Delete</Button>
      </>
   );
};

export default BlogFooter;
