import React from 'react';

function MedalIcon({ size = 24, stroke = 2, color = '#42526e' }: { size?: number; stroke?: number; color?: string }) {
  return (
    <svg height={size} width={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>medal</title>
      <g
        fill={color}
        stroke={color}
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth={stroke}>
        <line fill="none" stroke={color} strokeLinecap="butt" x1="7" x2="17" y1="5" y2="5" />
        <polygon fill="none" points="17 8 12 11 7 8 7 1 17 1 17 8" stroke={color} strokeLinecap="butt" />
        <polygon
          fill="none"
          points="12 12 13.624 15.292 17.257 15.82 14.629 18.382 15.249 22 12 20.291 8.751 22 9.371 18.382 6.743 15.82 10.376 15.292 12 12"
          strokeLinecap="butt"
        />
      </g>
    </svg>
  );
}

export default MedalIcon;