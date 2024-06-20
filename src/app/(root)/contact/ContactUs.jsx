import styles from "../../styles/contact.module.css";
import { GrLocation } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id={styles.contact}>
      <div className="container">
        <div className={styles.sectionTitle} data-aos="fade-up">
          <h2>CONTACT US</h2>
        </div>
        <div className="row">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className={styles.about}>
              <h3>Akeshya</h3>
              <p>
                Designers, developers &amp; marketeers capable of delivering
                solutions according to your needs,
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 mt-4 mt-md-0"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className={styles.info}>
              <div>
                <GrLocation />
                <p>
                  26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                  524004
                </p>
              </div>

              <div>
                <BiMailSend />
                <p>info@akeshya.com</p>
              </div>

              <div>
                <FaPhoneAlt />
                <p>+91 94942 40922 </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 col-md-12"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <form className={styles.emailForm} method="POST" name="contact">
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
