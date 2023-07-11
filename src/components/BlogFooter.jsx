/* eslint-disable react/prop-types */
import EditBlog from './EditBlog';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const BlogFooter = ({ blog, deleteBlog, editBlog, setMessage, setMessageStyle }) => {
   // const [modalDeleteShow, setModalDeleteShow] = useState(false);
   const [modalShow, setModalShow] = useState(false);

   const handleEditShow = id => {
      console.log(`edit clicked', id: ${id}`);
      setModalShow(true);
   };

   const handleDeleteClick = id => {
      deleteBlog(id);
      setMessageStyle('text-light fw-bold fst-italic');
      setMessage('Blog post deleted successfully!');
      setTimeout(() => {
         setMessageStyle('text-light');
         setMessage('Week 15 Project - React Blog Builder');
      }, 2000);
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
         <Button variant='outline-danger ms-2' onClick={() => handleDeleteClick(blog.id)}>
            Delete
         </Button>
      </>
   );
};

export default BlogFooter;
