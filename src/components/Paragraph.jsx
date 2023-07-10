import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Paragraph = ({ paragraph }) => {
   return (
      <div>
         <Row key={paragraph.id} className='my-3'>
            <Col>
               {paragraph.subtitle ? (
                  <h5 className='my-4'>{paragraph.subtitle}</h5>
               ) : null}
               <p className='paragraph'>{paragraph.paragraph}</p>
            </Col>
         </Row>
      </div>
   );
};

export default Paragraph;
