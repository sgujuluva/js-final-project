/* 6. Write a JavaScript function to sort the following array of objects by title value.

```js
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
]; */

var library = [
    { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
    {
      author: "Suzanne Collins",
      title: "Mockingjay: The Final Book of The Hunger Games",
      libraryID: 3245,
    },
  ]; 

  let sortByTitle = library.sort((firstItem,secondItem) => {
    if( firstItem.title < secondItem.title){
      return -1;
    }
    //  let sort = firstItem.title - secondItem.title;
     
    });
    //console.log("sortByID--------------------------",sortByTitle);
  console.log("sortByTitle--------------------------",sortByTitle);
  //console.log("library.................................", library);