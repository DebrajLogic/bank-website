import styles from "../style";
import { robot, discount } from "../assets";
import { GetStarted } from "../components";

function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} border-0`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 border-0 border-green-500`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 border-0 border-yellow-500`}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> DISCOUNT FOR{" "}
            <span className="text-white">1 Month</span> ACCOUNT
          </p>
        </div>

        <div className="flex flex-row justify-between items-center border-0 border-orange-500">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation </span>
          </h1>
          <div className="ss:flex border-0 md:mr-4 mr-0 border-blue-500">
            <GetStarted />
          </div>
        </div>
        <h1 className=" font-poppins font-semibold w-full ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] text-white ">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative border-0 border-purple-500`}
      >
        <img src={robot} alt="" className="w-full h-full relative z-[5]" />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 border-2 pink__gradient border-pink-500" />
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient border-2 border-white-500" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient border-2 border-blue-500" />
      </div>
    </section>
  );
}

export default Hero;
