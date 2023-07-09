import './App.css';
import { useState } from 'react';
import { blogData, paragraphData } from './components/data.jsx';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
   const [blogs, setBlogs] = useState(blogData);
   const [paragraphs, setParagraphs] = useState(paragraphData);

   return (
      <>
         <Navigation
            title={'Week 15 Project - REACT Blog Builder'}
            blogs={blogs}
            setBlogs={setBlogs}
            paragraphs={paragraphs}
            setParagraphs={setParagraphs}
         />
         <Content
            blogs={blogs}
            setBlogs={setBlogs}
            paragraphs={paragraphs}
            setParagraphs={setParagraphs}
         />
         <Footer />
      </>
   );
}

export default App;
