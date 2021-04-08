import React from 'react';
import './ErrorBar.css';

interface ErrorBarProps {
  message: string;
}

const ErrorBar = (props: ErrorBarProps) => {
  return (
    <div className="error-bar">
      <h3>{props.message}</h3>
    </div>
  );
};

export default ErrorBar;
