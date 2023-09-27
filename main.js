document.querySelector('button').addEventListener('click', apiRequest)



const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ when submitting a form (prevents page reload)
  event.preventDefault();

  const firstNameInput = document.getElementById('first_name');

  // Send value to server
  console.log(firstNameInput.value);

  // 👇️ clear input field
  firstNameInput.value = '';
});

async function apiRequest() {
    const alienName = document.querySelector('input').value
    
    try{
        const response = await fetch(`https://api-xtar-trek-b72b6855941a.herokuapp.com/api/${alienName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeWorld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.interestingFacts
        document.getElementById('alienExamples').innerText = data.notableExamples

        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    } catch(error){
        console.log(error)
    }
    
}



