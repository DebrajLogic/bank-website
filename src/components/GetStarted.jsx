import styles from "../style";
import { arrowUp } from "../assets";

function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:scale-105 hidden sm:flex`}
    >
      <div
        className={`${styles.flexCenter} bg-primary w-full h-full rounded-full flex flex-col`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] ">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted;
