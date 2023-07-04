import { Spin } from 'antd';
import React, { memo } from 'react';
import { LoadingProps } from './loading.type';

const Loading: React.FC<LoadingProps> = (props) => {
  const { size = 40, color = '#F7941D' } = props;

  return (
    <Spin
      indicator={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ margin: 'auto', background: 'none', fontSize: size }}
          display="block"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="none"
            stroke={color}
            strokeDasharray="164.93361431346415 56.97787143782138"
            strokeWidth="7"
          >
            <animateTransform
              attributeName="transform"
              dur="1.1363636363636365s"
              keyTimes="0;1"
              repeatCount="indefinite"
              type="rotate"
              values="0 50 50;360 50 50"
            ></animateTransform>
          </circle>
        </svg>
      }
    />
  );
};

export default memo(Loading);
