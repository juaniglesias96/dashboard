const runScripts=()=>{
    chart_bars=document.getElementById( "chart-bar" )
    icons=document.getElementsByTagName( "i" )
    console.log(icons)
    cards=document.getElementsByClassName( "card" )
    console.log(cards)
}

function modifyText() {
    // Obtener todos los elementos <p>
    let listOfP = document.getElementsByTagName("p");

    // Obtener el elemento <p> en el índice 3
    let elementP = listOfP[3];

    // Asignar el contenido HTML del elemento <p>
    elementP.innerHTML = 'Dinero actual';

    // Obtener todos los elementos <h4>
    let listOfH4 = document.getElementsByTagName("h4");

    // Obtener el elemento <h4> en el índice 0
    let elementH4 = listOfH4[0];

    // Asignar el contenido HTML del elemento <h4>
    elementH4.innerHTML = '$301k';
}

runScripts()
modifyText()