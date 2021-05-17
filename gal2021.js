async function getData(){
let file = "gal2021.json"
let response = await fetch(file);

if (response.ok){
    let json = await response.json();
    console.log(json)

    let gallery = json.gallery;
    console.log(gallery);

    for (var i=0; i < file.length; i++){
    var parentdiv = document.getElementById("gallery");

    var galnode = document.createElement("div");

    parentdiv.appendChild(galnode);

    galnode.innerHTML = '<h2>'+'-----'+'</h2>'+'<h2>'+gallery[i].title+' // '+gallery[i].date+'</h2>'+'<h3>'+gallery[i].caption+'</h3>'+'<br><img src="'+gallery[i].image+'"></img>';

    };
} else {
    alert("HTTP-Error: " + response.status);
}};

document.addEventListener("DOMContentLoaded", getData());