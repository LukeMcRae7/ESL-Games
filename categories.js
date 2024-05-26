let messageDone = false;
let usedWords = [];
let myScore = 0;
let myTotal = 0;
const categoryList = [
  // Animals
  ["cat", "dog", "lion", "elephant", "monkey", "giraffe", "zebra", "snake", "turtle", "bird", "fish", "owl", "butterfly", "spider", "bear", "horse", "cow", "pig", "sheep", "dolphin"],
  // Nature
  ["sun", "moon", "clouds", "mountains", "trees", "flowers", "grass", "sand", "water", "sky", "rainbow", "river", "ocean", "lake", "desert", "forest", "jungle", "volcano", "waterfall", "glacier"],
  // Food
  ["pizza", "pasta", "bread", "cake", "cookies", "ice cream", "chicken", "fish", "lettuce", "fruit", "cheese", "milk", "juice", "eggs", "cereal", "soup", "sandwich", "burger", "fries", "candy"],
  // Weather
  ["sunny", "rainy", "cloudy", "windy", "snowy", "stormy", "foggy", "hot", "cold", "tornado", "humid", "dry", "breezy", "stormy", "freezing", "frost", "bright", "gloomy", "mist", "chilly"],
  // Emotions
  ["happy", "sad", "angry", "surprised", "scared", "excited", "confused", "bored", "tired", "frustrated", "jealous", "loving", "grateful", "hopeful", "proud", "relieved", "shy", "disappointed", "silly", "content"],
  // Verbs
  ["run", "jump", "walk", "talk", "sing", "dance", "play", "eat", "sleep", "read", "write", "draw", "build", "cook", "clean", "learn", "work", "help", "love", "laugh"],
  // Clothes
  ["shirt", "pants", "dress", "skirt", "shoes", "hat", "jacket", "gloves", "scarf", "socks", "underwear", "pajamas", "suit", "tie", "belt", "sunglasses", "hat", "dress shirt", "sweater", "t-shirt"],
  // Jobs
  ["doctor", "teacher", "firefighter", "police", "nurse", "dentist", "lawyer", "engineer", "scientist", "artist", "musician", "athlete", "writer", "chef", "baker", "hairstylist", "mechanic", "salesperson", "accountant", "architect"],
  // Home Items
  ["plate", "cup", "fork", "spoon", "knife", "table", "chair", "couch", "bed", "lamp", "desk", "rug", "curtain", "blanket", "pillow", "towel", "clock", "calendar", "lampshade", "vase"],
];

const categoryNames = ["Animals", "Nature", "Food", "Weather", "Emotions", "Verbs", "Clothes", "Jobs", "Home Items"];

function setCategories() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  // Shuffle the array randomly using the Fisher-Yates shuffle algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers.slice(0, 3);
}

let categoryNumbers = setCategories();
document.getElementById('category1').title = categoryNames[categoryNumbers[0]];
document.getElementById('category2').title = categoryNames[categoryNumbers[1]];
document.getElementById('category3').title = categoryNames[categoryNumbers[2]];

document.getElementById('category1Label').innerHTML = document.getElementById('category1').title
document.getElementById('category2Label').innerHTML = document.getElementById('category2').title
document.getElementById('category3Label').innerHTML = document.getElementById('category3').title

function setWords() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  // Shuffle the array randomly using the Fisher-Yates shuffle algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers
}
let wordNumbers = setWords();

function wordRandomizer() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // Shuffle the array randomly using the Fisher-Yates shuffle algorithm
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers
}
let ranNum = wordRandomizer();
document.getElementById('word' + ranNum[0]).innerHTML = categoryList[categoryNumbers[0]][0];
document.getElementById('word' + ranNum[1]).innerHTML = categoryList[categoryNumbers[0]][1];
document.getElementById('word' + ranNum[2]).innerHTML = categoryList[categoryNumbers[0]][2];
document.getElementById('word' + ranNum[3]).innerHTML = categoryList[categoryNumbers[0]][3];
document.getElementById('word' + ranNum[4]).innerHTML = categoryList[categoryNumbers[1]][4];
document.getElementById('word' + ranNum[5]).innerHTML = categoryList[categoryNumbers[1]][5];
document.getElementById('word' + ranNum[6]).innerHTML = categoryList[categoryNumbers[1]][6];
document.getElementById('word' + ranNum[7]).innerHTML = categoryList[categoryNumbers[1]][7];
document.getElementById('word' + ranNum[8]).innerHTML = categoryList[categoryNumbers[2]][8];
document.getElementById('word' + ranNum[9]).innerHTML = categoryList[categoryNumbers[2]][9];
document.getElementById('word' + ranNum[10]).innerHTML = categoryList[categoryNumbers[2]][10];
document.getElementById('word' + ranNum[11]).innerHTML = categoryList[categoryNumbers[2]][11];

