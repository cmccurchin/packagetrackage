async function logJSONData(query) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const jsonData = await response.json();
    console.log(jsonData.items[0].volumeInfo.title)

    // for (let i = 0; i < 10; i++){
    //     console.log(jsonData.items[i].volumeInfo.title);
    // }
  }

function qFormat(str){
    return(str.replace(" ", "+"))
}
let search = ("1984");

logJSONData(search)