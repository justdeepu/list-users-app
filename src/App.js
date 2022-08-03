import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Login from "./components/Login/Login";
import PostList from "./components/Home/Home";

export default function App() {
  return (
    <Router>
      <div>
        {/* <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul> */}

        <Routes>
          <Route path="" element={<Login />} />
          <Route path="home" element={<PostList />} />
        </Routes>
      </div>
    </Router>
  );
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
