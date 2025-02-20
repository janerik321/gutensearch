import styled from "styled-components";

const Title = styled.h1`
  color: black;
  margin: 2rem 0;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function HomeView() {
  return (
    <MainArea>
      <Title>Welcome to Gutensearch!</Title>
      <h3>Search for books, and add them to your favorites.</h3>
      <br />
      <h3>
        Books hosted by{" "}
        <a href="https://www.gutenberg.org/" target="_blank">
          Project Gutenberg
        </a>
        .
      </h3>
      <h3>
        API:{" "}
        <a href="https://gutendex.com/" target="_blank">
          Gutendex
        </a>
        .
      </h3>
    </MainArea>
  );
}
