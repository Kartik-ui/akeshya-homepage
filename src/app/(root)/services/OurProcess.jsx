import styles from "../../styles/ourprocess.module.css";
import { OURPROCESS } from "./config";

const OurProcess = () => {
  return (
    <section id={styles.ourprocess}>
      <div className="container">
        <div className={styles.sectionTitle} data-aos="fade-up">
          <h2>OUR PROCESS</h2>
          <p>
            Over the years we’ve evolved a tested method for attaining
            achievement for each one of our clients.
          </p>
        </div>
        <div className="row">
          {OURPROCESS.map((process, index) => (
            <div
              key={index}
              className={`col-md-6 d-flex align-items-stretch ${
                index === 1 && "mt-4 mt-md-0"
              } ${(index === 2 || index === 3) && "mt-4"}`}
            >
              <div
                className={styles.card}
                style={{ backgroundImage: `url(${process.image})` }}
                data-aos="fade-up"
                data-aos-delay={(index + 1) % 2 === 0 ? 200 : 100}
              >
                <div className={styles.cardBody}>
                  <h5 className={styles.cardTitle}>
                    <a href="#">{process.title}</a>
                  </h5>
                  <p className={styles.cardText}>{process.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
