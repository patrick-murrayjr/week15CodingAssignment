/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteBlog = ({ blog, deleteBlog, setMessage, setMessageStyle, ...props }) => {
   const handleDelete = id => {
      deleteBlog(id);
      setMessageStyle('text-light fw-bold fst-italic');
      setMessage('Blog post deleted successfully!');
      setTimeout(() => {
         setMessageStyle('text-light');
         setMessage('Week 15 Project - React Blog Builder');
      }, 2000);
   };
   return (
      <Modal
         {...props}
         size='lg'
         aria-labelledby='contained-modal-title-vcenter'
         centered>
         <Modal.Header className='bg-info' closeButton>
            <Modal.Title id='contained-modal-title-vcenter' className='text-light'>
               Confirm Delete
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>Are your sure you want to delete this blog?</p>
            <h5>{blog.title}</h5>
            <p> by {blog.author}</p>
         </Modal.Body>
         <Modal.Footer>
            <Button variant='danger' onClick={() => handleDelete(blog.id)}>
               Confirm
            </Button>
            <Button variant='primary ms-2' onClick={props.onHide}>
               Cancel
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default DeleteBlog;
