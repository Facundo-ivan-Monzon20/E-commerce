import './App.css';

function App() {
  return (
    <div className="App">
    
      <div class="nav-bar">
          <h4 class="nav-bar-element">Inicio</h4>
          <h4 class="nav-bar-element">Categorías</h4>
          <h4 class="nav-bar-element">Mis Compras</h4>
          <h4 class="nav-bar-element">Mi Perfil</h4>
          <h4  class="nav-bar-element login">Login</h4>
      </div>


      <header class="header">
          <h1>Bienvenido a E-Commerce</h1>
          <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In consectetur hic quis.</h3>
      </header>

      
      <div class="categorias">

        <p class="categorias-text">Categorías</p>

        <div class="categorias-card">
          
          <div class="card" >
              <img src="https://asset.conrad.com/media10/isa/160267/c1/-/en/1761542_BB_00_FB/image.jpg" class="card-img" alt="Memoria RAM"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" ><button class="card-btn">Go somewhere</button></a>
              </div>
          </div>

            <div class="card" >
              <img src="https://m.media-amazon.com/images/I/81nsIeRAJlL._AC_SX450_.jpg" class="card-img" alt="Tarjeta de Video"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" >
                <button class="card-btn">Go somewhere</button></a>
              </div>
            </div>

            <div class="card">
              <img src="https://s1.eestatic.com/2021/02/24/omicrono/561455415_173822314_1024x576.jpg" class="card-img" alt="Perifericos"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" ><button class="card-btn">Go somewhere</button></a>
              </div>
            </div>

            <div class="card">
              <img src="https://s1.eestatic.com/2021/02/24/omicrono/561455415_173822314_1024x576.jpg" class="card-img" alt="Perifericos"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" ><button class="card-btn">Go somewhere</button></a>
              </div>
            </div>

            <div class="card">
              <img src="https://s1.eestatic.com/2021/02/24/omicrono/561455415_173822314_1024x576.jpg" class="card-img" alt="Perifericos"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" ><button class="card-btn">Go somewhere</button></a>
              </div>
            </div>

            <div class="card">
              <img src="https://s1.eestatic.com/2021/02/24/omicrono/561455415_173822314_1024x576.jpg" class="card-img" alt="Perifericos"/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" ><button class="card-btn">Go somewhere</button></a>
              </div>
            </div>

            
          </div>
      </div>
  </div>
  );
}

export default App;
