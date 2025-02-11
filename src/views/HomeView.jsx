export default function HomeView() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "black", margin: "2rem 0" }}>
        Welcome to Gutensearch!
      </h1>
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
    </div>
  );
}
