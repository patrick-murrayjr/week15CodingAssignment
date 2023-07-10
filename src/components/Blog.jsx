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
                  <div key={blog.id} className='col-lg my-4 m-3 '>
                     <div className='card border-light mb-3 shadow-sm'>
                        <div className='card-header text-light fs-4 bg-info'>
                           {blog.title}
                        </div>
                        <div className='card-body mx-4'>
                           <Paragraph content={blog.content} />
                           <BlogFooter blog={blog} />
                        </div>
                     </div>
                  </div>
               );
            })}
      </>
   );
}

export default Blog;
