import { features } from "../constants";
import styles, { layout } from "../style";
import { Button } from "../components";

function Business() {
  return (
    <section
      id="features"
      className={`${layout.section} text-white border-0 border-blue-500`}
    >
      <div className={`${layout.sectionInfo} border-0 border-green-500`}>
        <h2 className={`${styles.heading2}`}>
          You do the business,
          <br className="hidden sm:block" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-8`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col border-0 border-pink-500`}>
        {features.map((feature, index) => {
          return <FeatureCard key={feature.id} {...feature} index={index} />;
        })}
      </div>
    </section>
  );
}

export default Business;

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-2xl feature-card ${
        index !== features.index - 1 ? "mb-6" : "mb-0"
      } border-0 border-yellow-500`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
      </div>
    </div>
  );
};
