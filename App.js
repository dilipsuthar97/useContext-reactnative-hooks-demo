import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: {
      screen: IndexScreen,
      navigationOptions: () => ({
        title: 'Blogs'
      }),
    }
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none'  // hide the header on all screen (I added react-native-paper header)
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
    <PaperProvider>
      <App/>
    </PaperProvider>
  </BlogProvider>
}
