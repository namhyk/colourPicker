document.getElementById('get-btn').addEventListener('click', function() {
  let hexValue = document.getElementById('seed-color').value.toUpperCase().substring(1);
  
  let colorScheme = document.getElementById('color-schemes').value

  fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${colorScheme}`)   
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.getElementById('color-1').style.backgroundColor = data.colors[0].hex.value
      document.getElementById('color-2').style.backgroundColor = data.colors[1].hex.value
      document.getElementById('color-3').style.backgroundColor = data.colors[2].hex.value
      document.getElementById('color-4').style.backgroundColor = data.colors[3].hex.value
      document.getElementById('color-5').style.backgroundColor = data.colors[4].hex.value
      document.getElementById('hexCode1').innerText = data.colors[0].hex.value
      document.getElementById('hexCode2').innerText = data.colors[1].hex.value
      document.getElementById('hexCode3').innerText = data.colors[2].hex.value
      document.getElementById('hexCode4').innerText = data.colors[3].hex.value
      document.getElementById('hexCode5').innerText = data.colors[4].hex.value
    })
})