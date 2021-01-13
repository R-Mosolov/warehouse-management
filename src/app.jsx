import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import HeaderAndSidebar from './components/header-and-sidebar';
import Products from './pages/products';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Продукты</Link>
            </li>
            <li>
              <Link to="/warehouses">Склады</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/warehouses">
            <Products />
          </Route>
          <Route path="/">
            <Products />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Products() {
//   return <h2>Home</h2>;
// }

export default App;
