import hero from "../assets/new-hero-lady.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero animate__animated animate__fadeInLeft">
        <p className="hero-top">Welcome To Hardcore Wisdoms</p>
        <h1 className="main-heading text-center md:text-justify">
          The only place where you get raw and real truth around women's nature.
        </h1>
        <p className="hero-bottom mb-0" style={{ textAlign: "center" }}>
          Join the thousands of Men on a journey to a truly pleasurable stress
          free life.
        </p>
      </div>
      <div className="hero-img">
        <img src={hero} alt="lady" />
      </div>
    </div>
  );
}

export default Hero;
