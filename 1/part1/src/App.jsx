const Hello = (props) => {
  console.log(props);

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      greeting app created by
      <a href="https://github.com/mluukkai"> mluukkai</a>
    </div>
  );
};

const App = () => {
  const name = "Pekka";
  const age = 10;

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Footer />
    </>
  );
};

/*
const App = () => {
  const friends = [
    { name: "Leevi", age: 4 },
    { name: "Venla", age: 10 },
  ];

  return (
    <div>
      <p>
        {friends[0].name} {friends[0].age}
      </p>
      <p>
        {friends[1].name} {friends[1].age}
      </p>
    </div>
  );
};
*/
export default App;
