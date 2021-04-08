import React from 'react';

interface HeadingBarProps {
  onButtonClick: () => void;
  headingText: string;
}

const HeadingBar = (props: HeadingBarProps) => {
  return (
    <div>
      <button className="back-button hoverable" onClick={props.onButtonClick}>
        Back to users
      </button>
      <h3 className="post-user">{props.headingText}</h3>
    </div>
  );
};

export default HeadingBar;
