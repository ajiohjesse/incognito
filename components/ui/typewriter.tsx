'use client';

import {
  Typewriter as ReactTypewriter,
  TypewriterProps,
  CursorProps,
} from 'react-simple-typewriter';

export const Typewriter: React.FC<
  TypewriterProps & CursorProps
> = props => {
  return (
    <ReactTypewriter
      {...props}
      cursor
      cursorBlinking={false}
    />
  );
};

export default Typewriter;
