import useCheckScrollY from "@/hooks/useCheckScrollY";
import styled from "styled-components";

const ScrollToTop = () => {
  const isScroll = useCheckScrollY(200);
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isScroll) return <></>;
  return (
    <S onClick={handleClick}>
      <div className="scroll-wrapper">
        <span className="icon">
          <Arrow />
        </span>
        <p className="text">Back to top</p>
      </div>
    </S>
  );
};

export default ScrollToTop;

const S = styled.div`
  position: fixed;
  z-index: 100;
  right: 30px;
  bottom: 100px;
  padding: 10px;
  cursor: pointer;
  z-index: 100%;
  .scroll-wrapper {
    position: relative;
    .icon {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -130%);
    }
    .text {
      transform: rotate(90deg);
      font-size: 18px;
      width: 42px;
      white-space: nowrap;
    }
  }

  @media only screen and (max-width: 1280px) {
    right: 30px;
    background: #fff;
    border-radius: 4px;
    width: 50px;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 40px;
    .scroll-wrapper {
      .icon {
        transform: translate(0, 0);
        position: static;
        svg {
          width: 16px;
          height: auto;
        }
      }
      .text {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 430px) {
    right: 15px;
    bottom: 30px;
  }
`;

const Arrow = () => {
  return (
    <svg
      width="18"
      height="34"
      viewBox="0 0 18 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.8385 33.6017C15.3696 34.1328 16.2307 34.1328 16.7618 33.6017C17.2929 33.0706 17.2929 32.2094 16.7618 31.6783L9.96182 24.8783C9.43071 24.3472 8.56961 24.3472 8.03849 24.8783L1.2385 31.6783C0.707382 32.2094 0.707382 33.0706 1.2385 33.6017C1.76961 34.1328 2.63071 34.1328 3.16183 33.6017L9.00016 27.7633L14.8385 33.6017ZM14.8385 25.4417C15.3696 25.9728 16.2307 25.9728 16.7618 25.4417C17.2929 24.9106 17.2929 24.0495 16.7618 23.5183L9.96182 16.7183C9.43071 16.1872 8.56961 16.1872 8.03849 16.7183L1.2385 23.5183C0.707381 24.0495 0.707381 24.9106 1.2385 25.4417C1.76961 25.9728 2.63071 25.9728 3.16183 25.4417L9.00016 19.6033L14.8385 25.4417ZM16.7618 17.2817C16.2307 17.8128 15.3696 17.8128 14.8385 17.2817L9.00016 11.4433L3.16182 17.2817C2.63071 17.8128 1.76961 17.8128 1.2385 17.2817C0.707381 16.7506 0.707381 15.8895 1.2385 15.3583L8.03849 8.55834C8.5696 8.02723 9.43071 8.02723 9.96182 8.55834L16.7618 15.3583C17.2929 15.8895 17.2929 16.7506 16.7618 17.2817ZM14.8385 9.12167C15.3696 9.65279 16.2307 9.65279 16.7618 9.12167C17.2929 8.59056 17.2929 7.72946 16.7618 7.19834L9.96182 0.398347C9.43071 -0.132766 8.5696 -0.132766 8.03849 0.398347L1.23849 7.19834C0.70738 7.72946 0.70738 8.59056 1.23849 9.12167C1.76961 9.65279 2.63071 9.65279 3.16182 9.12167L9.00016 3.28334L14.8385 9.12167Z"
        fill="url(#paint0_linear_35_1506)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_35_1506"
          x1="9.00016"
          y1="34"
          x2="9.00016"
          y2="1.21575e-05"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0" />
          <stop offset="0.0001" stop-color="#A58D91" stop-opacity="0" />
          <stop offset="1" stop-color="#A58D91" />
        </linearGradient>
      </defs>
    </svg>
  );
};
