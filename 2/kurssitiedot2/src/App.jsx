import Course from "./components/Course";

const App = ({ courses }) => {
  return (
    <div>
      <h1>Web Development Curriculum</h1>
      {courses.map((x) => (
        <div key={x.id}>
          <Course course={x} />
        </div>
      ))}
    </div>
  );
};

export default App;
