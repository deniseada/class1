function Books({ title, authors, image, detailsUrl }) {
  return (
    <div className="book">
      <img className="book-image" src={image} alt={title} />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-authors">{authors}</p>
        <a
          className="book-link"
          href={detailsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

export default Books;
