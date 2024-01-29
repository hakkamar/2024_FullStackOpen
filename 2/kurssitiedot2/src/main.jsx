import ReactDOM from "react-dom/client";

import App from "./App";

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2,
      },
    ],
  },
  {
    name: "Cobol on kivaa!",
    id: 3,
    parts: [
      {
        name: "Identification Division",
        exercises: 3,
        id: 1,
      },
      {
        name: "Environment Division",
        exercises: 7,
        id: 2,
      },
      {
        name: "Data Division",
        exercises: 5,
        id: 3,
      },
      {
        name: "Procedure Division",
        exercises: 50,
        id: 4,
      },
    ],
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <App courses={courses} />
);
