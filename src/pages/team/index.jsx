import Header from "../../components/share/header";
import Footer from "../../components/share/footer";

const teamMembers = [
  {
    name: "Lia",
    role: "Frontend Developer",
    image: "/images/lia.jpg",
    description: "Bertanggung jawab dalam membangun tampilan website agar menarik dan mudah digunakan.",
  },
  {
    name: "Napila",
    role: "UI Designer",
    image: "/images/napila.jpg",
    description: "Merancang tampilan dan pengalaman pengguna agar website nyaman digunakan.",
  },
  {
    name: "Tasya",
    role: "Project Manager",
    image: "/images/tasya.jpg",
    description: "Mengatur koordinasi tim dan memastikan proyek berjalan sesuai rencana.",
  },
];

const skills = [
  "Web Development",
  "UI/UX Design",
  "Teamwork",
  "Problem Solving",
  "Project Management",
  "Creativity",
];

export default function Team() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#E8DCCB" }}
      >
        <div className="container py-4">
          <span className="badge rounded-pill mb-3 px-3 py-2"
            style={{ backgroundColor: "#657C91" }}>
            GET TO KNOW US
          </span>

          <h1 className="display-4 fw-bold" style={{ color: "#40566B" }}>
            Meet Our Team
          </h1>

          <p className="lead mx-auto" style={{ maxWidth: "650px", color: "#657C91" }}>
            Behind every great idea, there is a great team.
            Kenali orang-orang hebat di balik pengembangan Book Sales.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ color: "#40566B" }}>
            The People Behind Book Sales
          </h2>
          <p className="text-muted">
            Berkolaborasi, berkreasi, dan berkembang bersama.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div className="col-md-6 col-lg-4" key={member.name}>
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle mx-auto mb-4"
                  style={{
                    width: "170px",
                    height: "170px",
                    objectFit: "cover",
                    border: "5px solid #E8DCCB",
                  }}
                />

                <h4 className="fw-bold mb-1" style={{ color: "#40566B" }}>
                  {member.name}
                </h4>

                <span className="mb-3 fw-semibold" style={{ color: "#657C91" }}>
                  {member.role}
                </span>

                <p className="text-muted mb-0">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Team */}
      <section className="py-5" style={{ backgroundColor: "#FAF9F6" }}>
        <div className="container py-3">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3" style={{ color: "#40566B" }}>
                More Than Just a Team
              </h2>
              <p className="text-muted">
                Book Sales dikembangkan melalui kerja sama dan kontribusi
                setiap anggota tim. Kami percaya bahwa ide yang baik dapat
                diwujudkan melalui komunikasi, kreativitas, dan semangat
                untuk terus belajar.
              </p>
              <p className="text-muted mb-0">
                Setiap anggota memiliki peran masing-masing untuk menciptakan
                pengalaman berbelanja buku yang lebih baik.
              </p>
            </div>

            <div className="col-lg-6 text-center">
              <div
                className="rounded-4 p-5"
                style={{ backgroundColor: "#E8DCCB" }}
              >
                <i
                  className="fa-solid fa-people-group"
                  style={{ fontSize: "90px", color: "#657C91" }}
                ></i>
                <h3 className="fw-bold mt-4" style={{ color: "#40566B" }}>
                  Better Together
                </h3>
                <p className="text-muted mb-0">
                  Growing through collaboration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="container py-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#40566B" }}>
            Our Skills
          </h2>
          <p className="text-muted">
            Kemampuan yang mendukung pengembangan Book Sales.
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="badge rounded-pill px-4 py-3"
              style={{
                backgroundColor: "#E8DCCB",
                color: "#40566B",
                fontSize: "14px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="text-center py-5" style={{ backgroundColor: "#40566B" }}>
        <div className="container">
          <h2 className="fw-bold text-white">
            Great Things Happen Together
          </h2>
          <p className="text-white-50 mb-0">
            One team, one vision, and endless possibilities.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}