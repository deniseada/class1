function App() {
  return (
    <div>
      <h1>My Blog</h1>
      <BlogEntry title="My First Blog Entry" />
      <BlogEntry title="My Second Blog Entry" />
      <BlogEntry title="My Third Blog Entry" />
    </div>
  );
}

function BlogEntry() {
  return (
    <div>
      <h2>{title}</h2>
      <p>
        This is my first blog entry. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatibus quas ratione ullam labore quasi provident
        alias debitis a. Tenetur, temporibus maiores. Repellendus repudiandae
        veniam cum dignissimos blanditiis! Nihil, recusandae aut.
      </p>
      <button>Read more..</button>
    </div>
  );
}

export default App;
