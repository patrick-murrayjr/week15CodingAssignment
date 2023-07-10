/* eslint-disable react/prop-types */
import Paragraph from './Paragraph';
import BlogFooter from './BlogFooter';

function Blog({ blogs, setBlogs, searchTerm }) {
   return (
      <>
         {blogs
            .filter(
               blog =>
                  blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  blog.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  blog.content.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(blog => {
               return (
                  <div key={blog.id}>
                     <div className='d-flex justify-content-between'>
                        <h3 className='text-decoration-underline mt-4'>{blog.title}</h3>
                     </div>
                     <div>
                        <Paragraph content={blog.content} />
                     </div>
                     <BlogFooter blog={blog} />
                     <hr />
                  </div>
               );
            })}
      </>
   );
}

export default Blog;
