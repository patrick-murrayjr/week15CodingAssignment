/* eslint-disable react/prop-types */
import Paragraph from './Paragraph';
import BlogFooter from './BlogFooter';

// This component is responsible for rendering the blog posts.
// It receives the blogs array from App.js and maps over it to render each blog post.
// It also receives the searchTerm from App.js and filters the blogs array based on the searchTerm.
// It also receives the editBlog and deleteBlog functions from App.js and passes them to the BlogFooter component.
// It also receives the setMessage and setMessageStyle functions from App.js and passes them to the BlogFooter component.

function Blog({ blogs, deleteBlog, editBlog, searchTerm, setMessage, setMessageStyle }) {
   return (
      <>
         {blogs.filter(
            blog =>
               blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
               blog.content.toLowerCase().includes(searchTerm.toLowerCase())
         ).length === 0 && (
            <div
               key='a0'
               className='h-auto d-flex justify-content-center align-items-center'>
               <p className='text-warning m-5 fs-3 fst-italic'>No matching items found</p>{' '}
            </div>
         )}
         {blogs
            .filter(
               blog =>
                  blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  blog.content.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(blog => {
               return (
                  <div key={blog.id} className='col-lg my-4 m-3 '>
                     <div className='card border-light mb-3 shadow-sm'>
                        <div className='card-header text-light fs-4 bg-info'>
                           {blog.title}
                        </div>
                        <div className='card-body mx-4'>
                           <Paragraph content={blog.content} />
                           {/* {console.log(blog.content)} */}
                           <BlogFooter
                              blog={blog}
                              editBlog={editBlog}
                              deleteBlog={deleteBlog}
                              setMessage={setMessage}
                              setMessageStyle={setMessageStyle}
                           />
                        </div>
                     </div>
                  </div>
               );
            })}
      </>
   );
}

export default Blog;
