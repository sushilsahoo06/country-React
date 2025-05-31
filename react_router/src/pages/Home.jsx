import { Outlet, Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>

      <nav className="sub-nav">
        <Link to="./stairs">Stairs</Link> |{" "}
        <Link to="./roof">Roof</Link> |{" "}
        <Link to="./bricks">Bricks</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Home;
