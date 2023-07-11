/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const EditBlog = ({ editBlog, setMessage, setMessageStyle, blog, id, ...props }) => {
   const [author, setAuthor] = useState(blog.author);
   const [title, setTitle] = useState(blog.title);
   const [content, setContent] = useState(blog.content);
   const [authorLabel, setAuthorLabel] = useState('Author');
   const [titleLabel, setTitleLabel] = useState('Title');
   const [contentLabel, setContentLabel] = useState('Content');

   const handleSubmit = e => {
      e.preventDefault();
      //form validation
      if (!author || !title || !content) {
         !author ? setAuthorLabel('Author is required') : setAuthorLabel('Author');
         !title ? setTitleLabel('Title is required') : setTitleLabel('Title');
         !content ? setContentLabel('Content is required') : setContentLabel('Content');

         return;
      } else {
         setAuthorLabel('Author');
         setTitleLabel('Title');
         setContentLabel('Content');

         //create blog object
         const blog = {
            id: id,
            author: author,
            title: title,
            content: content,
            // createdDate: new Date().toLocaleDateString(),
         };
         //add edit the blog in blogs array in App.js
         editBlog(blog);
         console.log(blog);
         //close modal
         props.onHide();

         //set message
         setMessage('Blog post edited successfully!');
         setMessageStyle('text-light fw-bold fst-italic');
         setTimeout(() => {
            setMessageStyle('text-light');
            setMessage('Week 15 Project - React Blog Builder');
         }, 2000);
      }
   };

   const handleAuthor = e => {
      setAuthor(e.target.value);
   };
   const handleTitle = e => {
      setTitle(e.target.value);
   };
   const handleContent = e => {
      setContent(e.target.value);
   };

   return (
      <Modal
         {...props}
         size='xl'
         aria-labelledby='contained-modal-title-vcenter'
         centered>
         <Modal.Header className='bg-info' closeButton>
            <Modal.Title id='contained-modal-title-vcenter' className='text-light'>
               Edit Blog Post
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <h4></h4>
            <Form>
               <Form.Group className='mb-3' controlId='AddBlog.ControlInput1'>
                  <Form.Label>{authorLabel}</Form.Label>
                  <Form.Control
                     type='text'
                     placeholder='...add name'
                     autoFocus
                     value={author}
                     onChange={handleAuthor}
                     required
                  />
               </Form.Group>
               <Form.Group className='mb-3' controlId='AddBlog.ControlInput2'>
                  <Form.Label>{titleLabel}</Form.Label>
                  <Form.Control
                     type='text'
                     placeholder='...add title'
                     value={title}
                     onChange={handleTitle}
                     required
                  />
               </Form.Group>
               <Form.Group className='mb-3' controlId='AddBlog.ControlTextarea1'>
                  <Form.Label>{contentLabel}</Form.Label>
                  <Form.Control
                     as='textarea'
                     rows={10}
                     placeholder='...add content'
                     value={content}
                     onChange={handleContent}
                     required
                  />
               </Form.Group>
               <Button variant='info me-3 px-4' onClick={handleSubmit}>
                  Save
               </Button>
               <Button variant='info px-4' onClick={props.onHide}>
                  Close
               </Button>
            </Form>
         </Modal.Body>
      </Modal>
   );
};

export default EditBlog;
