import React from 'react';

interface HighlightTextProps {
  text: string;
}

const HighlightText: React.FC<HighlightTextProps> = ({ text }) => {
  return (
    <span className='bg-[#4CAF4F] text-transparent bg-clip-text font-bold'>
      {text}
    </span>
  );
}

export default HighlightText;
