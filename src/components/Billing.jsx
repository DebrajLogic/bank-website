import { apple, google, bill } from "../assets";
import styles, { layout } from "../style";

function Billing() {
  return (
    <section
      id="product"
      className={`${layout.sectionReverse} border-0 border-blue-500 text-white`}
    >
      <div className={`${layout.sectionImgReverse} border-0 border-green-500`}>
        <img src={bill} alt="bill" className="w-full h-full relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-1/2 h-1/2 rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-1/2 h-1/2 rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo} border-0 border-pink-500`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple"
            className="w-[128px] h-[42px] object-contain mr-8 cursor-pointer hover:scale-105"
          />
          <img
            src={google}
            alt="google"
            className="w-[128px] h-[42px] object-contain cursor-pointer hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;
