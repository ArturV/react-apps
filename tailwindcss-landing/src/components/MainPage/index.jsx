import heroImg from "../../images/image-hero-desktop.png";
import { ReactComponent as dataBiz } from "../../images/client-databiz.svg";
import { ReactComponent as audiophile } from "../../images/client-audiophile.svg";
import { ReactComponent as meet } from "../../images/client-meet.svg";
import { ReactComponent as maker } from "../../images/client-maker.svg";

export const MainPage = () => {
  return (
    <section className="w-full flex mt-8">
      <div className="relative w-2/4 text-left mt-12">
        <h1 className="text-8xl font-black mt-60 whitespace-pre-line">{`Make\n remote work`}</h1>
        <p className="text-medium-gray text-lg mt-12 whitespace-pre-line">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          libero ad aperiam illum magni minus cum voluptas quia numquam minima
          velit blanditiis, adipisci hic officia nisi necessitatibus! Eum,
          quibusdam explicabo?
        </p>
      </div>
    </section>
  );
};
