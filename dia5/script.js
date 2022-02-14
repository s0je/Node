// A $( document ).ready() block.
$(document).ready(function() {
  $('#menu_on').click(function(){
    $('body').toggleClass('visible_menu');
  })
});
class Professional{

  constructor( image, name, age, genre, weight, height, hairColor, race, isRetired, nationality, oscarsNumber, profesion)
  {   
      this.image = image;
      this.name = name;
      this.age = age;
      this.genre = genre;
      this.weight = weight;
      this.height = height;
      this.hairColor = hairColor;
      this.race = race;
      this.isRetired = isRetired;
      this.nationality = nationality;
      this.oscarsNumber = oscarsNumber;
      this.profesion = profesion;
  }

}

// const myLib = require("./profesional.js");
// let Professional = myLib.Professional;

async function mostrar()
{
  let mostrar = document.getElementById("buscar");
  mostrar.style.cssText = 'visibility: visible;	display: block;';
  let borrador = document.getElementById("borrador");
  borrador.style.cssText = 'visibility: hidden;	display: none;';
  let img = document.getElementById("img");
  img.style.cssText = 'visibility: hidden;	display: none;';
    let form = document.getElementById("formulario");
    form.className = 'formulario_oculto';
    form.style.cssText = 'width: 100%; display: flex;  justify-content: center;visibility: hidden;	display: none;';
    let url = 'http://localhost:5500/profesionales'
    let param = {
        headers:{
          "content-type": "application/json; charset=UTF-8"
        },
        method:"GET"
    }
    try {
        let data = await fetch(url,param)
        let resul = await data.json()
        let textTemp='';
        console.log(resul);
        for(let prof of resul)
          {
            textTemp +=`<div class="col">
                          <div class="card" style="width: 18rem;">
                              <img src="`+prof.image+`" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <div class="card-header">
                                  `+prof.name+`
                                  </div>
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Genre: `+prof.genre+`</li>
                                      <li class="list-group-item">Age: `+prof.age+`</li>
                                      <li class="list-group-item">Weigth: `+prof.weight+`</li>
                                      <li class="list-group-item">Height: `+prof.height+`</li>
                                      <li class="list-group-item">Hair color: `+prof.hairColor+`</li>
                                      <li class="list-group-item">Race: `+prof.race+`</li>
                                      <li class="list-group-item">Is retides?: `+prof.isRetired+`</li>
                                      <li class="list-group-item">Nationality: `+prof.nationality+`</li>
                                      <li class="list-group-item">Oscar's: `+prof.oscarsNumber+`</li>
                                      <li class="list-group-item">Profesion: `+prof.profesion+`</li>
                                  </ul>
                              </div>
                          </div>
                        </div>`;
          }
          document.getElementById("profesional").innerHTML = textTemp;
        }
        
    catch(err) 
        {
          console.log(err);
        }
}

async function mostrarId()
{
  document.getElementById("profesional").innerHTML = '';
  let buscar = document.getElementById("buscarId").value;
  let url = 'http://localhost:5500/profesionales'
    let param = {
        headers:{"content-type": "application/json; charset=UTF-8"},
        method:"GET"
    }
    try {
        let data = await fetch(url,param)
        let resul = await data.json()
        let textTemp='';
        console.log(resul);
            textTemp +=`<div class="col">
                          <div class="card" style="width: 18rem;">
                              <img src="`+resul[buscar].image+`" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <div class="card-header">
                                  `+resul[buscar].name+`
                                  </div>
                                  <ul class="list-group list-group-flush">
                                      <li class="list-group-item">Genre: `+resul[buscar].genre+`</li>
                                      <li class="list-group-item">Age: `+resul[buscar].age+`</li>
                                      <li class="list-group-item">Weigth: `+resul[buscar].weight+`</li>
                                      <li class="list-group-item">Height: `+resul[buscar].height+`</li>
                                      <li class="list-group-item">Hair color: `+resul[buscar].hairColor+`</li>
                                      <li class="list-group-item">Race: `+resul[buscar].race+`</li>
                                      <li class="list-group-item">Is retides?: `+resul[buscar].isRetired+`</li>
                                      <li class="list-group-item">Nationality: `+resul[buscar].nationality+`</li>
                                      <li class="list-group-item">Oscar's: `+resul[buscar].oscarsNumber+`</li>
                                      <li class="list-group-item">Profesion: `+resul[buscar].profesion+`</li>
                                  </ul>
                              </div>
                          </div>
                        </div>`;
          document.getElementById("profesional").innerHTML = textTemp;
        }
        
    catch(err) 
        {
          console.log(err);
        }
}

