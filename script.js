const name = () => {
    let sayHello = document.getElementById('sayHello');
    let nameStorage = localStorage.getItem('nom');

    if(nameStorage == null){
        sayHello.innerHTML = 'Bonjour a toi l"inconnu, merci de renseigner ton nom';
    } else {
        sayHello.innerHTML = `Bonjour ${nameStorage}`;
    }
};
const visit = () => {
    let visitDisplay = document.getElementById('visitDisplay');
    let visitCount = localStorage.getItem('visites');
    visitCount++;
    localStorage.setItem('visites', visitCount)
    visitDisplay.innerHTML = `Nombre de visite: ${visitCount}`
}

function setData(){
    let pseudo = document.getElementById('pseudo').value;
    localStorage.setItem('nom', pseudo);
}

name();
visit();

document.cookie = 'pseudo = Lucie'