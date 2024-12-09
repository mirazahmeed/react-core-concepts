import './book.css'
export default function Book({ book }) {
    return(
        <div className="book">
            <h2>Title: {book.title}</h2>
            <h3>Author: {book.author}</h3>
            <p>Description: {book.description}</p>
            <h4>Price: ${book.price}</h4>
            <p>Available: {book.available ? "Yes" : "No"}</p>
        </div>
    );
}
