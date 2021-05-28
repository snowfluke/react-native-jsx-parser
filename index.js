import React from 'react';
import JsxParser from 'react-jsx-parser';

const RNJsxParser = ({jsx, bindings, components}) => {
  let content = jsx.replace(/\n/g, ' ')
      content = content.replace(/\t/g, ' ')
      content = content.replace(/\s\s+/g, ' ')
      content = content.replace(/> </g, '><')

  return (
    <>
      <JsxParser bindings={bindings} components={components} renderInWrapper= {false} jsx={content}/>
    </>
  )
}

export default RNJsxParser