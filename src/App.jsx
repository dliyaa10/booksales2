
import './App.css'

function App() {
  return (
    <>
      {/* Header */}
      <header className="border-bottom">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-3">
            <a
              href="/"
              className="navbar-brand fs-3 fw-semibold d-flex align-items-center gap-2"
            >
              <i className="fa-solid fa-book-open"></i>
              Book Sales
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarBook"
              aria-controls="navbarBook"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarBook">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Book</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Team</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>

              <div className="d-flex gap-2 ms-lg-3">
                <a href="#" className="btn btn-login">Login</a>
                <a href="#" className="btn btn-register">Register</a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-5 hero-section">
        <div className="row align-items-center g-5">

          {/* Gambar Buku */}
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600"
              className="img-fluid rounded-4 shadow"
              alt="Buku Atomic Habits"
            />
          </div>

          {/* Deskripsi Buku */}
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold hero-title">
              Atomic Habits
            </h1>

            <p className="lead mt-3">
              Perubahan kecil yang memberikan hasil luar biasa.
              Pelajari bagaimana kebiasaan kecil dapat membantu
              membangun kehidupan yang lebih baik.
            </p>

            <div className="d-flex gap-2 mt-4">
              <a href="#" className="btn btn-login">
                Buy Now
              </a>

              <a href="#" className="btn btn-outline-secondary">
                Detail
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Product List */}
      <section className="album py-5">
        <div className="container">

          {/* Judul Product List */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="fw-bold">Bestseller</h2>

            <a href="#" className="btn btn-login">
              See All Books
            </a>
          </div>

          {/* Daftar Buku */}
          <div className="row row-cols-1 row-cols-md-3 g-4">

            {/* Buku 1 */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
                  className="card-img-top product-img"
                  alt="Atomic Habits"
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">Atomic Habits</h5>
                  <p className="card-text">James Clear</p>
                  <h6 className="fw-bold">Rp85.000</h6>

                  <a href="#" className="btn btn-login mt-2">
                    Detail
                  </a>
                </div>
              </div>
            </div>

            {/* Buku 2 */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500"
                  className="card-img-top product-img"
                  alt="The Psychology of Money"
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    The Psychology of Money
                  </h5>
                  <p className="card-text">Morgan Housel</p>
                  <h6 className="fw-bold">Rp95.000</h6>

                  <a href="#" className="btn btn-login mt-2">
                    Detail
                  </a>
                </div>
              </div>
            </div>

            {/* Buku 3 */}
            <div className="col">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500"
                  className="card-img-top product-img"
                  alt="The Power of Habit"
                />

                <div className="card-body">
                  <h5 className="card-title fw-bold">
                    The Power of Habit
                  </h5>
                  <p className="card-text">Charles Duhigg</p>
                  <h6 className="fw-bold">Rp90.000</h6>

                  <a href="#" className="btn btn-login mt-2">
                    Detail
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 footer-section">
        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">
              <h5 className="fw-bold">
                <i className="fa-solid fa-book-open me-2"></i>
                Book Sales
              </h5>

              <p className="mb-0">
                Temukan buku favoritmu dan mulai pengalaman membaca yang menyenangkan.
              </p>
            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <a href="#" className="footer-link me-3">Home</a>
              <a href="#" className="footer-link me-3">Books</a>
              <a href="#" className="footer-link">Contact</a>
            </div>

          </div>

          <hr />

          <p className="text-center mb-0">
            © 2026 Book Sales. All rights reserved.
          </p>

        </div>
      </footer>
    </>
  )
}

export default App
