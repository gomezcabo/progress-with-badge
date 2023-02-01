export const Progress = ({
  percentage,
  isCircleVisible,
  isSelected,
  onSelect,
  children
}) => {
  const angleInRadians = 2 * Math.PI * percentage;
  const circleRadius = 4;
  const x = 18 + (18 - circleRadius / 2) * Math.sin(angleInRadians);
  const y = 18 - (18 - circleRadius / 2) * Math.cos(angleInRadians);

  return (
    <div
      className="cursor-pointer relative flex items-center justify-center h-48 w-48"
      onClick={() => onSelect?.()}
    >
      {children}
      <svg
        viewBox="0 0 36 36"
        className="circular-chart h-48 w-48 overflow-visible absolute"
      >
        {isSelected ?? false ? (
          <g transform="translate(-1.2, -1) scale(1.06)">
            <path
              className="fill-none stroke-blue-300"
              strokeDasharray="100, 100"
              strokeWidth="2"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </g>
        ) : null}
        <path
          className="fill-none stroke-gray-100"
          strokeDasharray="100, 100"
          strokeWidth="2"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="fill-none stroke-green-600"
          strokeDasharray={`${percentage * 100}, 100`}
          strokeWidth="2"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <circle cx={18.2} cy={2.08} r="0.50" className="stroke-green-600" />
        {isCircleVisible ?? false ? (
          <>
            <g transform={`translate(${x},${y})`}>
              {/* background */}
              <circle cx="0" cy="0" r="3.5" fill="orange" />
              {/* star */}
              <polygon
                points="0.057142857142857384,-3.0142857142857142 -1.657142857142857,2.3571428571428568 2.628571428571429,-1.0714285714285712 -2.5142857142857142,-1.0714285714285712 1.7714285714285714,2.3571428571428568"
                fill="#D15816"
              />
              {/* glass effect */}
              <g transform="rotate(45,0,0)">
                <rect
                  x="-1.5"
                  y="-3.5"
                  width="3"
                  height="7"
                  fill="white"
                  fillOpacity="0.4"
                />
              </g>
              {/* border */}
              <g transform="scale(0.23) translate(-18,-18)">
                <path
                  className="fill-none stroke-[#D15816]"
                  strokeDasharray="100, 100"
                  strokeWidth="3"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </g>
            </g>
          </>
        ) : null}
      </svg>
    </div>
  );
};
