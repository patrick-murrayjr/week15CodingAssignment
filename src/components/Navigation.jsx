/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({ title }) => {
   return (
      <Navbar
         expand='lg'
         className='navbar bg-primary px-4 py-3 '
         fixed='top'
         data-bs-theme='dark'>
         <Container fluid>
            <h3 className='text-light'>{title}</h3>
            <Navbar.Toggle aria-controls='navbarScroll' />
            <Navbar.Collapse id='navbarScroll'>
               <Nav
                  className='ms-auto my-2 my-lg-0 d-flex '
                  style={{ maxHeight: '100px' }}
                  navbarScroll>
                  <Button variant='outline-light  ms-3 px-4'>Create New Post</Button>
               </Nav>
               <Form className='d-flex ms-3' data-bs-theme='light'>
                  <Form.Control
                     type='search'
                     placeholder='Search posts'
                     className='me-3'
                     aria-label='Search'
                  />
                  <Button variant='outline-light px-4'>Clear</Button>
               </Form>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Navigation;
