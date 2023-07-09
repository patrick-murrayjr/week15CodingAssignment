/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({ title }) => {
   return (
      <>
         <Navbar className='navbar bg-primary' data-bs-theme='dark'>
            <Container className='container-fluid'>
               <Navbar.Brand>
                  <h3 className='text-light'>{title}</h3>
               </Navbar.Brand>
            </Container>
         </Navbar>
      </>
   );
};

export default Navigation;
