const LeftToRightTopArrow = ({ size = 200, color = "#fff", strokeWidth = 6 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curved path */}
      <path
        d="M40 150 
           Q40 170 60 170 
           L90 170 
           Q110 170 110 150 
           L110 80 
           Q110 60 130 60 
           L160 60"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Arrow head */}
      <path
        d="M150 50 L170 60 L150 70"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default LeftToRightTopArrow;