import React from "react";
import Card from "./Component/Card";
import CardList from "./Component/CardList/CardList";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Routes,
  Outlet,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </>
    </>
  );
}

function Layout() {
  return (
    <>
      <div>
        <a href="Home">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/about">About</a>
        <a href="/NoLink">404 Page</a>
      </div>
      <Outlet />
    </>
  );
}

function Home() {
  return <h1>Home</h1>;
}
function About() {
  return <h1>About</h1>;
}
function Dashboard() {
  return <h1>Dashboard</h1>;
}

function NoMatch() {
  return <h1>404</h1>;
}

export default App;
