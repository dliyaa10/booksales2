function ProductList() {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: "Rp120.000",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400",
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: "Rp95.000",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T. Kiyosaki",
      price: "Rp110.000",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400",
    },
  ];

  return (
    <section className="product-section py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Bestseller</h2>
          <a href="#" className="text-decoration-none">See All Books</a>
        </div>

        <div className="row">
          {books.map((book, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={book.image}
                  className="card-img-top"
                  alt={book.title}
                  style={{ height: "280px", objectFit: "cover" }}
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
      </div>
    </section>
  );
}

export default ProductList;