import React from "react";
import img1 from "../Asset/Group 13.png";
import img2 from "../Asset/Group 14.png";
import img3 from "../Asset/Group 15.png";
import img4 from "../Asset/Group 21.png";
import img5 from "../Asset/Group 20.png";
import img6 from "../Asset/Group 21.png";
import img7 from "../Asset/group-40.png";

const images = [img1, img2, img3, img4, img5, img6];

const TestimonialCard = () => {

  return (

    <section className="min-h-screen px-4 py-16 sm:px-6 md:px-10 md:py-20">

      <img
        src={img7}
        alt="Our Trendy Plants"
        className="mx-auto w-full max-w-[220px] object-contain sm:max-w-[300px] md:max-w-[400px]"
      />

      <div className="mt-10 grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:mt-14 md:gap-8 lg:grid-cols-3">

        {images.map((img, index) => (

          <div
            key={index}
            className="w-full max-w-[340px] overflow-hidden rounded-[30px] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >

            <img
              src={img}
              alt="plant"
              className="h-auto w-full object-contain"
            />

          </div>

        ))}

      </div>

    </section>

  );
};

export default TestimonialCard;