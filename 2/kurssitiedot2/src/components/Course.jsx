const Header = ({ coursename }) => {
  //console.log("Header: ", coursename);
  return <h2>{coursename}</h2>;
};

const Content = ({ parts }) => {
  //console.log("Content: ", parts);
  return parts.map((part) => (
    <div key={part.id}>
      <Part name={part.name} exercises={part.exercises} />
    </div>
  ));
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

function sumOfExercises(parts) {
  //console.log("sumOfExercises: ", parts);
  const omaSumma = parts.reduce(function (tot, arr) {
    return tot + arr.exercises;
  }, 0);

  return omaSumma;
}

const Total = ({ summa }) => {
  return <b>Total of {summa} exercises</b>;
};

const Course = ({ course }) => {
  //console.log("Course: ", course);
  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <Total summa={sumOfExercises(course.parts)} />
    </div>
  );
};

export default Course;
