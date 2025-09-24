import "./Portfolio.scss";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Website",
      image: "/images/portfolio1.jpg",
      link: "#",
    },
    {
      title: "Corporate Website",
      image: "/images/portfolio2.jpg",
      link: "#",
    },
    {
      title: "Portfolio Website",
      image: "/images/portfolio3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio-container">
        <h2>A Look at Our Portfolio</h2>
        <p className="subtitle">
          Here are some of the websites we’ve built for our clients.
        </p>

        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div className="portfolio-card" key={index}>
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <a href={project.link} className="view-btn">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
