import Image from "next/image";
import styles from "../styles/hero.module.css";
import homeImage from "../../../public/assets/hero-img.png";

const Hero = () => {
  return (
    <section id={styles.hero} className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">Grow your business with Akeshya</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              We are team of talented website designers, developers & digital
              marketeers
            </h2>
            <div data-aos="fade-up" data-aos-delay="800">
              <a
                href="/#about_about__5mE99"
                className={`${styles.btnGetStarted}`}
              >
                Get Started
              </a>
            </div>
          </div>
          <div
            className={`col-lg-6 order-1 order-lg-2 ${styles.heroImage}`}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              className={styles.homeImage}
              src={homeImage}
              alt="HomeImage"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
