let randomNumberGenerate = Math.ceil(Math.random() * 20);

const inputbox = document.body.querySelector("#inputbar");

const chenkbtn = document.body.querySelector("#checkbtn");

// ============Right area____-----==========

const RightArea = document.querySelector(".right");

const firstchild = RightArea.children[0];
const scorechild = document.querySelector(".score");
const highscorechild = document.querySelector(".highscore");

console.log(firstchild);
console.log(scorechild);
console.log(highscorechild);

let Score = 20;
let highScore = 0;

scorechild.textContent = Score;
highscorechild.textContent = highScore;

// const scorevalue = document.body.querySelector('.score').innerHTML = Score
// console.log(scorevalue)

// secondchild.innerHTML = Score

console.log();

//questionMArk

const questionmark = document.body.querySelector(".questionmark").innerHTML;
console.log(questionmark);

chenkbtn.addEventListener("click", function () {
  if (randomNumberGenerate == inputbox.value) {
    firstchild.innerHTML = "You Won";

    // highscorechild.value = Score;
    Score++;

    if (Score > highScore) {
      highScore = Score;
      highscorechild.textContent = Score;
    }

    console.log("how");
  } else {
    const difference = randomNumberGenerate - inputbox.value;
    //    let message;
    if (difference < 0) {
      if (difference == -1 || difference == -2) {
        message = "YOU are High, but very close";
      } else {
        message = "YOU are High";
      }
    } else {
      if (difference == +1 || difference == +2) {
        message = "YOU are low, but nery close";
      } else {
        message = "YOU are low";
      }
    }

    firstchild.innerHTML = message;
    Score--;

    // firstchild.innerHTML = 'You loss'
    // scorevalue.innerHTML = 12

    //    console.log(RightArea.children[2].innerHTML = Score )

    console.log("how works");
  }

  scorechild.innerHTML = Score;
});

const againbtn = document.body.querySelector("#againbtn");

againbtn.addEventListener("click", function () {
  Score = 20;

  scorechild.innerHTML = Score;

  const randomNumberGenerate = Math.ceil(Math.random() * 20);
});