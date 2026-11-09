function Hero() {
  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="fw-bold mb-3">Atomic Habits</h1>
            <p className="mb-4">
              Buku yang membantu kamu membangun kebiasaan baik,
              menghilangkan kebiasaan buruk, dan menjadi lebih baik
              setiap harinya.
            </p>
            <button className="btn btn-primary me-2">Buy Now</button>
            <button className="btn btn-outline-primary">Detail</button>
          </div>

          <div className="col-md-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500"
              alt="Buku Atomic Habits"
              className="img-fluid rounded"
              style={{ maxHeight: "350px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;