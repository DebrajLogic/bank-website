import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

function Footer() {
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col border-0 border-blue-500`}
    >
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full border-0 border-green-500`}
      >
        <div className="flex-1 flex flex-col justify-start mr-10 border-0 border-pink-500">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 border-0 border-yellow-500">
          {footerLinks.map((link) => {
            return (
              <div
                key={link.key}
                className="flex flex-col ss:my-0 my-4 min-w-[150px] border-0 border-red-500"
              >
                <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                  {link.title}
                </h4>
                <ul className="list-none mt-4">
                  {link.links.map((link, index) => {
                    return (
                      <li
                        className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                          index !== footerLinks.length - 1 ? "mb-4" : "mb-0"
                        }`}
                        key={link.name}
                      >
                        {link.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center leading-[27px] text-dimWhite">
          Copywright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => {
            return (
              <img
                key={social.id}
                src={social.icon}
                alt="social"
                className={`w-[21px] h-[21px] object-contain cursor-pointer hover:scale-110 ${
                  index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Footer;
