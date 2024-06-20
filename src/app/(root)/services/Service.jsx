import styles from "../../styles/service.module.css";
import { CARDS } from "./config";

const Service = () => {
  return (
    <section id={styles.service}>
      <div className="container">
        <div className={styles.sectionTitle} data-aos="fade-up">
          <h2>SERVICES</h2>
          <p>
            Akeshya will serve as your consultant and development partner to
            help you turn your idea into a reality.
          </p>
        </div>
        <div className="row">
          {CARDS.map((card, index) => (
            <div
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
              key={index}
            >
              <div
                className={styles.iconBox}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className={styles.icon}>{card.image}</div>
                <h4 className={styles.title}>{card.title}</h4>
                <p className={styles.description}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
