/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import { useState, useEffect } from 'react';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
   const URL_ENDPOINT = 'https://64aa54b60c6d844abede5cae.mockapi.io/myBlog/blog';

   const [blogs, setBlogs] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      const fetchBlogs = async () => {
         try {
            const response = await fetch(URL_ENDPOINT);
            const data = await response.json();
            setBlogs(data);
         } catch (error) {
            console.log(error);
         }
      };
      fetchBlogs();
   }, []);

   return (
      <>
         <Navigation
            title={'Week 15 Project - REACT Blog Builder'}
            blogs={blogs}
            setBlogs={setBlogs}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
         />
         <Content blogs={blogs} setBlogs={setBlogs} searchTerm={searchTerm} />
         <Footer />
      </>
   );
}

export default App;
