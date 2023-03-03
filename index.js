document.getElementById('get-btn').addEventListener('click', function(){
  let hexValue = document.getElementById('seed-color').value
  let colorScheme = document.getElementById('color-schemes').value
  fetch(`https://thecolorapi.com/scheme?hex=${hexValue}&mode=${colorScheme}`)
    .then(res => res.json())
    .then(data => console.log(data))
})