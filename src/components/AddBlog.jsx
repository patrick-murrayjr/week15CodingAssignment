import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

('react');

const AddBlog = props => {
   return (
      <Modal
         {...props}
         size='xl'
         aria-labelledby='contained-modal-title-vcenter'
         centered>
         <Modal.Header className='bg-info' closeButton>
            <Modal.Title id='contained-modal-title-vcenter'>
               Add a New Blog Post
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <h4></h4>
            <Form>
               <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                  <Form.Label>Author</Form.Label>
                  <Form.Control type='text' placeholder='...add name' autoFocus />
               </Form.Group>
               <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
                  <Form.Label>Blog Title</Form.Label>
                  <Form.Control type='text' placeholder='...add title' />
               </Form.Group>
               <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                  <Form.Label>Post Content</Form.Label>
                  <Form.Control as='textarea' rows={10} placeholder='...add content' />
               </Form.Group>
            </Form>
         </Modal.Body>
         <Modal.Footer>
            <Button variant='info px-4' onClick={props.onHide}>
               Save
            </Button>
            <Button variant='info px-4' onClick={props.onHide}>
               Close
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default AddBlog;
