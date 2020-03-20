console.log("ciao bella");

// Dramatis Personae
const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

// Our Setting
const lands = ["The-Shire", "Rivendell", "Mordor"];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  console.log("making Middle Earth");
  // console.log("Trying to make middle earth.");
  console.log("Trying to make middle earth.");
  // 1. create a section tag with an id of middle-earth
  const $section = $("<section>").attr("id", "middle-earth");
  // 2. append the section to the body of the DOM.
  $("body").append($section);
  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
  for (let i = 0; i < lands.length; i++) {
    console.log(lands[i]);
    const $lands = $("<article>").attr("id", lands[i]);
    const $h1 = $("<h1>").text(lands[i]);
    $section.append($lands);
    $lands.append($h1);
  }
};
