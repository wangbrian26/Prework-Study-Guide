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
    myImage.setAttribute('src', 'assets/Noki.jpg');
  } else {
    myImage.setAttribute('src', 'assets/bowtie-cat.png');
  }
}
