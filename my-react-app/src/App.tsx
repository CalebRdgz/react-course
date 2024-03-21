import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Food from "./Food.tsx";
import Card from "./Card.tsx";
import Button from "./Button.tsx";
import Student from "./Student.tsx";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Button />
      <Student name="Spongebob" />
      <Footer />
    </>
  );
}

export default App;
