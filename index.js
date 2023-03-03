document.getElementById('get-btn').addEventListener('click', function() {
  let hexValue = document.getElementById('seed-color').value.toUpperCase().substring(1);
  
  let colorScheme = document.getElementById('color-schemes').value

  fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}`, 
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    
    .then(res => res.json())
    .then(data => console.log(data))
  
})

function getHex(hexValue){
  return hexValue.toUpperCase().substring(1)
}