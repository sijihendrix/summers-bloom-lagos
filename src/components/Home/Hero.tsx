import React from "react";
import { lorem } from "../../helpers/lorem";
import { ReactComponent as Twitter } from "../../assests/twitter.svg";
import { ReactComponent as Whatsapp } from "../../assests/whatsapp.svg";
import { ReactComponent as Instagram } from "../../assests/instagram.svg";
// import { SocialIconsProps } from "../../types";

export const Hero = () => {
  console.log(Instagram);
  // const icons = [Twitter, Instagram, Whatsapp];

  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 max-w-screen-lg  text-white">
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
          <p className="uppercase tracking-loose">
            Welcome to SummersBloomLagos
          </p>
          <h1 className="font-bold text-3xl my-4">My name is Nimi</h1>
          <p className="leading-normal mb-4">{lorem.generateSentences(5)}</p>

          <div className="flex items-center">
            <Instagram />
            <Twitter />
            <Whatsapp />
            {/* {icons.map((icon: any, index: number) => {
              console.log(icon);

              return <Icon key={index} children={icon} />;
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

// const Icon: React.FC<SocialIconsProps> = ({ children }) => {
//   console.log(children);

//   return <>{children}</>;
// };
