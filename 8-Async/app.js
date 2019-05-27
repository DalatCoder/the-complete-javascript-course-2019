// Callback hell
function getRecipe() {

  setTimeout(() => {
    const IDs = [111, 222, 333, 444];
    console.log(IDs);

    setTimeout(id => {
      const recipe = {
        title: 'Fresh tomoto pasta',
        publisher: 'Trong Hieu'
      };
      console.log(`${id}: ${recipe.title}.`);

      setTimeout(pub => {
        const recipe2 = {
          title: 'Italian Pizza',
          publisher: pub
        }
        console.log(`${recipe2.title} from ${recipe2.publisher}.`);
      }, 2000, recipe.publisher);
    }, 2000, IDs[2]);
  }, 2000);

};
getRecipe();
