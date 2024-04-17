import styled from "styled-components";

type Props = {
  idx: string;
  text: string;
};

const Title = ({ idx, text, ...rest }: Props) => {
  return (
    <Styles {...rest}>
      <p className="idx">{idx}.</p>
      <p className="text">{text}</p>
    </Styles>
  );
};

export default Title;

const Styles = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  .idx {
    font-size: 24px;
  }
  .text {
    padding: 4px 20px;
    background: #fff;
    border-radius: 4px;
    font-weight: 500;
    font-size: 24px;
    color: #0d0d0f;
    line-height: 125%;
  }

  @media only screen and (max-width: 1280px) {
    .idx {
      font-size: 18px;
    }
    .text {
      font-size: 18px;
    }
  }
`;
