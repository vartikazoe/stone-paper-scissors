let userscore=0;
let compscore=0;

const choices = document.querySelectorAll('.choice');
const message = document.querySelector('#msg');

const comscore = document.querySelector('#compscore');
const uscore = document.querySelector('#userscore');


const gamedraw = () => {
    compscore=0;
    userscore=0;
    uscore.innerText=userscore;
    comscore.innerText=compscore;
    message.innerText='Game was Draw. Play again.';
    message.style.backgroundColor = "yellow";
};

const showwinner = (userwin,compchoice,userchoice) => {
    if(userwin){
        userscore++;
        uscore.innerText=userscore;
        message.innerText=`${userchoice}, Won! `;
        message.style.backgroundColor = "#42a89d";
    } else {
        compscore++;
        comscore.innerText=compscore;
        message.innerText= `You Lost to, ${compchoice} `
        message.style.backgroundColor = "#e2581d";
    }
};



//to generate computer choice
const gencompchoice =(userchoice)=>{
    const choicearr =['rock','paper','scissors'];
    let i=Math.floor(Math.random()*3);
    return choicearr[i];
};


const playgame =(choiceid)=>{
    //user choice
    console.log('user choice',choiceid);
    //computer choice
    const compchoice = gencompchoice();
    console.log('computer choice', compchoice);



    //to check if game is draw
    if(choiceid===compchoice){
        //game is draw
        gamedraw();
    } else {
         userwin= true;
         if(choiceid ==='rock'){
            // scissor, paper
            userwin = compchoice ==='paper' ? false : true ;
         } 
         else if(choiceid === 'paper'){
            // rock, scissors
            userwin = compchoice === 'scissors' ? false : true ;
         } 
         else{ // rock, paper
            userwin = compchoice === 'rock' ? false : true ;
         }
         showwinner(userwin,compchoice,choiceid);
    }
};




//to access each choice from user
choices.forEach((choice) => {
    //  console.log(choice);
    choice.addEventListener("click", () => {
      const choiceid = choice.getAttribute("id");
      playgame(choiceid);
    });
  });
