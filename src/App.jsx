import Books from "./books";
import "./index.css";

function App() {
  return (
    <div className="container">
      <h1>Book Catalog</h1>
      <div className="bookContainers">
        <button className="newBook">+</button>
        <Books
          title="Programming for Absolute Beginners"
          authors="Jonathan Bartlett"
          image="/public/images/Programming.png"
          detailsUrl="https://itbook.store/books/9781484287507"
        />
        <Books
          title="Firewalls Don't Stop Dragons"
          authors="Carey Parker"
          image="/public/images/firewall.png"
          detailsUrl="https://itbook.store/books/9781484290354"
        />
      </div>
      <footer> @ 2025 Denise Aquino</footer>
    </div>
  );
}

export default App;
