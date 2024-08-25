import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="personal-photo">
          <img
            className="photo"
            src="../../../public/images/photo-aing.svg"
            alt=""
          />
        </div>
        <div className="about-title">
          <h2>Akmal Ihksan.</h2>
          <h1>Web Developer</h1>
        </div>
        <div className="about-sentences">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            numquam in, incidunt neque, totam nisi magnam tempora, ipsum minima
            maxime rerum nihil? Sapiente, labore consequatur!
          </p>
        </div>
        <div className="hire-container">
          <button className="download-cv">Download CV</button>
          <button className="call-me">Hubungi Sekarang</button>
        </div>
      </div>
    </>
  );
};

export default About;
