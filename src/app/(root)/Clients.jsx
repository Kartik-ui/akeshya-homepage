import styles from "../styles/clients.module.css";
import Image from "next/image";
import client1 from "../../../public/assets/client-1.png";
import client2 from "../../../public/assets/client-2.png";
import client3 from "../../../public/assets/client-3.png";
import client4 from "../../../public/assets/client-4.png";
import client5 from "../../../public/assets/client-5.png";
import client6 from "../../../public/assets/client-6.png";

const Clients = () => {
  return (
    <section id={styles.clients}>
      <div className="container">
        <div className="row">
          {[client1, client2, client3, client4, client5, client6].map(
            (client, index) => (
              <div
                className="col-lg-2 col-md-4 col-6 d-flex justify-content-center align-items-center"
                key={index}
              >
                <Image
                  className={styles.clientImage}
                  src={client}
                  alt={`Client ${index + 1}`}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  loading="lazy"
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Clients;
