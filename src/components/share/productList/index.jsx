
import { useState } from "react";
import booksData from "../../../utils/books";

function ProductList() {
  const [books, setBooks] = useState(booksData);

  const addBook = () => {
    const newBook = {
      id: Math.max(...books.map((book) => book.id), 0) + 1,
      title: "Buku React JS Lanjutan",
      author: "Alya Dliya",
      price: "Rp100.000",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400",
    };

    setBooks([...books, newBook]);
  };

  return (
    <section className="product-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Bestseller</h2>
          <a href="/books" className="text-decoration-none">
            See All Books
          </a>
        </div>

        <div className="row">
          {books.map((book) => (
            <div className="col-md-4 mb-4" key={book.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{
                    height: "280px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">{book.title}</h5>
                  <p className="text-muted">{book.author}</p>
                  <p className="fw-bold">{book.price}</p>
                  <button className="btn btn-primary">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={addBook}>
            + Tambah Buku
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
