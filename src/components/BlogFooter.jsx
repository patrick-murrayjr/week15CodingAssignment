/* eslint-disable react/prop-types */
import EditBlog from './EditBlog';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import DeleteBlog from './DeleteBlog';

const BlogFooter = ({ blog, deleteBlog, editBlog, setMessage, setMessageStyle }) => {
   const [modalDeleteShow, setModalDeleteShow] = useState(false);
   const [modalShow, setModalShow] = useState(false);

   // This function is called when the edit button is clicked
   // It sets the modalShow state to true which opens the modal
   const handleEditShow = id => {
      // console.log(`edit clicked', id: ${id}`);
      setModalShow(true);
   };

   return (
      <>
         <a href='#top'>Return to top</a>
         <p className='d-flex justify-content-end fs-6 text-info fst-italic'>
            ~ Contributed by: {blog.author}
            <small className='fs-6 text-info text-end'>
               {` ,   ${blog.createdDate} ~ `}
            </small>
         </p>
         <Button variant='outline-info px-3' onClick={() => handleEditShow(blog.id)}>
            Edit
         </Button>
         <EditBlog
            editBlog={editBlog}
            setMessage={setMessage}
            setMessageStyle={setMessageStyle}
            show={modalShow}
            onHide={() => setModalShow(false)}
            blog={blog}
            id={blog.id}
         />
         <Button variant='outline-danger ms-2' onClick={() => setModalDeleteShow(true)}>
            Delete
         </Button>
         <DeleteBlog
            blog={blog}
            deleteBlog={deleteBlog}
            setMessage={setMessage}
            setMessageStyle={setMessageStyle}
            show={modalDeleteShow}
            onHide={() => setModalDeleteShow(false)}
         />
      </>
   );
};

export default BlogFooter;
