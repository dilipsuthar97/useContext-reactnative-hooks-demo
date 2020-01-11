import React, { useContext } from 'react';  // Imported React hooks function (useContext)
import { FlatList, Text } from 'react-native';
import BlogContext from '../context/BlogContext';
import ItemBlog from './model/ItemBlog';

const BlogList = () => {

    const blogs = useContext(BlogContext);  // This is a React Hooks function
    // Learn more about this here
    // https://reactjs.org/docs/hooks-reference.html#usecontext

    return(
        <FlatList
            data={blogs}
            keyExtractor={(blog) => blog.id}
            renderItem={({item}) => {
                return <ItemBlog blog={item}/>
            }}
        />
    );
}

export default BlogList;