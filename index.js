let hexValue = document.getElementById('seed-value').value
let colorScheme = document.getElementById('color-schemes').value

fetch(`thecolorapi.com/scheme?hex=${hexValue}&mode=${colorScheme}`)
  .then(res => res.json())
  .then(data => console.log(data))