function App() {
  return (
    <div>
      <h1>My Blog</h1>
      <BlogEntry
        title="My First Blog Entry"
        summary="This is the summary of my first blog entry."
      />
      <BlogEntry
        title="My Second Blog Entry"
        summary="This is the summary of my second blog entry."
      />
      <BlogEntry
        title="My Third Blog Entry"
        summary="This is the summary of my third blog entry."
      />
    </div>
  );
}

function BlogEntry(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.summary}</p>
      <button>Read more..</button>
    </div>
  );
}

export default App;
