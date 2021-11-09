const Perfil = () => {
    return (  
        <div class="container">
    
    <div class="row  mt-5">
      
      <div class="col-md-8 offset-md-2 bg-white shadow p-3 mb-5 bg-white rounded">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link p-3" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
              role="tab" aria-controls="home" aria-selected="true">Datos Usuario</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link p-3" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
              role="tab" aria-controls="profile" aria-selected="false">Crear Producto</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link p-3" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
              role="tab" aria-controls="contact" aria-selected="false">Editar Usuario</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row mt-5 mb-4 ">
              <div class="col-12 col-md-5 ">
                <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" class="img-thumbnail" alt="..." />           
              </div>

              <div class="col-12 col-md-7 mt-4 mt-mb-0" >
                <div class="form-group row mb-4 ">
                  <label for="code" class="col-3 "> Codigo:</label>
                  <div class="col-8">
                    <input type="text" class="form-control bg-white border-0" value="00858DE" disabled/>
                  </div>
                </div>
                
                <div class="form-group row mb-4">
                  <label for="user" class="col-3"> Usuario:</label>
                  <div class="col-8">
                    <input type="text" class="form-control bg-white border-0" value="Jano Melul" disabled />
                  </div>
                </div>
               
                <div class="form-group row mb-4">
                  <label for="email" class="col-3"> Email:</label>
                  <div class="col-8">
                    <input type="text" class="form-control bg-white border-0" value="jannomelul@gmail.com" disabled />
                  </div>
                </div>
                
                <div class="form-group row mb-4">
                  <label for="cantProduct" class="col-3"> Productos en venta:</label>
                  <div class="col-8">
                    <input type="text" class="form-control bg-white border-0" value="0" disabled />
                  </div>
                </div>
              </div>
         </div>
          
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row mt-5 mb-4 ">

              <div class="col-10 offset-1">
                <div class="form-group row mb-4">
                  <label for="codigo" class="col-4 col-md-3"> Nombre:</label>
                  <div class="col-8">
                    <input type="text" class="form-control border border-secondary" />
                  </div>
                </div>
                <div class="form-group row mb-4">
                  <label for="codigo" class="col-4 col-md-3 "> Categoría:</label>
                  <div class="col-8">
                    <input type="text" class="form-control border border-secondary" />
                  </div>
                </div>

                <div class="form-group row mb-4">
                  <label for="codigo" class="col-4 col-md-3"> Descripción:</label>
                  <div class="col-8">
                    <textarea type="text" class="form-control border border-secondary"></textarea>
                  </div>
                </div>
                
                <div class="form-group row mb-4">
                  <label for="codigo" class="col-4 col-md-3"> Precio:</label>
                  <div class="col-8">
                    <input type="text" class="form-control border border-secondary" />
                  </div>
                </div>

                <div class="form-group row mb-4">
                  <label for="codigo" class="col-4 col-md-3"> Características:</label>
                  <div class="col-8">
                    <textarea type="text" class="form-control border border-secondary"></textarea>
                  </div>
                </div>
                
                
                <div class="form-group row mb-4">
                  <label for="codigo" class="col-4 col-md-3"> Descuento:</label>
                  <div class="col-8">
                    <input type="text" class="form-control border border-secondary" />
                  </div>
                </div>


                <div class="form-group text-center ">
                  <button class="btn btn-primary m-2 ">Crear Producto</button>
                  <button class="btn btn-danger m-2">Cancelar</button>
                </div>
              </div>
         </div>


          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            
          <div class="row mt-5 mb-4 ">
              <div class="col-12 col-md-5 ">
                <img src="https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png" class="img-thumbnail" alt="..." />           
              </div>

              <div class="col-12 col-md-7 mt-4 mt-mb-0" >
                <div class="form-group row mb-4">
                  <label for="codigo" class="col-3"> Codigo:</label>
                  <div class="col-8">
                    <input type="text" class="form-control border border-secondary" value="00858DE" />
                  </div>
                </div>
                
                <div class="form-group row mb-4">
                  <label for="codigo" class="col-3"> Usuario:</label>
                  <div class="col-8">
                    <input type="text" class="form-control border border-secondary" value="Jano Melul" />
                  </div>
                </div>
                
                <div class="form-group row mb-4">
                  <label for="codigo" class="col-3"> Email:</label>
                  <div class="col-8">
                    <input type="text" class="form-control border border-secondary" value="jannomelul@gmail.com" />
                  </div>
                </div>
                
            
                <div class="form-group text-center ">
                  <button class="btn btn-primary m-2">Actualizar</button>
                  <button class="btn btn-danger m-2">Cancelar</button>
                </div>
              </div>
         </div>


          </div>
        </div>
      </div>
    </div>

  </div>

    );
};




export default Perfil;