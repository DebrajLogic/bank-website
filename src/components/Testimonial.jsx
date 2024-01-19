import { testimonial } from "../constants";
import styles from "../style";
import { quotes } from "../assets";

function Testimonial() {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative border-0 border-blue-500`}
    >
      <div className="absolute border-0 z-[0] w-2/3 h-2/3 -right-1/2 rounded-full blue__gradient" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] border-0 border-green-500">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6 border-0 border-pink-500">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div
        className={
          "flex flex-wrap sm:justify-start justify-center w-full testimonial-container relative z-[1] border-0 border-yellow-500"
        }
      >
        {testimonial.map((card) => {
          return <TestimonialCard key={card.id} {...card} />;
        })}
      </div>
    </section>
  );
}

export default Testimonial;

const TestimonialCard = ({ content, name, title, img }) => {
  return (
    <div
      className={
        "flex justify-between flex-col px-10 py-12 rounded-xl max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 testimonial-card  border-0 border-purple-500"
      }
    >
      <img
        src={quotes}
        alt="image"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex items-start border-0 border-sky-500">
        <img src={img} alt="person" className="w-[48px]" />
        <div className="flex flex-col ml-4 border-0 border-red-500">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white ">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};
