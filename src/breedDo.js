export const breedsFilter = (typeOfBreeds, dataDogsLovers) => dataDogsLovers.filter(dogs => dogs.breed == typeOfBreeds);'./data.js';

export const alphaOrd = (dataDogsLovers) => {
    return dataDogsLovers.sort((a, b) => {
       if (a.breed.toUpperCase() > b.breed.toUpperCase()) {
         return -1;
       }
       if (a.breed.toUpperCase() < b.breed.toUpperCase ()) {
         return 1;
       }
     });
   }