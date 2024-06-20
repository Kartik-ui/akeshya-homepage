import styles from "../../styles/ourfeatures.module.css";
import { FEATURES } from "./config";

const OurFeatures = () => {
  return (
    <section id={styles.features}>
      <div className="container">
        <div className={styles.sectionTitle} data-aos="fade-up">
          <h2>OUR CORE FEATURES</h2>
          <p>
            Akeshya is a forward-thinking and intelligent design firm that is
            technically and creatively capable of transforming your brand into
            its best digital self. Our approach to design and development
            results in compelling, engaging branding and immersive digital
            experiences that provide a value for money.
          </p>
        </div>
        <div className="row" data-aos="fade-up" data-aos-delay="300">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className={`${
                index === 0
                  ? "col-lg-3 col-md-4"
                  : index === 1 || index === 2
                  ? "col-lg-3 col-md-4 mt-4 mt-md-0"
                  : index === 3
                  ? "col-lg-3 col-md-4 mt-4 mt-lg-0"
                  : "col-lg-3 col-md-4 mt-4"
              }`}
            >
              <div className={styles.iconBox}>
                {feature.icon}
                <h3>
                  <a href="">{feature.title}</a>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
