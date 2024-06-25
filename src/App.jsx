import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/o-nas">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default App;
