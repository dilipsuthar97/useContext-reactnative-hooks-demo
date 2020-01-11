# useContext-ReactNative-hooks-demo
This is a simple blog app which show you a list of dummy blogs. The main point in this on which i focused is a useContext hooks function which I used in this demo project.
Learn more about hooks and see how to setup project on your machine below :point_down:

![Status](https://img.shields.io/badge/status-online-brightgreen.svg)
[![License](https://img.shields.io/badge/license-Apache-teal?logo=apache)](https://github.com/dilipsuthar1997/MaterialColor/blob/master/LICENSE.txt)
[![Coffee](https://img.shields.io/badge/support-buy%20me%20a%20coffee!-orange?logo=buymeacoffee)](https://www.buymeacoffee.com/dilipsuthar97)

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/makes-people-smile.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/you-didnt-ask-for-this.svg)](https://forthebadge.com)

## Hooks
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
React with Hooks Video (https://youtu.be/dpw9EHDh2bM)
List of all Hooks functions
1. **useState**
2. **useReducer**
3. **useContext** *-used in this project*

## useContext
Sample code `const value = useContext(MyContext);`
Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.

When the nearest <MyContext.Provider> above the component updates, this Hook will trigger a rerender with the latest context value passed to that MyContext provider. Even if an ancestor uses React.memo or shouldComponentUpdate, a rerender will still happen starting at the component itself using useContext.

## How to setup?
1. Download a .zip file of repository.
2. Extract the **useContext-ReactNative-hooks-demo.zip** file
3. Open Extracted folder in your favorite IDE. (Atom, VisualStudioCode, Sublime)
4. Open command prompt in windows press <kbd>⌃R</kbd> OR open terminal in MacOS.
5. go to **useContext-ReactNative-hooks-demo.zip** project directory
6. Execute command `npm install`. 
  1. Before writing this command make sure you have preinstalled **Expo CLI QuickStart** in your machine.
  2. If not follow guide (https://facebook.github.io/react-native/docs/getting-started)
7. After all this execute command `npm start`
  1. It will start Metro builder in your browser
  2. When you see **Tunnel ready.** log in your metro builder connect device OR open **simulator/emulator**
  3. press `a` in command prompt.
8. And woila All done...! :smile:

## Support Development
<a href="https://www.buymeacoffee.com/dilipsuthar97">
    <img src="https://raw.githubusercontent.com/ravjanisz/imagecrypt/master/docs/assets/bmc.png" alt="Buy me a coffee ☕">
</a>

## License
```
Copyright 2020 Dilip Suthar

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
