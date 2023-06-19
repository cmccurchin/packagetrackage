async function getJSONData() {
    const response = await fetch("https://airlabs.co/api/v9/flights?api_key=c385aa98-2c5d-4c7e-9bd5-5f549c7d51a0");
    const jsonData = await response.json();
    
    let arr = [];
    for(let i = 0; i < 5; i++){
        arr.push(jsonData.response[i].flight_number);        
    }

    return arr
  }

window.onload = async function(){
  let arr = await getJSONData();
  setTimeout(() => {
    let ul = document.getElementById("data");
    for(let i = 0; i < 5; i++){
      let li = document.createElement("li");
      li.innerText = arr[i];
      ul.appendChild(li);
    }
  }, "1000");

}
