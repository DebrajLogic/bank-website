import { clients } from "../constants";
import styles from "../style";

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4 border-0 border-blue-500`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => {
          return (
            <div
              key={client.id}
              className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] border-0 border-green-500`}
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px] w-[100px] object-contain"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Clients;
