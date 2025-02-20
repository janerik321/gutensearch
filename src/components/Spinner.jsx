import styled from "styled-components";

const OuterRing = styled.div`
  width: 35px;
  height: 35px;
  margin: 1rem;
  background-image: linear-gradient(to right, lightgreen, white, lightgreen);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 500ms linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
`;

const InnerCore = styled.div`
  width: 25px;
  height: 25px;
  background-color: white;
  border-radius: 50%;
`;

export default function Spinner() {
  return (
    <OuterRing>
      <InnerCore />
    </OuterRing>
  );
}
