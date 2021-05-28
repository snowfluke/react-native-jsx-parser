# react-native-jsx-parser

Modified JSX Parser to parse JSX string in React Native

# Install

> npm i react-native-jsx-parser --save

# Install Dependencies

- [JsxParser](https://www.npmjs.com/package/react-jsx-parser) by troyalford

> npm i react-jsx-parser --save

# Usage

```js
// Use import or require()
import RNJsxParser from 'RNJsxParser';

// Import all the components needed in the string
// Example:
import { PostCard, CommentCard } from './customComponents

// Define the components objects

const postComponents = { PostCard, CommentCard }

// Define the bindings if you have

const postBindings = { lorem: 'ipsum', handleEvent: () => { /* */ } }

// The Jsx String, you could also store and fetch from JSON file
// Just remember to wrap with React Fragment <> </>

const stringJsx = '<><PostCard> Hello </PostCard> <CommentCard/></>'

<RNJsxParser bindings={postBindings} components={postComponents} jsx={stringJsx} />

```

# Props

Props is all the same as react-jsx-parser, but only allow 3 props `bindings`, `components` and `jsx`. You could use other props by editing the file inside node_modules/react-native-jsx-parser.

See the available react-jsx-parser [Here](https://www.npmjs.com/package/react-jsx-parser)