const BlogList = (props) =>
{
    const blogs = props.blogs ;
    const title = props.title ;
    const handledelete = props.handledelete ;
    

    return (
       <div className="blog-list">
        <h1>{title}</h1>
        {blogs.map((blog) => (
            
            <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by:{blog.author}</p>
            <button onClick={()=> handledelete(blog.id)}>Delete Blog</button>
            </div>
            ))}
       </div>

    ) ;
}

export default BlogList ;