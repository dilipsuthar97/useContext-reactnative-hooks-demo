import React from 'react';
import blogsData from '../res/dummyBlogs.json';

const BlogContext = React.createContext();

const blogPosts = blogsData;

const BlogProvider = ({ children }) => {
    return <BlogContext.Provider value={blogPosts}>
        {children}
    </BlogContext.Provider>
}

export { BlogProvider };
export default BlogContext;