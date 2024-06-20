import React from "react";
import styles from "../../styles/about.module.css";
import { RiCheckDoubleLine } from "react-icons/ri";

const About = () => {
  return (
    <section id={styles.about}>
      <div className="container">
        <div className={styles.sectionTitle} data-aos="fade-up">
          <h2>ABOUT US</h2>
        </div>
        <div className={`row ${styles.content}`}>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              We are Akeshya, a firm that specializes in web design and
              marketing. We help transform ideas into reality with a team of
              passionate graphic designers, web developers, and seasoned
              marketing advisors.
            </p>
            <ul>
              <li>
                <RiCheckDoubleLine className={styles.double_line} />
                We started with a simple idea: do what is best for the client.
              </li>
              <li>
                <RiCheckDoubleLine className={styles.double_line} />
                Our methodical and individual approach to each project delivers
                the finest possible results for your media.
              </li>
              <li>
                <RiCheckDoubleLine className={styles.double_line} />
                Our day-to-day work is to solve your problems utilising the most
                up-to-date, practical adaptive technology, and we have a lot of
                fun doing it.
              </li>
            </ul>
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p>
              We&apos;re professional, but we&apos;re also friendly, and
              we&apos;ll always pay attention to your concerns. We expect to
              work with innovative people that have an open mind and are
              dedicated to making every idea a reality. We want to hear from you
              if you&apos;re interested in SEO, have Web Development ideas, or
              require a graphic designer who can match your goals.
            </p>
            <a href="/#services" className={styles.learnMore}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
