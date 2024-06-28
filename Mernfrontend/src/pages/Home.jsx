import Hero from "../components/Hero.jsx";
import Biography from "../components/Biography.jsx";
import Departments from "../components/Departements.jsx";
import MessageForm from "../components/MessageForm.jsx";
const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to Munna Bhai Medical Institute | Your trusted healthcare provider "
        }
        imageUrl={"/hero.png"}
      />
      <Biography imageUrl={"/about.png"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
