import heroImg from "../../images/image-hero-desktop.png";
import heroImgMobile from "../../images/image-hero-mobile.png";
import { ReactComponent as DataBiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";
import { Button } from "../Button";

export const MainPage = () => {
  return (
    <section className="w-full flex-col xl:flex-row mt-8 h-screen justify-between">
      <div className="relative order-2 xl:order-1 w-2/4 text-left mt-12">
        <h1 className="text-3xl xl:text-8xl font-black mt-60 whitespace-pre-line">{`Make\n remote work`}</h1>
        <p className="text-medium-gray text-lg my-12 whitespace-pre-line">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          libero ad aperiam illum magni minus cum voluptas quia numquam minima
          velit blanditiis, adipisci hic officia nisi necessitatibus! Eum,
          quibusdam explicabo?
        </p>
        <Button isFilled={true}>Learn More</Button>
        <div className="flex justify-around absolute bottom-2 w-full">
          <DataBiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
      </div>
      <div className="hidden xl:flex w-2/4 mt-20 xl:order-2">
        <img src={heroImg} alt="hero" />
      </div>
      <div className="flex xl:hidden w-full mt-20 justify-center mb-8 order-1">
        <img src={heroImgMobile} alt="hero mobile" />
      </div>
    </section>
  );
};
