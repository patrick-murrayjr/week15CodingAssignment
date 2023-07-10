/* eslint-disable react/prop-types */
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Blog from './Blog';
import Paragraph from './Paragraph';

const Content = ({ blogs, setBlogs, paragraphs, setParagraphs, searchTerm }) => {
   return (
      <Container className='container top-spaced'>
         <Blog
            blogs={blogs}
            setBlogs={setBlogs}
            paragraphs={paragraphs}
            setParagraphs={setParagraphs}
            searchTerm={searchTerm}
         />
      </Container>
   );
};

export default Content;
