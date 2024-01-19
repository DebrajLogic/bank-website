import { card } from "../assets";
import styles, { layout } from "../style";
import { Button } from "../components";

function CardDeal() {
  return (
    <section className={`${layout.section} border-0 border-blue-500`}>
      <div className={`%${layout.sectionInfo} border-0 border-green-500`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} border-0 border-yellow-500`}>
        <img src={card} alt="card" className="w-full h-full object-contain" />
      </div>
    </section>
  );
}

export default CardDeal;
