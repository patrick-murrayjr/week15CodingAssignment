/* eslint-disable react/prop-types */
import Blog from './Blog';

// This component is responsible for rendering the blog posts.
const Content = ({
   blogs,
   setBlogs,
   searchTerm,
   fetchError,
   loading,
   editBlog,
   deleteBlog,
   setMessage,
   setMessageStyle,
}) => {
   return (
      <>
         {loading && <p className='text-success fs-4 fst-italic'>Loading data...</p>}
         {fetchError && !loading && (
            <p className='text-warning fs-4 fst-italic'>{fetchError}</p>
         )}
         {!fetchError && (
            <Blog
               blogs={blogs}
               setBlogs={setBlogs}
               searchTerm={searchTerm}
               editBlog={editBlog}
               deleteBlog={deleteBlog}
               setMessage={setMessage}
               setMessageStyle={setMessageStyle}
            />
         )}
      </>
   );
};

export default Content;
