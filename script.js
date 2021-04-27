(function() {
//variables, constraints
let mychoice = document.getElementById("paper");
let i;
let pi;
let pchoice = document.getElementById("paper");
    const alloptions = document.getElementsByClassName("option");


    // option buttons
    const paper = document.getElementById("paper");
    const rock = document.getElementById("rock");
    const scissor = document.getElementById("scissor");
    const lizard = document.getElementById("lizard");
    const spock = document.getElementById("spock");
    // message section
    const react = document.getElementById("reaction");
    // score display
    const myscore = document.getElementById("pScore");
    const pcscore = document.getElementById("pcScore");


 // button actions, highlight and
    paper.addEventListener("click", ev => {
        eval(mychoice).style.backgroundColor= "rgb(245,245,245)";
        eval(pchoice).style.backgroundColor= "rgb(245,245,245)";
        mychoice = "paper";

        paper.style.backgroundColor= "pink";

    });
    rock.addEventListener("click", ev =>{
        eval(mychoice).style.backgroundColor= "rgb(245,245,245)";
        mychoice = "rock";
        rock.style.backgroundColor= "pink";

    });
    scissor.addEventListener("click", ev =>{
        eval(mychoice).style.backgroundColor= "rgb(245,245,245)";
        eval(pchoice).style.backgroundColor= "rgb(245,245,245)";
        mychoice = "scissor";
        scissor.style.backgroundColor= "pink";

    });
    lizard.addEventListener("click", ev =>{
        eval(mychoice).style.backgroundColor= "rgb(245,245,245)";
        eval(pchoice).style.backgroundColor= "rgb(245,245,245)";
        mychoice = "lizard";
        lizard.style.backgroundColor= "pink";

    });
    spock.addEventListener("click", ev => {
        eval(mychoice).style.backgroundColor= "rgb(245,245,245)";
        eval(pchoice).style.backgroundColor= "rgb(245,245,245)";
        mychoice = "spock";
        spock.style.backgroundColor= "pink";


    });
    document.getElementById("play").addEventListener("click", ev => evaluate())
    document.getElementById("reset").addEventListener("click", ev => location.reload())

    function evaluate(){
        eval(pchoice).style.backgroundColor= "rgb(245,245,245)";
        eval(mychoice).style.backgroundColor= "pink";
        // computer generates random number, a value of equal possibilities will be assigned to pchoice
        let x = Math.random();
        if (x <= 0.2){
            pchoice = "paper";
            paper.style.backgroundColor= "yellow";
        }else if( x <= 0.4 ){
            pchoice = "rock";
            rock.style.backgroundColor= "yellow";
        }else if( x <= 0.6 ){
            pchoice = "scissor";
            scissor.style.backgroundColor= "yellow";
        }else if( x <= 0.8 ){
            pchoice = "lizard";
            lizard.style.backgroundColor= "yellow";
        }else if( x <= 1 ){
            pchoice = "spock";
            spock.style.backgroundColor= "yellow";
        }
//possible outcomes

        //tie
        if( mychoice == pchoice){
            eval(mychoice).style.backgroundColor= "grey";

            react.innerHTML = "careful there" ;
        // first looking for winner cases, if none found its a losing case
        }else if(mychoice === "paper" ){
            if (pchoice === "rock" || pchoice === "spock" ){
                i = parseInt(myscore.innerHTML) + 1 ;
                myscore.innerHTML = i ;
                react.innerHTML = "are you a  w Rapper? </br> -.- ";
            } else {
                react.innerHTML = "whatsup now MC </br> >_< ";
                pi = parseInt(pcscore.innerHTML) + 1 ;
                pcscore.innerHTML = pi ;
            }
        }else if(mychoice === "rock" ){
            if (pchoice === "scissor" || pchoice === "lizard" ){
                i = parseInt(myscore.innerHTML) + 1 ;
                myscore.innerHTML = i ;
                react.innerHTML = "meehhh you rocked me </br> -.- ";
            } else {
                react.innerHTML = "hahaa who is the rockstar now </br> >_< ";
                pi = parseInt(pcscore.innerHTML) + 1 ;
                pcscore.innerHTML = pi ;
            }
        }else if(mychoice === "scissor" ){
            if (pchoice === "paper" || pchoice === "lizard" ){
                i = parseInt(myscore.innerHTML) + 1 ;
                myscore.innerHTML = i ;
                react.innerHTML = "cut it </br> -.- ";
            } else {
                react.innerHTML = "i am cut out for this</br> >_< ";
                pi = parseInt(pcscore.innerHTML) + 1 ;
                pcscore.innerHTML = pi ;
            }
        }else if(mychoice === "lizard" ){
            if (pchoice === "paper" || pchoice === "spock" ){
                i = parseInt(myscore.innerHTML) + 1 ;
                myscore.innerHTML = i ;
                react.innerHTML = "not agaiin </br> -.- ";
            } else {
                react.innerHTML = "back on track </br> >_< ";
                pi = parseInt(pcscore.innerHTML) + 1 ;
                pcscore.innerHTML = pi ;
            }
        }else if(mychoice === "spock" ){
            if (pchoice === "scissors" || pchoice === "rock" ){
                i = parseInt(myscore.innerHTML) + 1 ;
                myscore.innerHTML = i ;
                react.innerHTML = "daaang </br> -.- ";
            } else {
                react.innerHTML = "did i just beat you?? </br> o_o ";
                pi = parseInt(pcscore.innerHTML) + 1 ;
                pcscore.innerHTML = pi ;
            }

        }


    };


})();