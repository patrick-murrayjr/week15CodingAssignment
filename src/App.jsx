/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
   const URL_ENDPOINT = 'https://64aa54b60c6d844abede5cae.mockapi.io/myBlog/blog';

   const [blogs, setBlogs] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const [fetchError, setFetchError] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchBlogs = async () => {
         try {
            const response = await fetch(URL_ENDPOINT);
            const data = await response.json();
            if (!response.ok) {
               throw new Error('Something went wrong');
            }
            setBlogs(data);
            setFetchError(null);
         } catch (error) {
            setFetchError(error.message);
         } finally {
            setLoading(false);
         }
      };
      fetchBlogs();
   }, []);

   return (
      <div className='bg-secondary'>
         <Navigation
            title={'Week 15 Project - REACT Blog Builder'}
            blogs={blogs}
            setBlogs={setBlogs}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
         />
         <Container className='container top-spaced'>
            <Content
               blogs={blogs}
               setBlogs={setBlogs}
               searchTerm={searchTerm}
               fetchError={fetchError}
               loading={loading}
            />
         </Container>
         <Footer />
      </div>
   );
}

export default App;
