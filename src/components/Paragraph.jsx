/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Paragraph = ({ content }) => {
   //    console.log(content);
   return (
      <div>
         {!content && <p> No data </p>}
         {content && (
            <Row className='my-3'>
               <Col>
                  <p className='paragraph'>{content}</p>
               </Col>
            </Row>
         )}
      </div>
   );
};

export default Paragraph;
