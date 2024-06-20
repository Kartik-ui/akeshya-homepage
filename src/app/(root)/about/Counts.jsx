"use client";
import Image from "next/image";
import styles from "../../styles/counts.module.css";
import countsImage from "../../../../public/assets/counts-img.svg";
import {
  BsEmojiSmile,
  BsJournalRichtext,
  BsClock,
  BsGlobe,
} from "react-icons/bs";
import CountUp from "react-countup";

const Counts = () => {
  return (
    <section id={styles.counts}>
      <div className="container">
        <div className="row">
          <div
            className={`col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start ${styles.imageContainer}`}
            data-aos="fade-right"
            data-aos-delay="150"
          >
            <Image src={countsImage} alt="Count" className={styles.image} />
          </div>

          <div
            className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div
              className={`${styles.content} d-flex flex-column justify-content-center`}
            >
              <div className="row">
                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className={styles.count_box}>
                    <BsEmojiSmile />
                    <span className={styles.pure_counter}>
                      <CountUp
                        start={0}
                        end={3835039}
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                        separator=""
                      />
                    </span>
                    <p>
                      <strong>Organic Reach</strong> (Global)
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className={styles.count_box}>
                    <BsJournalRichtext />
                    <span className={styles.pure_counter}>
                      <CountUp
                        start={0}
                        end={85}
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                        separator=""
                      />
                    </span>
                    <p>
                      <strong>Campaigns</strong>
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className={styles.count_box}>
                    <BsClock />
                    <span className={styles.pure_counter}>
                      <CountUp
                        start={0}
                        end={14081}
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                        separator=""
                      />
                    </span>
                    <p>
                      <strong>Watch Hours</strong> (Asia)
                    </p>
                  </div>
                </div>

                <div className="col-md-6 d-md-flex align-items-md-stretch">
                  <div className={styles.count_box}>
                    <BsGlobe />
                    <span className={styles.pure_counter}>
                      <CountUp
                        start={0}
                        end={17}
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                        separator=""
                      />
                    </span>
                    <p>
                      <strong>Excellent CTR %</strong> (Asia)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counts;
