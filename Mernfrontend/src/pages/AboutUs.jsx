import Biography from "../components/Biography";
import Hero from "../components/Hero";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | Munna Bhai MBBS Institute"}
        imageUrl={"/about.png"}
      />
      <Biography imageUrl={"/whoweare.png"} />
    </>
  );
};

export default AboutUs;
