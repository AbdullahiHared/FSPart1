const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

const Header = () => {
  const course = 'Half Stack application development';
  return <h1>{course}</h1>;
} 

const Content = () => {
  const part1 = 'Fundamentals of React';
  const part2 = 'Using props to pass data';
  const part3 = 'State of a component';
  return (
    <div>
      part1: {part1} <br />
      part2: {part2} <br />
      part3: {part3} <br />
    </div>
  );
}

const Footer = () => {
  const exercise1 = 10;
  const exercise2 = 7;
  const exercise3 = 14;
  return <p>Number of exercises {exercise1 + exercise2 + exercise3}</p>;
}

export default App