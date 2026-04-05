import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Electronics &amp; Communication</h4>
                <h5>Manipal University Jaipur (MUJ)</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            Graduated from MUJ. Focused on building a strong foundation in
            software development and computer science principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Sharp Industries</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            Crafted clean, scalable, and high-performance interfaces with a
            strong focus on usability, precision, and modern design standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>EPAM Systems</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Contributed to projects for Expedia, Novartis, and Indiana
              Hemophilia &amp; Thrombosis Center (currently), developing scalable,
              high-performance applications with a focus on clean architecture
              and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
