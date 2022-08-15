import React from 'react';

type Props = {
  children: any,
  className?: string,
  onClick: () => void
};

function Button(props: Props) {
  return (
    <button {...props}/>
  );
}

export default Button;
