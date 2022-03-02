
function getInputVal(){
  let inputVal = document.getElementById("userInput").value;

  let imgElement= document.createElement("img");
  imgElement.src = inputVal;

  let imgContainer = document.getElementById("imageHTML");
  imgContainer.appendChild(imgElement);

  let topCaption = document.getElementById("text-top").value;
  document.getElementById("top-div").innerText = topCaption;


  let bottomCaption = document.getElementById("text-bottom").value;
  document.getElementById("bottom-div").innerText = bottomCaption;  
}

function reloadPage(){
  document.location.reload();
}