import dataDogsLovers from './data.js';
import { breedsFilter } from './breedDo.js';
import { alphaOrd } from './breedDo.js';

const onlyDogs = dataDogsLovers.dogs;

const root = document.getElementById('root')
const SelectBreedsDog = document.getElementById("breeds");

const renderHTML=(allData)=> {
  let containerHTML = ''
  allData.forEach(element => {
    containerHTML += `
    <div class='container-dogs'>
    <img src='${element.image}' class='img-dog'/> 
    <h2>${element.breed}</h2>
    </div>`;
    root.innerHTML = containerHTML;
  })
}
renderHTML(onlyDogs)

// render dogs filtered
SelectBreedsDog.addEventListener("change", (e) => {

  if (e.target.value === "0") {
    root.innerHTML = '';
    renderHTML(onlyDogs)
  }
  else {
    let typeOfBreed = breedsFilter(e.target.value, onlyDogs);

    root.innerHTML = '';
    renderHTML(typeOfBreed)
  }
});



//Alphabetical Order

const orderAZ=document.getElementById("order");
orderAZ.addEventListener ("change", (e) => {
  let orderBox= alphaOrd(onlyDogs);
  if(e.target.value === "Z-A"){
    root.innerHTML="";
    renderHTML(orderBox);
  }
  if(e.target.value === "A-Z"){
    root.innerHTML="";
    renderHTML(orderBox.reverse())

  }

});
