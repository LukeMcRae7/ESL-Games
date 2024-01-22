let current = '';
let section = 1;


function getRandomLowercaseLetter(startLetter, endLetter) {
  const alphabet = 'abcdefghijklmnopqrstuvwxy';
  const startIndex = alphabet.indexOf(startLetter);
  const endIndex = alphabet.indexOf(endLetter);
  const randomIndex = Math.floor(Math.random() * (endIndex - startIndex + 1)) + startIndex;
  return alphabet[randomIndex];
}

// Define a function to set button values based on section
function setButtonValuesForSection(section) {
  const buttonIDs = ['button2', 'button4', 'button6', 'button8', 'button10'];
  const usedLetters = {}; // To keep track of used letters
  
  // Determine the range of letters based on the section
  let startLetter = '';
  let endLetter = '';
  switch (section) {
    case 1:
      startLetter = 'a';
      endLetter = 'e';
      break;
    case 2:
      startLetter = 'f';
      endLetter = 'j';
      break;
    case 3:
        startLetter = 'k';
        endLetter = 'o';
        break;
    case 4:
        startLetter = 'p';
        endLetter = 't';
        break;
    case 5:
        startLetter = 'u';
        endLetter = 'y';
        break;
    default:
      break;
  }

  // Assign unique random letters to the specified buttons
  for (let i = 0; i < buttonIDs.length; i++) {
    const button = document.getElementById(buttonIDs[i]);
    if (button) {
      let randomLetter;
      do {
        randomLetter = getRandomLowercaseLetter(startLetter, endLetter);
      } while (usedLetters[randomLetter]); // Keep generating until a unique letter is found
      usedLetters[randomLetter] = true; // Mark the letter as used
      button.value = randomLetter;
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {

  setButtonValuesForSection(section);

});


function areAllButtonsGreen() {
  const buttons = document.querySelectorAll('.button');
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].style.backgroundColor !== 'green') {
      return false; // Return false if any button does not have green color
    }
  }
  return true; // Return true if all buttons have green color
}


function letterSelect(clicked) {
if(current == '' && clicked.style.backgroundColor != 'green') {
  clicked.style.backgroundColor = '#c0a52d';
  current = clicked;
}
else if (clicked.style.backgroundColor != 'green'){
  if (clicked.value == clicked.value.toLowerCase() && current.value == current.value.toUpperCase()){
    current.style.backgroundColor = '#3d96da';

    if (clicked.value.toUpperCase() == current.value){
      clicked.style.backgroundColor = 'green';
      current.style.backgroundColor = 'green';
      current = '';
    }
    
    else {
      let myTemp = current;
      let myTemp2 = clicked;
      clicked.style.backgroundColor = '#963131';
      current.style.backgroundColor = '#963131';
      current = '';

      setTimeout(function() {
        if(myTemp.style.backgroundColor == 'green'){
          clicked.style.backgroundColor = '#3d96da';
        }
        
        else if(myTemp2.style.backgroundColor == 'green'){
          myTemp.style.backgroundColor = '#3d96da';
        }

        else{
        clicked.style.backgroundColor = '#3d96da';
        myTemp.style.backgroundColor = '#3d96da';
      }
      }, 1000);

    }

   }

  if (clicked.value == clicked.value.toUpperCase() && current.value == current.value.toLowerCase()){
    current.style.backgroundColor = '#3d96da';
    if (clicked.value.toLowerCase() == current.value){
      clicked.style.backgroundColor = 'green';
      current.style.backgroundColor = 'green';
      current = '';
    }
    
    else {
        let myTemp = current;
        let myTemp2 = clicked;
        clicked.style.backgroundColor = '#963131';
        current.style.backgroundColor = '#963131';
        current = '';
  
        setTimeout(function() {
          if(myTemp.style.backgroundColor == 'green'){
            clicked.style.backgroundColor = '#3d96da';
          }
          
          else if(myTemp2.style.backgroundColor == 'green'){
            myTemp.style.backgroundColor = '#3d96da';
          }

          else{
          clicked.style.backgroundColor = '#3d96da';
          myTemp.style.backgroundColor = '#3d96da';
        }
        }, 1000);
    }
  }
}

if (areAllButtonsGreen()) {
  if(section != 5) {
  section += 1;

setTimeout(function() {
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(function(button) {
    button.style.backgroundColor = '#3d96da';
  });
  setButtonValuesForSection(section);

  if (section == 2) {
    document.getElementById('button1').value = 'F';
    document.getElementById('button3').value = 'G';
    document.getElementById('button5').value = 'H';
    document.getElementById('button7').value = 'I';
    document.getElementById('button9').value = 'J';
  }

  else if (section == 3) {
    document.getElementById('button1').value = 'K';
    document.getElementById('button3').value = 'L';
    document.getElementById('button5').value = 'M';
    document.getElementById('button7').value = 'N';
    document.getElementById('button9').value = 'O';
  }

  else if (section == 4) {
    document.getElementById('button1').value = 'P';
    document.getElementById('button3').value = 'Q';
    document.getElementById('button5').value = 'R';
    document.getElementById('button7').value = 'S';
    document.getElementById('button9').value = 'T';
  }

  else if (section == 5) {
    document.getElementById('button1').value = 'U';
    document.getElementById('button3').value = 'V';
    document.getElementById('button5').value = 'W';
    document.getElementById('button7').value = 'X';
    document.getElementById('button9').value = 'Y';
  }
    }, 1000);
  }
else {
  document.getElementById('messageDiv').style.opacity = 100;
}
}
}