import { useAppSelector } from "@/hooks/rtkHooks";
import { SvgProps } from "@/lib/components/types";
import { SVGProps } from "react";

export function ETHABJ_SVG2() {
  const { appTheme } = useAppSelector((state: any) => state.themeReducer);

  return {
    // =================================================================APP LOGO =================================================================
    scrollAnimationIcon: (props?: SvgProps) => {
      return (
        <svg
          width={36}
          height={52}
          viewBox="0 0 36 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <rect
            x={0.75}
            y={0.75}
            width={34.5}
            height={50.5}
            rx={17.25}
            stroke="#000"
            strokeWidth={1.5}
          />
          <g clipPath="url(#clip0_199_532)">
            <path
              d="M18.75 14a.75.75 0 00-1.5 0h1.5zM18 41.33L22.33 37 18 32.67 13.67 37 18 41.33zM17.25 14v23h1.5V14h-1.5z"
              fill="#1B2A4D"
            />
          </g>
          <defs>
            <clipPath id="clip0_199_532">
              <rect width={36} height={52} rx={18} fill="#fff" />
            </clipPath>
          </defs>
        </svg>
      );
    },
    joinusStyleSvg: (props?: SvgProps) => {
      return (
        <svg
          width={140}
          height={140}
          viewBox="0 0 192 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path
            d="M14.198 59.748c13.651-6.744 30.738-11.183 45.404-4.858 3.715 1.602 7.036 4.266 9.632 7.534m0 0c3.954 4.978 6.227 11.354 5.652 17.508-.9 9.626-5.858 18.993-15.924 20.933-5.247 1.012-10.27-.409-12.418-5.699-3.281-8.08 3.203-18.596 9.067-23.7 4.055-3.529 8.662-6.56 13.623-9.042zm108.748-15.266c-14.537-4.529-32.108-6.245-45.606 2.292-3.419 2.162-6.283 5.313-8.337 8.946m0 0c-3.129 5.534-4.378 12.187-2.849 18.175 2.392 9.368 8.752 17.845 18.998 18.19 5.34.18 10.08-2.008 11.375-7.568 1.979-8.494-6.067-17.868-12.657-21.993-4.556-2.853-9.579-5.127-14.867-6.804zm0 0c-18.582-5.894-38.634-5.632-54.992 3.983"
            stroke="url(#paint0_linear_199_2498)"
            strokeWidth={3.5}
            strokeLinecap="round"
          />
          <path
            d="M168.312 32.882c3.085 3.016 9.94 10.178 12.677 14.7"
            stroke="url(#paint1_linear_199_2498)"
            strokeWidth={3.5}
            strokeLinecap="round"
          />
          <path
            d="M180.99 47.581c-3.788 2.066-12.33 7.098-16.192 10.706"
            stroke="url(#paint2_linear_199_2498)"
            strokeWidth={3.5}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_199_2498"
              x1={22.8213}
              y1={16.0195}
              x2={183.249}
              y2={49.9501}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.229167} stopColor="#4662AA" />
              <stop offset={0.572917} stopColor="#BC67FF" />
              <stop offset={1} stopColor="#4BDC5A" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_199_2498"
              x1={173.759}
              y1={46.0261}
              x2={180.154}
              y2={37.0772}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.214454} stopColor="#5ACE6F" />
              <stop offset={0.427765} stopColor="#4662AA" />
              <stop offset={0.772061} stopColor="#BC67FF" />
              <stop offset={1} stopColor="#4BDC5A" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_199_2498"
              x1={201.44}
              y1={50.2393}
              x2={185.733}
              y2={35.954}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset={0.229167} stopColor="#4662AA" />
              <stop offset={0.572917} stopColor="#BC67FF" />
              <stop offset={1} stopColor="#5ACE6F" />
            </linearGradient>
          </defs>
        </svg>
      );
    },
    heroBox: (props?: SvgProps) => {
      return (
        <svg
          width={156}
          height={139}
          viewBox="0 0 156 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <g
            style={{
              mixBlendMode: "multiply",
            }}
            filter="url(#filter0_f_199_264)"
          >
            <path
              d="M41.676 131.133l8.278 3.679 25.754-17.936-22.535-14.716 36.792-20.236 28.973 13.797 11.038-3.679-9.658-20.235c-18.113 2.158-27.185.358-43.23-3.22L54.553 57.09l-6.438 3.22 27.133 13.336-39.55 23.915L7.643 83.304l-5.519 3.68L26.499 99.4c10.373 10.056 14.676 16.489 15.177 31.733z"
              fill="#000"
              fillOpacity={0.5}
            />
          </g>
          <path
            d="M130.579 58.01l1.597.918-3.827 2.21-1.593-.92 3.823-2.208zM126.36 7.042l-4.811-2.777V42.897L85.006 63.988v4.14l41.019-23.676.335-37.41z"
            fill="#FEFDC8"
          />
          <path
            d="M85.007 30.91l-4.476 2.584v23.324c0 5.068-.606 10.122-1.938 15.011-5.684 20.855-11.432 34.631-24.04 57.465v8.718l23.914-13.803v-.869l.098-35.974v-1.897l3.824-2.207 1.596.918v11.65a359.07 359.07 0 002.315 7.813V78.878l32.637-18.838 4.314-2.49-.005 40.63 3.495-2.016.015-35.947 3.823-2.207 1.597.918v5.963c0 3.06.455 6.106 1.384 9.022 1.806 5.674 3.294 9.905 5.419 14.5l16.52-9.535v-7.953c0-.31-.157-.6-.416-.772-8.132-5.396-14.619-11.888-19.04-19.986a50.166 50.166 0 01-2.506-5.317c-2.312-5.753-2.701-12.04-2.701-18.242V4.458l-4.476 2.584-.335 37.41-41.019 23.675V30.91z"
            fill="#FEFDC8"
          />
          <path
            d="M80.53 33.494l-4.81-2.777v19.862c0 7.989-.929 15.966-3.124 23.648-.122.428-.244.853-.367 1.275-5.135 17.678-10.729 30.735-22.276 51.033l4.6 2.759c12.608-22.834 18.356-36.61 24.04-57.465 1.332-4.889 1.938-9.943 1.938-15.01V33.493z"
            fill="#008994"
          />
          <path
            d="M92.723 126.627v-6.121l-4.74 3.002v6.121l4.74-3.002z"
            fill="#FEFDC8"
          />
          <path
            d="M141.154 98.479v-5.66l-5.201 3.001v5.661l5.201-3.002z"
            fill="#FDFDC8"
          />
          <path
            d="M135.953 95.82l5.201-3.002c-.804-1.538-1.52-2.989-2.175-4.405-2.125-4.595-3.613-8.826-5.419-14.5a29.718 29.718 0 01-1.384-9.022v-5.963l-3.827 2.21v10.474c0 .13.015.261.043.388 2.052 9.172 3.476 14.4 7.561 23.82z"
            fill="#00ECF7"
          />
          <path
            d="M135.953 101.481v-5.66c-4.085-9.421-5.509-14.65-7.561-23.821a1.806 1.806 0 01-.043-.388V61.137l-1.593-.92-.015 35.947 9.212 5.317z"
            fill="#EBFFEE"
          />
          <path
            d="M118.937 60.04V95.694l4.309 2.487.005-40.63-4.314 2.49z"
            fill="#008994"
          />
          <path
            d="M118.937 73.187l-6.106 8.723c-.216.309-.332.677-.332 1.055v4.978l6.438 3.717V73.187z"
            fill="#008894"
          />
          <path
            d="M83.985 84.18l-1.596-.918-3.824 2.207 1.594.92 3.826-2.209zM80.159 86.39v11.668l3.826-2.229V84.18l-3.826 2.21zM87.983 123.508l4.74-3.002c-2.877-6.399-4.613-11.052-6.423-16.863a359.07 359.07 0 01-2.315-7.814l-3.826 2.23c2.255 10.686 4.142 16.096 7.823 25.449z"
            fill="#FEFDC8"
          />
          <path
            d="M49.953 126.535v8.815l4.6 2.662v-8.718l-4.6-2.759z"
            fill="#008894"
          />
          <path
            d="M87.983 129.629v-6.121c-3.682-9.353-5.569-14.763-7.825-25.45V86.39l-1.593-.92v1.897l-.098 35.974v.336l9.516 5.953z"
            fill="#EBFFEE"
          />
          <path
            d="M85.007 30.91l-4.811-2.776-4.476 2.583 4.81 2.777 4.477-2.584zM130.836 4.459l-4.811-2.777-4.476 2.583 4.811 2.777 4.476-2.583z"
            fill="#fff"
          />
          <path
            d="M85.007 30.91l-4.811-2.776-4.476 2.583m9.287.193l-4.476 2.584m4.475-2.584v33.078m-4.475-30.494l-4.811-2.777m4.81 2.777v23.324c0 5.068-.605 10.122-1.937 15.011v0c-5.684 20.855-11.432 34.631-24.04 57.465M75.72 30.717v19.862c0 7.989-.929 15.966-3.124 23.648-.122.428-.244.853-.367 1.275-5.135 17.678-10.729 30.735-22.276 51.033M130.836 4.459l-4.811-2.777-4.476 2.583m9.287.194l-4.476 2.583m4.476-2.583v22.15c0 6.2.389 12.488 2.701 18.241a50.166 50.166 0 002.506 5.317c4.421 8.098 10.908 14.59 19.04 19.986.259.172.416.461.416.772v7.953l-16.52 9.535M126.36 7.042l-4.811-2.777m4.811 2.777l-.335 37.41-41.019 23.675v-4.139M121.55 4.265V42.897L85.006 63.988m-30.454 65.306l-4.599-2.759m4.6 2.759v8.718m-4.6-11.477v8.815l4.6 2.662m0 0l23.914-13.803v-.533m40.47-63.636v13.147m0-13.147L86.3 78.878v24.765m32.637-43.603l4.314-2.49-.005 40.63m-4.309-24.993l-6.106 8.723c-.216.309-.332.677-.332 1.055v4.978l6.438 3.717m0-18.473V91.66m17.016 9.821l5.201-3.002v-5.66m-5.201 8.662v-5.66m0 5.66l-9.212-5.317m-34.018 24.342v6.121l-4.74 3.002m4.74-9.123l-4.74 3.002m4.74-3.002c-2.877-6.399-4.613-11.052-6.423-16.863m1.683 25.986v-6.121m0 6.121l-9.516-5.953m9.516-.168c-3.682-9.353-5.569-14.763-7.825-25.45m0 0V86.39m0 11.67l3.827-2.23m-3.826-9.44l-1.594-.92m1.594.92l3.826-2.209m0 11.65V84.18m0 11.65a359.07 359.07 0 002.315 7.813M83.985 84.18l-1.596-.918-3.824 2.207m0 0v1.897l-.098 35.974v.336m62.687-30.858l-5.201 3.002m5.201-3.002c-.804-1.538-1.52-2.989-2.175-4.405m-3.026 7.407c-4.085-9.42-5.509-14.648-7.561-23.82a1.806 1.806 0 01-.043-.388v0m-5.103 26.569l-4.309-2.487V91.66m4.309 6.52l3.495-2.016m0 0l.015-35.947m0 0l3.823-2.207 1.597.918m-5.42 1.29l1.593.92m3.827-2.21l-3.827 2.21m3.827-2.21v5.963c0 3.06.455 6.106 1.384 9.022 1.806 5.674 3.294 9.905 5.419 14.5m-10.63-27.276v10.475m-.214.124l.214-.124m3.827-2.221l-3.827 2.22"
            stroke="#000E0F"
            strokeWidth={0.275937}
            strokeLinejoin="round"
          />
          <path
            d="M89.445 22.756l12.34 20.213V29.82l-12.34-7.063z"
            fill="#04002F"
          />
          <path
            d="M101.785 42.97l12.42-20.214-12.42 7.062V42.97z"
            fill="#7DEAF9"
          />
          <path
            d="M89.445 22.756l12.34 7.062 12.42-7.062-12.339-7.063-12.42 7.063z"
            fill="#5F37FF"
          />
          <path
            d="M101.785 42.97l12.42-20.214m-12.42 20.213l-12.34-20.213m12.34 20.213V29.82m12.42-7.063l-12.42 7.062m12.42-7.062l-12.339-7.063-12.42 7.063m0 0l12.339 7.062"
            stroke="#000"
            strokeWidth={0.16236}
          />
          <g
            style={{
              mixBlendMode: "multiply",
            }}
            filter="url(#filter1_f_199_264)"
          >
            <path
              d="M100.648 29.17l12.664-7.47-19.24-1.785-4.627 2.76 11.203 6.494z"
              fill="#000"
              fillOpacity={0.5}
            />
          </g>
          <path
            d="M89.523 21.133l12.259 7.143V1L89.523 21.133z"
            fill="#393562"
          />
          <path
            d="M114.202 21.133L101.782 1v27.276l12.42-7.143z"
            fill="#53CADB"
          />
          <path
            d="M101.782 1l12.42 20.133-12.42 7.143m0-27.276L89.523 21.133l12.259 7.143m0-27.276v27.276"
            stroke="#000"
            strokeWidth={0.16236}
          />
          <g
            style={{
              mixBlendMode: "multiply",
            }}
            filter="url(#filter2_f_199_264)"
          >
            <path
              d="M16.245 68.667L27.9 75.688l16.661 2.27-5.83-13.165-10.83-6.594-14.986-1.819 3.331 12.287z"
              fill="#000"
              fillOpacity={0.5}
            />
          </g>
          <defs>
            <filter
              id="filter0_f_199_264"
              x={0.745315}
              y={55.7104}
              width={130.61}
              height={80.4815}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={0.689842}
                result="effect1_foregroundBlur_199_264"
              />
            </filter>
            <filter
              id="filter1_f_199_264"
              x={89.1206}
              y={19.5901}
              width={24.5161}
              height={9.90383}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={0.16236}
                result="effect1_foregroundBlur_199_264"
              />
            </filter>
            <filter
              id="filter2_f_199_264"
              x={11.5344}
              y={55.0007}
              width={34.4054}
              height={24.3363}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation={0.689842}
                result="effect1_foregroundBlur_199_264"
              />
            </filter>
          </defs>
        </svg>
      );
    },
  };
}
