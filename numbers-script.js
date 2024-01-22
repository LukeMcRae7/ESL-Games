let count = 1;
let segment = 1;
let values = [];

function generateValues() {
    values = []; // Clear the existing values array before generating new values
  
    // Generate an array of unique values
    for (let i = segment * 4; i >= segment * 4 - 3; i--) {
      values.push(i);
    }
  
    // Shuffle the values array
    for (let i = values.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [values[i], values[j]] = [values[j], values[i]];
    }
  }


function numberClick(numValue, buttonID) {
    document.getElementById('header').style.opacity = 0;
    let myButton = document.getElementById(buttonID)
    console.log(count);

    if(numValue == count){
        count += 1;
            
    if(count == 101) {
      document.getElementById('winDiv').style.opacity = 100;
      document.getElementById('button1').disabled = true;
      document.getElementById('button1').style.opacity = 0;
      document.getElementById('button1').style.cursor = 'default';

      document.getElementById('button2').disabled = true;
      document.getElementById('button2').style.opacity = 0;
      document.getElementById('button2').style.cursor = 'default';

      document.getElementById('button3').disabled = true;
      document.getElementById('button3').style.opacity = 0;
      document.getElementById('button3').style.cursor = 'default';

      document.getElementById('button4').disabled = true;
      document.getElementById('button4').style.opacity = 0;
      document.getElementById('button4').style.cursor = 'default';
    }
    else{
        myButton.disabled = true;
        myButton.style.opacity = 0;
        myButton.style.cursor = 'default';
        if(count == (segment * 4) + 1) {
            segment += 1;

            setTimeout(function() {
                resetButtons();
                shuffle()
                if(document.getElementById('button1').value == 100) {document.getElementById('button1').style.fontSize = '4vw'}
                if(document.getElementById('button2').value == 100) {document.getElementById('button2').style.fontSize = '4vw'}
                if(document.getElementById('button3').value == 100) {document.getElementById('button3').style.fontSize = '4vw'}
                if(document.getElementById('button4').value == 100) {document.getElementById('button4').style.fontSize = '4vw'}
              }, 200);

        }
      }
    } else {
        count = (segment * 4) - 3;
        resetButtons();
        tryAgain();
    }

}

function resetButtons() {
    document.getElementById('messageDiv').style.opacity = 0;

    document.getElementById("button1").disabled = false;
    document.getElementById("button1").style.opacity = 100;
    document.getElementById("button1").style.cursor = 'pointer';

    document.getElementById("button2").disabled = false;
    document.getElementById("button2").style.opacity = 100;
    document.getElementById("button2").style.cursor = 'pointer';

    document.getElementById("button3").disabled = false;
    document.getElementById("button3").style.opacity = 100;
    document.getElementById("button3").style.cursor = 'pointer';

    document.getElementById("button4").disabled = false;
    document.getElementById("button4").style.opacity = 100;
    document.getElementById("button4").style.cursor = 'pointer';


}
function shuffle(){
generateValues();
document.getElementById("button1").value = values[0];
document.getElementById("button2").value = values[1];
document.getElementById("button3").value = values[2];
document.getElementById("button4").value = values[3];
}

function tryAgain() {
    document.getElementById('messageDiv').style.opacity = 100;
    
    setTimeout(function() {
      document.getElementById('messageDiv').style.opacity = 0;
    }, 3000);
  }