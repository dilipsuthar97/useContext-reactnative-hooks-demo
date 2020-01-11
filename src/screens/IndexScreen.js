import React from 'react';
import { View, StatusBar } from 'react-native';
import { Appbar } from 'react-native-paper';
import BlogList from '../components/BlogList';

const IndexScreen = () => {
    return(
        <View style={{flex: 1}}>
            {/* <View style={{height: StatusBar.currentHeight, backgroundColor: '#6200ee'}}>
                <StatusBar barStyle="light-content"/>
            </View> */} 
            {/* If not work uncomment upper code and delete this line */}
            <Appbar.Header>
                <Appbar.Content title='Blogs' subtitle="List of tech blogs"/>
            </Appbar.Header>
            <BlogList/>
        </View>
    );
}

export default IndexScreen;