import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import RootLayout from "./layout/RootLayout";
import Stairs from "./pages/Home/Stairs";
import Roof from "./pages/Home/Roof";
import Bricks from "./pages/Home/Bricks";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        {/* Home route with nested subroutes */}
        <Route path="home" element={<Home />}>
          <Route index element={<h3>Welcome to the Home Page</h3>} />
          <Route path="stairs" element={<Stairs />} />
          <Route path="roof" element={<Roof />} />
          <Route path="bricks" element={<Bricks />} />
        </Route>

        {/* Other top-level routes */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products" element={<Products />} />

        {/* Optional: 404 fallback route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
