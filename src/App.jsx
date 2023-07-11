/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';
import apiRequest from './components/apiRequest';

function App() {
   const URL_ENDPOINT = 'https://64aa54b60c6d844abede5cae.mockapi.io/myBlog/blog';

   const [blogs, setBlogs] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const [fetchError, setFetchError] = useState(null);
   const [loading, setLoading] = useState(true);
   const [message, setMessage] = useState('Week 15 Project - React Blog Builder');
   const [messageStyle, setMessageStyle] = useState('text-light');

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
   }, [message]);

   const createNewBlog = async blog => {
      setBlogs([...blogs, blog]);
      const postOptions = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(blog),
      };
      const result = await apiRequest(URL_ENDPOINT, postOptions);
      if (result) {
         setFetchError(result);
      }
   };

   const editBlog = async blog => {
      console.log(blog.id);
      const putOptions = {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(blog),
      };
      const result = await apiRequest(`${URL_ENDPOINT}/${blog.id}`, putOptions);
      if (result) {
         setFetchError(result);
      }
      const newBlogs = blogs.map(item => (item.id === blog.id ? blog : item));
      setBlogs(newBlogs);
   };

   const deleteBlog = async id => {
      const deleteOptions = {
         method: 'DELETE',
      };
      const result = await apiRequest(`${URL_ENDPOINT}/${id}`, deleteOptions);
      if (result) {
         setFetchError(result);
      }
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
   };

   return (
      <div className='bg-secondary'>
         <Navigation
            message={message}
            setMessage={setMessage}
            messageStyle={messageStyle}
            setMessageStyle={setMessageStyle}
            blogs={blogs}
            setBlogs={setBlogs}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            createNewBlog={createNewBlog}
         />
         <Container className='container top-spaced'>
            <Content
               blogs={blogs}
               setBlogs={setBlogs}
               editBlog={editBlog}
               deleteBlog={deleteBlog}
               setMessage={setMessage}
               setMessageStyle={setMessageStyle}
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