function allWordsGreen() {
  const draggableElements = document.querySelectorAll('.draggable');
  for (const element of draggableElements) {
    if (element.style.backgroundColor !== 'rgb(82, 204, 113)') {
      return false;
    }
  }
  return true;
}

function newDrag(myWord, myCategory) {
    let items = [] 
    if(myCategory == 'Animals') {items = categoryList[0]}
    else if(myCategory == 'Nature') {items = categoryList[1]}
    else if(myCategory == 'Food') {items = categoryList[2]}
    else if(myCategory == 'Weather') {items = categoryList[3]}
    else if(myCategory == 'Emotions') {items = categoryList[4]}
    else if(myCategory == 'Verbs') {items = categoryList[5]}
    else if(myCategory == 'Clothes') {items = categoryList[6]}
    else if(myCategory == 'Jobs') {items = categoryList[7]}
    else if(myCategory == 'Home Items') {items = categoryList[8]}

    if(myCategory != ''){
      if(items.includes(myWord.innerHTML)) {
        if(!usedWords.includes(myWord.innerHTML)){
          myScore += 1;
          myTotal += 1;
        }
        myWord.style.backgroundColor = 'rgb(82, 204, 113)';
        myWord.style.borderColor = 'green';
    } else {
      if(!usedWords.includes(myWord.innerHTML)){
        myTotal += 1;
      }
        myWord.style.backgroundColor = 'rgb(221, 81, 81)';
        myWord.style.borderColor = 'rgb(121, 8, 8)';
    }

    } else {
        myWord.style.backgroundColor = 'rgb(172, 174, 181)';
        myWord.style.borderColor = '#575074';
    }


    if(!usedWords.includes(myWord.innerHTML)){
      usedWords.push(myWord.innerHTML); //Push current word to usedWords if it's first time being used
    }

    document.getElementById("scoreboard").innerHTML = myScore + "/" + myTotal;
    document.getElementById("scoreboard2").innerHTML = myScore + "/" + myTotal;

    if (document.getElementById('wordBank').textContent.trim() === '' && !allWordsGreen()) { //Use trim as to not recognize blank space
      messageScreen();
    }   
    
    if(allWordsGreen()){
      winScreen();
    }
}

const draggableElements = document.querySelectorAll('.draggable');
const categoryElements = document.querySelectorAll('.category');

let currentDragging;

draggableElements.forEach(draggable => {
  draggable.addEventListener('dragstart', (event) => {
    currentDragging = draggable;
    currentDragging.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    currentDragging.classList.remove('dragging');
  });
});

categoryElements.forEach(category => {
  category.addEventListener('dragover', (event) => {
    event.preventDefault();
    category.classList.add('active');
  });

  category.addEventListener('dragleave', () => {
    category.classList.remove('active');
  });

  category.addEventListener('drop', () => {
    category.classList.remove('active');
    currentDragging.parentNode.removeChild(currentDragging);
    category.appendChild(currentDragging);
    newDrag(currentDragging, category.title);
  });
});

function messageScreen(){
  if(!messageDone){
  document.getElementById("messageBox").style.transition = '0.75s';
  document.getElementById("messageBox").style.top = '30%';
  document.getElementById("overlay").style.zIndex = '1';
  document.getElementById("overlay").style.opacity = '50%';
  }
}

function removeMessageScreen(){
  messageDone = true;
  document.getElementById("messageBox").style.top = '-30%';
  document.getElementById("overlay").style.zIndex = '-1';
  document.getElementById("overlay").style.opacity = '0%';
}

function winScreen(){
    document.getElementById("winBox").style.transition = '0.75s';
    document.getElementById("winBox").style.top = '10%';
    document.getElementById("overlay").style.zIndex = '1';
    document.getElementById("overlay").style.opacity = '50%';
}