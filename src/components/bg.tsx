import "./style.css";

export interface IGroup1Props {}

export const Group1 = ({ ...props }: IGroup1Props): JSX.Element => {
  return (
    <svg
      className="group-1"
      width="2575"
      height="2065"
      viewBox="0 0 2575 2065"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M788.069 503.42L1977.44 860.931L612.46 1732.88L788.069 503.42Z"
        fill="url(#paint0_linear_103_122)"
      />
      <path
        d="M1603.73 449.038L2395.75 634.518L1440.13 1245.87L1603.73 449.038Z"
        fill="url(#paint1_linear_103_122)"
      />
      <ellipse cx="795.5" cy="751" rx="465.5" ry="425" fill="#7A3199" />
      <defs>
        <linearGradient
          id="paint0_linear_103_122"
          x1="788.069"
          y1="503.42"
          x2="1463.91"
          y2="1561.4"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A3199" />
          <stop offset="1" stopColor="#161033" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_103_122"
          x1="1603.73"
          y1="449.038"
          x2="2022.67"
          y2="1103.91"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7A3199" />
          <stop offset="1" stopColor="#161033" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Group1;
