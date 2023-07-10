/* eslint-disable react/prop-types */
import Paragraph from './Paragraph';
import BlogFooter from './BlogFooter';

function Blog({ blogs, setBlogs, paragraphs, setParagraphs, searchTerm }) {
   return (
      <>
         {blogs
            .filter(
               blog =>
                  blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  blog.author.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map(blog => {
               return (
                  <div key={blog.id}>
                     <div className='d-flex justify-content-between'>
                        <h3 className='text-decoration-underline mt-4'>{blog.title}</h3>
                     </div>
                     <div>
                        {paragraphs
                           .sort((a, b) => a.sortId - b.sortId) // sorted by sortId
                           .map(paragraph => {
                              if (paragraph.blogId === blog.id) {
                                 return (
                                    <Paragraph paragraph={paragraph} key={paragraph.id} />
                                 );
                              }
                           })}
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
