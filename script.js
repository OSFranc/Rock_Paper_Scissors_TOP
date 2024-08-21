let humanResponse=""
let computerResponse=""
let humanScore=0
let computerScore=0

function resultados(){
    return(alert(" USTED: "+ humanScore+ " COM: "+ computerScore))
}

function getHumanChoice(){
    while(true){
        humanResponse = prompt("Piedra, Papel o Tijeras?").toLowerCase()
        if (humanResponse=="piedra"||humanResponse=="papel"||humanResponse=="tijeras"){
            break
        }
        else{
        alert("Opción no válida, intente otra vez")
        }
    }
    
}

function getComputerChoice(){
    rndmNum=Math.random()
    if (rndmNum*10<=3){
    computerResponse = "piedra"
    }
    else if (rndmNum*10<=6){
    computerResponse = "papel"
    }
    else if (rndmNum*10>6){
    computerResponse = "tijeras"
        }
    
        return computerResponse

}

function playGame(human,computer){
    if(human=="piedra" && computer=="tijeras"){
        humanScore+=1
        alert("Ronda Ganada! Tu: " + humanResponse + " COM: "+ computerResponse)
    }
    else if(human=="piedra" && computer=="papel"){
        computerScore+=1
        alert("Ronda Perdida! Tu: " + humanResponse + " COM: "+ computerResponse)
    }
    else if(human=="papel" && computer=="tijeras"){
        computerScore+=1
        alert("Ronda Perdida! Tu: " + humanResponse + " COM: "+ computerResponse)
    }
    else if(human=="papel" && computer=="piedra"){
        humanScore+=1
        alert("Ronda Ganada! Tu: " + humanResponse + " COM: "+ computerResponse)
    }
    else if(human=="tijeras" && computer=="piedra"){
        computerScore+=1
        alert("Ronda Perdida! Tu: " + humanResponse + " COM: "+ computerResponse)
    }
    else if(human=="tijeras" && computer=="papel"){
        humanScore+=1
        alert("Ronda Ganada! Tu: " + humanResponse + " COM: "+ computerResponse)
    }
    else if(human==computer){
        alert("Empate! Tu: "+ humanResponse+ " COM: "+ computerResponse)
    }

}

function detGanador(human,computer){
    if (human==5){
        return "USTED"
    }
    else if (computer==5){
        return "COM"
    }
}


alert("BIENVENIDO, JUEGO PIEDRA, PAPEL, TIJERAS vs. COM")
while(humanScore<5 && computerScore<5){
getHumanChoice()
getComputerChoice()
playGame(humanResponse,computerResponse)
resultados()}

alert("Fin del Juego! Ganador: "+ detGanador(humanScore,computerScore))