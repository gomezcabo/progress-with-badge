import "./styles.css";
import { Progress } from "./Progress";
import * as React from "react";

const ThreeLinesClamp = ({ children }) => (
  <div
    className="w-28"
    style={{
      display: "-webkit-box",
      WebkitLineClamp: "3",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    }}
  >
    {children}
  </div>
);

const CheckMarkIcon = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.72677 14.1662L2.16677 8.60624L0.273438 10.4862L7.72677 17.9396L23.7268 1.93957L21.8468 0.0595703L7.72677 14.1662Z"
      fill="#38975D"
    />
  </svg>
);

export default function App() {
  const [percentage, setPercentage] = React.useState(0.2);
  const [firstSelected, setFirstSelected] = React.useState(false);
  const [secondSelected, setSecondSelected] = React.useState(false);

  return (
    <div className="App">
      <div className="relative flex min-h-screen flex justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 items-center gap-9">
        <div className="relative">
          <div className="mx-auto max-w-md">
            <Progress percentage={100} isSelected={firstSelected} onSelect={() => setFirstSelected(!firstSelected)}>
              <div className="flex flex-col justify-center items-center">
                <ThreeLinesClamp>Lorem ipsum dolor sit amet </ThreeLinesClamp>
                <div className="mt-2">
                  <CheckMarkIcon />
                </div>
              </div>
            </Progress>
            <div className="relative -mt-9 rounded-full py-1.5 bg-green-600 text-white">80% Success Rate</div>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-md">
            <Progress
              percentage={percentage}
              isCircleVisible={true}
              isSelected={secondSelected}
              onSelect={() => setSecondSelected(!secondSelected)}
            >
              <div className="flex flex-col justify-center items-center -mt-2">
                <ThreeLinesClamp>One two three four five six seven eight nine ten eleven twelve</ThreeLinesClamp>
                <div className="mt-1 text-xs flex gap-1">
                  <span className="text-blue-500">{Math.round(percentage * 100)}%</span>
                  <span className="text-gray-500">Success Rate</span>
                </div>
              </div>
            </Progress>
          </div>
        </div>

        <div>
          <div>{Math.round(percentage * 100)}%</div>
          <input
            type="range"
            className="w-48"
            value={percentage}
            min="0"
            max="1"
            step="0.05"
            onChange={(e) => setPercentage(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
