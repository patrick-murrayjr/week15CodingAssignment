/* eslint-disable react/prop-types */

import Container from 'react-bootstrap/Container';
import Blog from './Blog';

const Content = ({ blogs, setBlogs, searchTerm }) => {
   return (
      <Container className='container top-spaced'>
         <Blog blogs={blogs} setBlogs={setBlogs} searchTerm={searchTerm} />
      </Container>
   );
};

export default Content;
