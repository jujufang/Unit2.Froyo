const froyo_function = () => {
  const flavors = prompt("Please enter some flavors", "strawberry,chocolate,vanilla")
  const listflavors = flavors.split(",")

  const flavorObject ={}

  for (let i = 0; i < listflavors.length; i++) {
    const flavor = listflavors[i];
    if (flavorObject[flavor]) {
      
      flavorObject[flavor] += 1;
  } else {
      flavorObject[flavor] = 1;
  }
}


return flavorObject;
};

console.log(froyo_function());
