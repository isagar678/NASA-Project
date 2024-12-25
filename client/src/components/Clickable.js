import React, { useCallback } from 'react';
import { withSounds } from 'arwes';

const Clickable = (props) => {
  const { children, sounds, onClick, ...rest } = props;

  const clickWithSound = useCallback((e) => {
    if (sounds?.click?.play) sounds.click.play();
    if (onClick) onClick(e);
  }, [sounds, onClick]);

  return (
    <span
      {...rest}
      onClick={clickWithSound}
      tabIndex={0} // Makes it focusable for accessibility
      role="button" // Indicates it's clickable
    >
      {children}
    </span>
  );
};

export default withSounds()(Clickable);
