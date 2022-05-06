document.title = collectionInfo.name;
document.getElementById("myVideo").src = `./assets/${collectionInfo.medias.preview}`;


document.getElementById("h2").innerText = collectionInfo.name;
document.getElementById("message").innerText = collectionInfo.text1;
document.getElementById("message2").innerText = collectionInfo.text2;

document.body.style.backgroundColor = collectionInfo.background.color