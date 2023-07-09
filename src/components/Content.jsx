import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { blogData, paragraphData } from './data.jsx';

const Content = () => {
   const [blogs, setBlogs] = useState(blogData);
   const [paragraphs, setParagraphs] = useState(paragraphData);

   return (
      <Container className='container top-spaced'>
         {blogs.map(blog => {
            return (
               <div key={blog.id}>
                  <div className='d-flex justify-content-between'>
                     <h3 className='text-decoration-underline mt-4'>{blog.title}</h3>
                  </div>
                  <div>
                     {paragraphs
                        .sort((a, b) => a.sortId - b.sortId) // sorted by sortId
                        .map(paragraph => {
                           if (paragraph.blogId === blog.id) {
                              return (
                                 <Row key={paragraph.id} className='my-3'>
                                    <Col>
                                       {paragraph.subtitle ? (
                                          <h5 className='my-4'>{paragraph.subtitle}</h5>
                                       ) : null}
                                       <p className='paragraph'>{paragraph.paragraph}</p>
                                    </Col>
                                 </Row>
                              );
                           }
                        })}
                  </div>
                  <a href='#top'>Return to top</a>
                  <p className='d-flex justify-content-end fs-6  fst-italic'>
                     - Contributed by: {blog.author}
                     <small className='text-body-secondary fs-6 text-end'>
                        {`  -  ${blog.createdDate} - `}
                     </small>
                  </p>
                  <hr />
               </div>
            );
         })}
      </Container>
   );
};

export default Content;
