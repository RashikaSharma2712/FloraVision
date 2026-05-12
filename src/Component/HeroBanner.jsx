import Navbar from "./NavBar";
import smallPlant from "../Asset/Group 38.png";
import rating from "../Asset/Group 37.png";
import text from "../Asset/group-36-earth.png";

function HeroSection() {

  return (

    <section className="relative min-h-screen text-white">

      <div className="relative z-10">

        <Navbar />

        <div className="mx-auto flex max-w-[1400px] flex-col-reverse items-center justify-between gap-12 px-4 pt-10 sm:px-6 md:px-10 lg:flex-row lg:gap-0 lg:px-16">

          <div className="w-full pt-0 text-center lg:max-w-[580px] lg:pt-10 lg:text-left">

            <img
              src={text}
              alt="Earth Exhale"
              className="mx-auto w-full max-w-[280px] object-contain sm:max-w-[380px] md:max-w-[450px] lg:mx-0 lg:max-w-[520px]"
            />

            <div className="mt-10 md:mt-16">

              <img
                src={rating}
                alt="rating"
                className="mx-auto w-full max-w-[220px] object-contain transition-transform duration-500 hover:scale-105 sm:max-w-[300px] md:max-w-[400px] lg:mx-0"
              />

            </div>

          </div>

          <div className="relative flex w-full items-center justify-center">

            <img
              src={smallPlant}
              alt="plant"
              className="mx-auto mb-6 mt-4 w-full max-w-[220px] object-contain transition-transform duration-500 hover:scale-105 sm:max-w-[300px] md:max-w-[360px] lg:-mt-20 lg:mb-20"
            />

          </div>

        </div>

      </div>

    </section>

  );
}

export default HeroSection;