async function postProfesional()
{
  try
  {
    let nuevoProfesional = new Professional(
                                          document.getElementById("image").value,
                                          document.getElementById("name").value,
                                          document.getElementById("age").value,
                                          document.getElementById("genre").value,
                                          document.getElementById("weight").value,
                                          document.getElementById("height").value,
                                          document.getElementById("hairColor").value,
                                          document.getElementById("race").value,
                                          document.getElementById("isRetired").value,
                                          document.getElementById("nationality").value,
                                          document.getElementById("oscarsNumber").value,
                                          document.getElementById("profesion").value);
    let url = "http://localhost:5500/profesionales";

    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(nuevoProfesional),
        method: "POST"
      }

    let data = await fetch(url,param);
    let result = await data.json();
    console.log(result);
  }
  catch(err)
  {
    console.log(err);
  }
  
}

//PUT Profesional
async function putProfesional()
{
  try
  {
    let id = document.getElementById("id").value;
    let image =document.getElementById("image").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let genre = document.getElementById("genre").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let hairColor = document.getElementById("hairColor").value;
    let race = document.getElementById("race").value;
    let isRetired = document.getElementById("isRetired").value;
    let nationality = document.getElementById("nationality").value;
    let oscarsNumber = document.getElementById("oscarsNumber").value;
    let profesion = document.getElementById("profesion").value;
                                   
    let datos = {'id': id, 'image': image,'name':name,'age':age,'genre': genre, 'weight':weight, 'height': height, 'hairColor': hairColor, 'race':race,'isRetired':isRetired, 'nationality': nationality,'oscarsNumber':oscarsNumber,'profesion':profesion};
    let url = "http://localhost:5500/profesionales";

    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(datos),
        method: "PUT"
      }
    let data = await fetch(url,param);
    let result = await data.json();
    console.log(result);
  }catch(err)
  {
    console.log(err);
  }
}

//DEL Profesional
async function delProfesional()
{
  try
  {
    
  let id = document.getElementById("borrar_id").value;

  let dato = {'id': id};
  console.log(dato);

  let url = "http://localhost:5500/profesionales";

    let param =
      {
        headers:{"content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(dato),
        method: "DELETE"
      }
    let data = await fetch(url,param);
    let result = await data.json();
    console.log(result);
  }catch(err)
  {
    console.log(err);
  }
}
function crearProfesional()
{
  let mostrar = document.getElementById("buscar");
  mostrar.style.cssText = 'visibility: hidden;	display: none;'
  document.getElementById("profesional").innerHTML = '';
  let borrador = document.getElementById("borrador");
  borrador.style.cssText = 'visibility: hidden;	display: none;'  
  let id = document.getElementById("dato");
  id.style.cssText = 'visibility: hidden;	display: none;';
  let form = document.getElementById("formulario");
  form.style.cssText = 'width: 100%; display: flex;  justify-content: center;visibility: visible;	display: block;';
  let update = document.getElementById("up");
  update.style.cssText = "margin-top: 15px; margin-bottom: 15px; visibility: hidden; display: none";
  let add = document.getElementById("add");
  add.style.cssText= "margin-top: 15px; margin-bottom: 15px; visibility: visible; display: block";
  
  
}
function update()
{
  let mostrar = document.getElementById("buscar");
  mostrar.style.cssText = 'visibility: hidden;	display: none;'
  document.getElementById("profesional").innerHTML = '';
  let borrador = document.getElementById("borrador");
  borrador.style.cssText = 'visibility: hidden;	display: none;';
  let id = document.getElementById("dato");
  id.style.cssText = 'visibility: visible;	display: block;';
  let form = document.getElementById("formulario");
  form.style.cssText = 'width: 100%; display: flex;  justify-content: center;visibility: visible;	display: block;';
  let borrar = document.getElementById("borrar");
  borrar.style.cssText ='width: 100%; display: flex;  justify-content: center;visibility: hidden;	display: none;';
  let add = document.getElementById("add");
  add.style.cssText= "margin-top: 15px; margin-bottom: 15px; visibility: hidden; display: none";
  let update = document.getElementById("up");
  update.style.cssText = "margin-top: 15px; margin-bottom: 15px; visibility: visible; display: block"; 
}

function borrar()
{
  let mostrar = document.getElementById("buscar");
  mostrar.style.cssText = 'visibility: hidden;	display: none;'
  document.getElementById("profesional").innerHTML = '';
  let form = document.getElementById("formulario");
  form.style.cssText = 'width: 100%; display: flex;  justify-content: center;visibility: hidden;	display: none;';
  let borrador = document.getElementById("borrador");
  borrador.style.cssText = 'visibility: visible;	display: block;'
}