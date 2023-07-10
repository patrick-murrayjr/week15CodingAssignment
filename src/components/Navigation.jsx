/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({
   title,
   blogs,
   setBlogs,
   paragraphs,
   setParagraphs,
   searchTerm,
   setSearchTerm,
}) => {
   const [searchField, setSearchField] = useState('');
   const handleSearch = e => {
      e.preventDefault();
      setSearchField(e.target.value);
      setSearchTerm(e.target.value);
   };

   const handleClear = e => {
      e.preventDefault();

      setSearchField('');
      setSearchTerm('');
   };

   return (
      <Navbar
         expand='lg'
         className='navbar bg-primary px-4 py-3 shadow'
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
                  <Button variant='outline-light  ms-4 me-4 px-4'>Create Post</Button>
               </Nav>
               <Form className='d-flex ms-4 me-4' data-bs-theme='light'>
                  <Form.Control
                     type='search'
                     style={{ minWidth: '300px' }}
                     placeholder='Search by Title or Author'
                     className='me-3'
                     aria-label='Search'
                     value={searchField}
                     onChange={handleSearch}
                  />
                  <Button variant='outline-light px-4' onClick={handleClear}>
                     Clear
                  </Button>
               </Form>
            </Navbar.Collapse>
         </Container>
      </Navbar>
   );
};

export default Navigation;
