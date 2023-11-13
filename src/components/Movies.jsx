import React from "react";
import "./styles.scss";

function Movies() {
  return (
    <>
      <header>
        <img src="./src/images/logo.png" alt="logo cinema" width="250px" />
        <p>Mix Plus Series</p>
        <nav>
          <ul>
            <li>Inicio</li>
            <li>Filmes</li>
            <li>Series</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Filmes</h1>
        <section>
          <figure>
            <img
              src="./src/images/Barbie.jpg"
              alt="filme barbie"
              width="250px"
            />
            <img
              src="./src/images/Homem-Aranha.jpg"
              alt="filme homem aranha"
              width="250px"
            />
            <img
              src="./src/images/Oppenheimer.jpg"
              alt="filme oppenheimer"
              width="250px"
            />
          </figure>
        </section>
        <section>
          <figure>
            <img
              src="./src/images/Piratas-do-Caribe.jpg"
              alt="filme piratas do caribe"
              width="250px"
            />
            <img
              src="./src/images/Velozes-e-furiosos.jpg"
              alt="filme velozes e furiosos"
              width="250px"
            />
            <img 
              src="./src/images/Venom.jpg" 
              alt="filme venom" 
              width="285px" 
            />
          </figure>
        </section>
        <hr />
        <p className="series">Series</p>
        <section>
          <figure>
            <img
              src="./src/images/Brooklyn-nine-nine.jpg"
              alt="serie Brooklyn 99"
            />
            <img
              src="./src/images/Cyberpunk_mercenarios.jpg"
              alt="serie cyberpunk"
            />
            <img src="./src/images/Loki.jpg" alt="serie loki" />
          </figure>
        </section>
        <section>
          <figure>
            <img
              src="./src/images/Peaky-Blinders.jpg"
              alt="serie peaky blinders"
            />
            <img src="./src/images/The-Flash.jpg" alt="serie the flash" />
            <img src="./src/images/Wandinha.jpg" alt="serie wandinha" />
          </figure>
        </section>
      </main>

      <footer>
        <p>Todos os direitos reservados @ Mix Plus Series 2023</p>
      </footer>
    </>
  );
}
export default Movies;
