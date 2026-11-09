
import Header from "../../components/share/header";

export default function Contact() {
  return (
    <>
      <Header />

      <section className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Us</h1>
          <p className="text-muted">
            Have questions or need help? We'd love to hear from you.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card border-0 shadow-sm p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center mt-4 text-muted">
          <i className="fa-solid fa-envelope me-2"></i>
          support@booksales.com
        </div>
      </section>
    </>
  );
}
