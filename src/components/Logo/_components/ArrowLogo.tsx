import React from 'react';

interface ArrowLogoProps {
  size?: number;
  thickness?: number;
  color?: string;
  arrowSize?: number;
  className?: string;
}

const ArrowLogo: React.FC<ArrowLogoProps> = ({
  size = 100,
  thickness = 5,
  color = "#ffffff",
  arrowSize = 20,
  className = "",
}) => {
  const offset = thickness / 2;
  const max = 100 - offset;
  const aSize = Math.max(arrowSize, thickness);

  return (
    <div 
      style={{ width: size, height: size }} 
      className={`relative flex items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          {/* This mask ensures nothing—even thick line ends—protrudes outside the square */}
          <clipPath id="logo-clip">
            <rect x="0" y="0" width="100" height="100" />
          </clipPath>
        </defs>

        <g clipPath="url(#logo-clip)">
          {/* DIAGONAL LINES
             - Changed to strokeLinecap="butt" to stop the 'ears' from standing out.
             - Points set to 0 and 100 to ensure they fill the corner completely.
          */}
          <g stroke={color} strokeWidth={thickness} strokeLinecap="butt">
            <line x1="0" y1="0" x2="100" y2="100" />
            <line x1="100" y1="0" x2="0" y2="100" />
          </g>

          {/* CORNER BRACKETS 
             - Inset by 'offset' so the outer edge of the stroke hits the 0/100 mark perfectly.
          */}
          <path
            d={`
              M${offset} ${aSize} V${offset} H${aSize}
              M${100 - aSize} ${offset} H${max} V${aSize}
              M${offset} ${100 - aSize} V${max} H${aSize}
              M${100 - aSize} ${max} H${max} V${100 - aSize}
            `}
            stroke={color}
            strokeWidth={thickness}
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </g>
      </svg>
    </div>
  );
};

export default ArrowLogo;