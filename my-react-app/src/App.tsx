import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Food from "./Food.tsx";
import Card from "./Card.tsx";
import Button from "./Button.tsx";
import Student from "./Student.tsx";
import UserGreeting from "./UserGreeting.tsx";
import List from "./List.tsx";
import ButtonEvent from "./ButtonEvent.tsx";
import ProfilePicture from "./ProfilePicture.tsx";
import MyComponent from "./MyComponent.tsx";
import Counter from "./Counter.tsx";
import MyComponent2 from "./MyComponent2.tsx";
import ColorPicker from "./ColorPicker.tsx";
import MyComponent3 from "./MyComponent3.tsx";
import MyComponent4 from "./MyComponent4.tsx";
import MyComponent5 from "./MyComponent5.tsx";
import MyComponent6 from "./MyComponent6.tsx";

interface Item {
  id: number;
  name: string;
  calories: number;
  category?: string;
}

function App() {

  const fruits: Item[] = [
    { id: 1, name: "apple", calories: 110 },
    { id: 2, name: "banana", calories: 15 },
    { id: 3, name: "strawberry", calories: 25 },
    { id: 4, name: "orange", calories: 63 },
    { id: 5, name: "pear", calories: 50 },
  ];
  const vegetables: Item[] = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "brocolli", calories: 50 },
  ];
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
      {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
      {fruits.length > 0 && <List items={vegetables} category="Vegetables" />}
      <ButtonEvent />
      <ProfilePicture />
      <MyComponent />
      <Counter />
      <MyComponent2 />
      <ColorPicker />
      <MyComponent3 />
      <MyComponent4 />
      <MyComponent5 />
      <MyComponent6 />
      <Footer />
    </>
  );
}

export default App;
