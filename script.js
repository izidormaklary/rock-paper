(function() {

let mychoice;
let i;
let pi;
    const paper = document.getElementById("paper");
    const rock = document.getElementById("rock");
    const scissor = document.getElementById("scissor");
    const lizard = document.getElementById("lizard");
    const spock = document.getElementById("spock");
    const react = document.getElementById("reaction");

    const myscore = document.getElementById("pScore");
    const pcscore = document.getElementById("pcScore");

    paper.addEventListener("click", ev => {
        mychoice = "paper";
        paper.style.backgroundColor= "pink";
        evaluate();
    });
    rock.addEventListener("click", ev =>{
        mychoice = "rock";
        rock.style.backgroundColor= "pink";
        evaluate();
    });
    scissor.addEventListener("click", ev =>{
        mychoice = "scissor";
        scissor.style.backgroundColor= "pink";
        evaluate();
    });
    lizard.addEventListener("click", ev =>{
        mychoice = "lizard";
        eval(mychoice).style.backgroundColor= "pink";
        evaluate();
    });
    spock.addEventListener("click", ev => {
        mychoice = "spock";
        spock.style.backgroundColor= "pink";
        evaluate();

    });

    function evaluate(){
        let pchoice;
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
        if( mychoice == pchoice){
            eval(mychoice).style.backgroundColor= "grey";

            react.innerHTML = "careful there" ;

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
        setTimeout(function (){
            eval(mychoice).style.backgroundColor= "rgb(245,245,245)";
            eval(pchoice).style.backgroundColor= "rgb(245,245,245)";

        }, 1000);

    };


})();