import HeroSection from "./Component/HeroBanner";
import PlantCard from "./Component/PlantCard";
import TestimonialCard from "./Component/TestimonialCard";
import CustomerReview from "./Component/CustomerReview";
import BestPlant from "./Component/BestPlant";
import Footer from "./Component/Footer";
import heroPlant from "./Asset/hero-bg.png";
import text from "./Asset/group-39.png";
import plant1 from "./Asset/Rose Gold Feminine Calligraphy Monogram Logo(20) 1.png";
import plant2 from "./Asset/Rose Gold Feminine Calligraphy Monogram Logo(20) 2.png";

function App() {

  const plants = [
    {
      id: 1,
      image: plant1,
      title: "For Your Desks Decorations",
      description:
        "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!",
      price: "599",
      reverse: false,
    },

    {
      id: 2,
      image: plant2,
      title: "For Your Desks Decorations",
      description:
        "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.",
      price: "399",
      reverse: true,
    },
  ];

  return (

    <div className="relative min-h-screen overflow-x-hidden bg-[#031003] text-white">

      <div className="absolute inset-0">

        <img
          src={heroPlant}
          alt="background"
          className="h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute top-20 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-green-500/20 blur-[120px] md:h-[600px] md:w-[600px] lg:h-[900px] lg:w-[900px] lg:blur-[200px]" />

      </div>

      <div className="relative z-10">

        <HeroSection />

        <div className="mx-auto mt-10 max-w-[1400px] space-y-16 px-4 pb-20 sm:px-6 md:space-y-20 md:px-10 lg:px-16">

          <img
            src={text}
            alt="Our Trendy Plants"
            className="mx-auto w-full max-w-[220px] object-contain sm:max-w-[300px] md:max-w-[400px]"
          />

          {plants.map((plant) => (
            <PlantCard
              key={plant.id}
              image={plant.image}
              title={plant.title}
              description={plant.description}
              price={plant.price}
              reverse={plant.reverse}
            />
          ))}

          <TestimonialCard />

          <CustomerReview />

          <BestPlant />

          <Footer />

        </div>

      </div>

    </div>

  );
}

export default App;