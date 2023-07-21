import heroImg from "../../images/image-hero-desktop.png";
import { ReactComponent as DataBiz } from "../../images/client-databiz.svg";
import { ReactComponent as Audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as Meet } from "../../images/client-meet.svg";
import { ReactComponent as Maker } from "../../images/client-maker.svg";
import { Button } from "../Button";

export const MainPage = () => {
  return (
    <section className="w-full flex mt-8 h-screen justify-between">
      <div className="relative w-2/4 text-left mt-12">
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
      <div className="flex w-2/4 mt-20">
        <img src={heroImg} alt="hero" />
      </div>
    </section>
  );
};
