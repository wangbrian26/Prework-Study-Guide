var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for(var x = 0; x < topics.length; x++) {
    console.log(topics[x])
  }
}

function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

console.log("Here are a list of topics we have convered in Prework: ");
listTopics();
console.log("Which topic should we study now?");
selectTopic();

const myImage = document.querySelector('img');


myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'assets/bowtie-cat.png') {
    myImage.setAttribute('src', 'assets/Noki-copy.jpg');
  } else {
    myImage.setAttribute('src', 'assets/bowtie-cat.png');
  }
}

document.getElementById("HTMLButton").onclick = () => {
  let HTMLNotes = document.getElementById("HTMLNotes").value;
  let List = document.createElement("li");
  List.innerHTML = HTMLNotes
  document.getElementById("HTML").appendChild(List);
}

document.getElementById("CSSButton").onclick = () => {
  let CSSNotes = document.getElementById("CSSNotes").value;
  let List = document.createElement("li");
  List.innerHTML = CSSNotes
  document.getElementById("CSS").appendChild(List);
}

document.getElementById("GitButton").onclick = () => {
  let GitNotes = document.getElementById("GitNotes").value;
  let List = document.createElement("li");
  List.innerHTML = GitNotes
  document.getElementById("Git").appendChild(List);
}

document.getElementById("JSButton").onclick = () => {
  let JSNotes = document.getElementById("JSNotes").value;
  let List = document.createElement("li");
  List.innerHTML = JSNotes
  document.getElementById("JS").appendChild(List);
}