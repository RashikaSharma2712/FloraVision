
import text3 from "../Asset/group-41.png";
import review1 from "../Asset/Group 28.png";

function CustomerReview() {

  return (

    <section className="mx-auto mt-20 max-w-[1400px] px-4 pb-20 sm:px-6 md:mt-32 md:px-10 md:pb-24 lg:px-16">

      <img
        src={text3}
        alt="Customer Review"
        className="mx-auto w-full max-w-[220px] object-contain sm:max-w-[300px] md:max-w-[400px]"
      />

      <img
        src={review1}
        alt="review"
        className="mx-auto mt-8 w-full max-w-[1600px] object-contain transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] md:mt-10"
      />

    </section>

  );
}

export default CustomerReview;