// eslint-disable-next-line import/no-unresolved
import IconShuffle from './IconShuffle';
import React from 'react';
interface Props {
  className?: string;
  iconSize: number;
  strokeWidth?: number;
}

const IconShuffleActive = ({ className, iconSize }: Props) => {
  return (
    <div style={{ width: `${iconSize}px` }}>
      <IconShuffle className={className} iconSize={iconSize} />
      <svg viewBox="0 0 48 11">
        <circle cx="24" cy="5" r="4" fill="white" />
      </svg>
    </div>
  );
};

export default IconShuffleActive;