// // Callback hell
// function getRecipe() {

//   setTimeout(() => {
//     const IDs = [111, 222, 333, 444];
//     console.log(IDs);

//     setTimeout(id => {
//       const recipe = {
//         title: 'Fresh tomoto pasta',
//         publisher: 'Trong Hieu'
//       };
//       console.log(`${id}: ${recipe.title}.`);

//       setTimeout(pub => {
//         const recipe2 = {
//           title: 'Italian Pizza',
//           publisher: pub
//         }
//         console.log(`${recipe2.title} from ${recipe2.publisher}.`);
//       }, 2000, recipe.publisher);
//     }, 2000, IDs[2]);
//   }, 2000);

// };
// getRecipe();

// Promises
// Produce
const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([111, 222, 333, 444]);
  }, 2000);
});

const getRecipe = recID => {
  return new Promise((resolve, reject) => {
    setTimeout(ID => {
      const recipe = {
        title: 'Fresh tomoto pasta',
        publisher: 'Trong Hieu'
      };
      resolve(`${ID}: ${recipe.title}`);
    }, 2000, recID);
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    setTimeout(pub => {
      const recipe2 = {
        title: 'Italian Pizza',
        publisher: pub
      };
      resolve(`${recipe2.title} from ${recipe2.publisher}`);
    }, 2000, publisher);
  });
};

// Consume
// getIDs
//   .then(IDs => {
//     console.log(IDs);
//     return getRecipe(IDs[2]);
//   })
//   .then(recipe => {
//     console.log(recipe);
//     return getRelated('Trong Hieu');
//   })
//   .then(related => {
//     console.log(related);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// Async/ await
async function getRecipeAW() {
  const IDs = await getIDs;
  console.log(IDs);
  const recipe = await getRecipe(IDs[2]);
  console.log(recipe);
  const related = await getRelated('Trong Hieu');
  console.log(related);

  return recipe;
}
getRecipeAW().then(result => console.log(`${result} is the best ever.`));
