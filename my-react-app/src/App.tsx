import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Food from "./Food.tsx";
import Card from "./Card.tsx";
import Button from "./Button.tsx";
import Student from "./Student.tsx";
import UserGreeting from "./UserGreeting.tsx";

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Button />
      <Student name="Spongebob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} username="Caleb" />
      <Footer />
    </>
  );
}

export default App;
