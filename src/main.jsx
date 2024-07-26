// -----------------------------------------------------------------------------
// Import React and ReactDOM
// -----------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import an external CSS file

// -----------------------------------------------------------------------------
// Functional Components
// -----------------------------------------------------------------------------

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData; // Array of pizzas
  const numPizzas = pizzas.length; // Number of pizzas

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* Conditional rendering: if number of pizzas greater than 0 */}
      {numPizzas > 0 ? (
        <>
          {/* React Fragment */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
            reiciendis quas, vero exercitationem eius iure dolorem veniam animi
            corporis nisi corrupti. Aut, pariatur nihil? Necessitatibus quidem
            fuga quis quod recusandae.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza key={index} {...pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>No pizzas available</p>
      )}
    </main>
  );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="{`Photo of ${name}`}" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span className="pizza__price" aria-live="polite">
          {soldOut ? "Sold Out" : `€${price.toFixed(2)}`}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours(); // get the current hour
  const openHour = 8; // opening hour
  const closeHour = 22; // closing hour
  const isOpen = hour >= openHour && hour < closeHour; // check if the restaurant is open

  return (
    <footer className="footer">
      {/* Conditional rendering: if the restaurant is open, render the order button */}
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>We are closed. Come back tomorrow!</p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 to {closeHour}:00.
      </p>
      <button className="btn">Order now</button>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Data
// -----------------------------------------------------------------------------

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

// -----------------------------------------------------------------------------
// Render
// -----------------------------------------------------------------------------

// React 18
// we use root because we are using the new root API to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
