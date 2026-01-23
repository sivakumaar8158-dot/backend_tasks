import { useState } from 'react';

const withShowHide = (Component) => {
  return function EnhancedComponent(props) {
    const [isVisible, setIsVisible] = useState(false);

    const toggle = () => setIsVisible(!isVisible);
    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    return (
      <Component
        isVisible={isVisible}
        toggle={toggle}
        show={show}
        hide={hide}
        {...props}
      />
    );
  };
};

export default withShowHide;
