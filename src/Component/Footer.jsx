import logo from "../Asset/plant-1.png";

function Footer() {

  return (

    <footer className="mx-auto max-w-[1400px] px-4 pb-16 sm:px-6 md:px-10 md:pb-20 lg:px-16">

      <div className="mb-12 flex justify-center gap-3 md:mb-16">

        <div className="h-2 w-2 rounded-full bg-white" />
        <div className="h-2 w-2 rounded-full bg-white/60" />
        <div className="h-2 w-2 rounded-full bg-white/60" />

      </div>

      <div className="flex w-full flex-col items-start justify-between gap-14 px-5 py-10 sm:px-8 md:px-10 md:py-14 lg:flex-row lg:px-14">

        <div className="w-full lg:max-w-[320px]">

          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="logo"
              className="w-10 object-contain md:w-12"
            />

            <h2 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
              FloraVision.
            </h2>

          </div>

          <p className="mt-6 text-sm leading-7 text-white/80 sm:text-base md:mt-8 md:text-lg md:leading-8">

            “From lush indoor greens to vibrant outdoor blooms,
            our plants are crafted to thrive and elevate your
            living environment.”

          </p>

          <div className="mt-10 flex items-center gap-8 text-lg font-semibold text-white md:mt-14 md:gap-10 md:text-xl">

            <button className="transition hover:text-green-400">
              FB
            </button>

            <button className="transition hover:text-green-400">
              TW
            </button>

            <button className="transition hover:text-green-400">
              LI
            </button>

          </div>

        </div>

        <div className="w-full lg:w-auto">

          <h3 className="mb-6 text-xl font-semibold md:mb-8 md:text-2xl">
            Quick Link’s
          </h3>

          <div className="flex flex-col gap-4 text-sm text-white/80 sm:text-base md:gap-5 md:text-lg">

            <a href="/" className="transition hover:text-white">
              Home
            </a>

            <a href="/" className="transition hover:text-white">
              Type’s Of plant’s
            </a>

            <a href="/" className="transition hover:text-white">
              Contact
            </a>

            <a href="/" className="transition hover:text-white">
              Privacy
            </a>

          </div>

        </div>

        <div className="w-full lg:max-w-[420px]">

          <h3 className="mb-6 text-xl font-semibold md:mb-8 md:text-2xl">
            For Every Update.
          </h3>

          <div className="flex flex-col overflow-hidden rounded-lg border border-white sm:flex-row">

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full bg-transparent px-5 py-4 text-white outline-none placeholder:text-white/50"
            />

            <button className="whitespace-nowrap bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-green-400">

              SUBSCRIBE

            </button>

          </div>

          <p className="mt-10 text-center text-xs text-white/70 sm:text-sm md:mt-20 lg:text-left">

            FloraVision © all right reserve

          </p>

        </div>

      </div>

    </footer>

  );
}

export default Footer;