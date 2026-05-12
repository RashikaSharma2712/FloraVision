
function PlantCard({
  image,
  title,
  description,
  price,
  reverse = false,
}) {

  return (

    <div
      className={`w-full rounded-[30px] border border-white/10 bg-white/5 px-5 py-10 backdrop-blur-xl transition-transform duration-500 hover:scale-[1.01] sm:rounded-[40px] sm:px-8 md:px-10 md:py-6 lg:rounded-[80px] lg:px-16 flex flex-col justify-between gap-10 overflow-visible ${
        reverse ? "lg:flex-row-reverse lg:items-center" : "lg:flex-row lg:items-center"
      }`}
    >

      <div className="relative flex w-full justify-center lg:w-1/2">

        <img
          src={image}
          alt={title}
          className="relative z-10 -mt-20 w-full max-w-[220px] object-contain transition-transform duration-500 hover:scale-105 sm:-mt-24 sm:max-w-[320px] md:-mt-28 md:max-w-[420px] lg:-mt-36 lg:max-w-[470px]"
        />

      </div>

      <div className="w-full py-0 text-center text-white md:py-6 lg:w-1/2 lg:text-left">

        <h2 className="mx-auto max-w-[360px] text-2xl font-semibold leading-tight sm:text-3xl lg:mx-0 lg:text-[34px] lg:leading-[42px]">

          {title}

        </h2>

        <p className="mx-auto mt-5 max-w-[430px] text-sm leading-7 text-gray-300 sm:text-base lg:mx-0">

          {description}

        </p>

        <h3 className="mt-7 text-3xl font-semibold sm:text-4xl">

          Rs. {price}/-

        </h3>

        <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">

          <button className="rounded-xl border border-white px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black sm:px-7">

            Explore

          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-white transition duration-300 hover:bg-white hover:text-black">

            ↗

          </button>

        </div>

      </div>

    </div>

  );
}

export default PlantCard;