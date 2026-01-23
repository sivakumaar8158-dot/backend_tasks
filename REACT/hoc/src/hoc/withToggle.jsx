import { useState } from 'react';

const withToggle = (Component) => {
  return function EnhancedComponent(props) {
    const [isActive, setIsActive] = useState(false);

    const toggle = () => setIsActive(!isActive);
    const activate = () => setIsActive(true);
    const deactivate = () => setIsActive(false);

    return (
      <Component
        isActive={isActive}
        toggle={toggle}
        activate={activate}
        deactivate={deactivate}
        {...props}
      />
    );
  };
};

export default withToggle;
