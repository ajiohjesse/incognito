'use client';

import {
  CursorProps,
  Typewriter as ReactTypewriter,
  TypewriterProps,
} from 'react-simple-typewriter';

export const Typewriter: React.FC<TypewriterProps & CursorProps> = props => {
  return <ReactTypewriter cursor cursorBlinking={false} {...props} />;
};

export default Typewriter;
