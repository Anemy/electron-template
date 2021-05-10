import React, { Component } from 'react';

type Props = {
  children: any,
  className?: string,
  onClick: () => void
};

class Button extends Component<Props> {
  render() {
    return (
      <button {...this.props}/>
    );
  }
}

export default Button;