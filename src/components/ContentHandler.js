import { useState, useEffect, useRef } from 'react';

function contentHandler(initialContent) {
  const [content, setContent] = useState(initialContent);
  const contentRef = useRef([]);

  const contentLinkIndex = (index) => {
    setContent(index);
  };

  useEffect(() => {
    contentRef.current.forEach((listItem, i) => {
      if (i === content) {
        listItem.classList.add('active');
      } else {
        listItem.classList.remove('active');
      }
    });
  }, [content]);

  return { content, contentLinkIndex, contentRef };
}

export default contentHandler;
