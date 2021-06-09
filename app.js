var petName = "Max";
var gender = "male";
var spicies = "Akita";

if (gender === "male") {
  console.log(petName, "is a good boy!");
} else {
  console.log(petName, "is a good girl");
}

if (gender === "male") {
  console.log(petName.concat(" is a good boy!"));
} else {
  console.log(petName.concat(" is a good girl"));
}
