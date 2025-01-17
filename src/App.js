import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("nerds");

  const productsNerds = [
    { id: 1, name: "Action Figure - Star Wars", price: "R$ 299,99", img: "https://m.media-amazon.com/images/I/51JsqskZEiL._AC_SL1000_.jpg" },
    { id: 2, name: "Quadrinho - Batman #1", price: "R$ 499,99", img: "https://m.media-amazon.com/images/I/61q-+ohQ7WL._SY466_.jpg" },
    { id: 3, name: "Funko Pop - Iron Man", price: "R$ 149,99", img: "https://m.media-amazon.com/images/I/81DUvc2+mLL._AC_SL1500_.jpg" },
    { id: 4, name: "PS5 - Console", price: "R$ 3.799,99", img: "https://m.media-amazon.com/images/I/612SFC+tsbL._AC_SX679_.jpg" },
    { id: 5, name: "Nintendo Switch", price: "R$ 7.499,99", img: "https://m.media-amazon.com/images/I/61-PblYntsL._AC_SL1500_.jpg" },
    { id: 6, name: "Coleção Harry Potter", price: "R$ 799,99", img: "https://m.media-amazon.com/images/I/61UQDAOBVWL._SL1000_.jpg" }
  ];


  const productsBeachTennis = [
    { id: 1, name: "Raquete Pro Beach Tennis", price: "R$ 899,99", img: "https://m.media-amazon.com/images/I/714GPBq9XgL._AC_SX679_.jpg" },
    { id: 2, name: "Bolsa Nike - Beach", price: "R$ 299,99", img: "https://m.media-amazon.com/images/I/617rqUXPtzL._AC_SX522_.jpg" },
    { id: 3, name: "Óculos de Sol UV", price: "R$ 199,99", img: "https://m.media-amazon.com/images/I/51T1xQwz9tL._AC_SX679_.jpg" },
    { id: 4, name: "Camisa Adidas Beach", price: "R$ 149,99", img: "https://m.media-amazon.com/images/I/610crhLDfjL._AC_SX679_.jpg" },
    { id: 5, name: "Bola de Beach Tennis", price: "R$ 49,99", img: "https://m.media-amazon.com/images/I/710+ttV0GHL._AC_SL1500_.jpg" },
    { id: 6, name: "Visor Pro Beach", price: "R$ 99,99", img: "https://m.media-amazon.com/images/I/51VuQMmut6L._AC_SX679_.jpg" }
  ];


  return (
      <div className="app">
        {/* NavBar */}
        <nav className="navbar">
          <h1>T&M GameOn Imports</h1>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Sobre Nós</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>

        {/* Conteúdo */}
        <header className="app-header">
          {/* Vídeo de fundo simulando um jogo */}
          <video className="background-video" autoPlay muted loop>
            <source src="https://static.videezy.com/system/resources/previews/000/051/040/original/Retro_Style_Grid.mp4" type="video/mp4" />
            Seu navegador não suporta a tag de vídeo.
          </video>

          <div className="overlay-content">
            <h2>Bem-vindo à T&M GameOn Imports</h2>
            <p>Os melhores produtos importados para Gamers e Esportes em um só lugar!</p>
          </div>

          <div className="tabs">
            <button
                className={activeTab === "nerds" ? "active" : ""}
                onClick={() => setActiveTab("nerds")}
            >
              Importados Gamers
            </button>
            <button
                className={activeTab === "beachtennis" ? "active" : ""}
                onClick={() => setActiveTab("beachtennis")}
            >
              Importados Sports
            </button>
          </div>
        </header>

        <section className="products-section">
          <h2>{activeTab === "nerds" ? "Colecionáveis Nerds" : "Importados Beach Tennis"}</h2>
          <div className="products-grid">
            {(activeTab === "nerds" ? productsNerds : productsBeachTennis).map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="product-details">
                    <h3>{product.name}</h3>
                    <p className="price">{product.price}</p>
                    <button className="buy-button">Comprar via Mercado Pago</button>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <p>&copy; 2024 T&M GameOn Imports - Todos os direitos reservados</p>
            <ul className="social-links">
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
        </footer>
      </div>
  );
}

export default App;
