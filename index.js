import React from 'react';
import JsxParser from 'react-jsx-parser';

const RNJsxParser = ({jsx, ...props}) => {
  let content = jsx.replace(/\n/g, ' ')
  content = content.replace(/\t/g, ' ')
  content = content.replace(/\s\s+/g, ' ')
  content = content.replace(/> </g, '><')

  return (
    <>
      <JsxParser renderInWrapper={false} jsx={content} {...props} />
    </>
  )
}

export default RNJsxParser