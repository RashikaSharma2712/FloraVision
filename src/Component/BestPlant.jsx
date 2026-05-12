
import bestPlant from "../Asset/Rose Gold Feminine Calligraphy Monogram Logo(15) 3 (1).png";
import text4 from "../Asset/Group 22.png";

function BestPlant() {

  return (

    <section className="mx-auto mt-20 max-w-[1400px] px-4 pb-20 sm:px-6 md:mt-32 md:px-10 md:pb-28 lg:px-16">

      <img
        src={text4}
        alt="Our Best O2"
        className="mx-auto w-full max-w-[220px] object-contain sm:max-w-[280px] md:max-w-[320px]"
      />

      <div className="mt-12 flex flex-col items-center justify-between gap-10 overflow-visible rounded-[30px] border border-white/10 bg-white/5 px-5 py-10 backdrop-blur-xl transition-all duration-500 hover:bg-white/10 sm:px-8 md:mt-20 md:rounded-[50px] md:px-10 lg:flex-row lg:rounded-[80px] lg:px-16">

        <div className="relative flex w-full justify-center lg:w-1/2">

          <img
            src={bestPlant}
            alt="Best Plant"
            className="relative z-10 -mt-16 w-full max-w-[380px] object-contain transition-transform duration-500 hover:scale-105 sm:max-w-[550px] md:-mt-24 md:max-w-[700px] lg:-mt-32 lg:max-w-[950px]"
          />

        </div>

        <div className="w-full text-center text-white lg:w-1/2 lg:text-left">

          <h2 className="mx-auto max-w-[500px] text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:mx-0 lg:text-[42px] lg:leading-[52px]">

            We Have Small And Best O2 Plants Collection’s

          </h2>

          <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-gray-300 sm:text-base lg:mx-0 lg:text-lg lg:leading-8">

            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.

          </p>

          <p className="mx-auto mt-6 max-w-[560px] text-sm leading-7 text-gray-300 sm:text-base lg:mx-0 lg:text-lg lg:leading-8">

            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.

          </p>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">

            <button className="rounded-xl border border-white px-8 py-3 text-sm transition duration-300 hover:bg-white hover:text-black">

              Explore

            </button>

            <div className="flex items-center gap-6 text-white/80">

              <button className="text-2xl transition hover:text-white">
                ‹
              </button>

              <span className="text-sm tracking-[4px]">
                01/04
              </span>

              <button className="text-2xl transition hover:text-white">
                ›
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default BestPlant;