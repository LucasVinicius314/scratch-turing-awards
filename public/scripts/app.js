function leInfo (){

    let strInfo = localStorage.getItem('db');
    let objInfo = {};
    
    if (strInfo) {
        objInfo = JSON.parse (strInfo);
    }else {
        objInfo = { cursos: [ 
            {curso: "Física Computacional", trait: "Ciências Exatas", rating: "Muito Positiva"}, 
            {curso: "Ciência da Computação", trait: "Ciências Exatas", rating: "Negativa"}, 
            {curso: "Medicina Veterinária", trait: "Ciências Biológicas", rating: "Ligeiramente Positiva"},
            {curso: "Ciências Contábeis ", trait: "Ciências Exatas", rating: "Positiva"},
            {curso: "Direito", trait: "Ciências Sociais", rating: "Neutra"},
            {curso: "Administração", trait: "Ciências Sociais", rating: "Muito Negativa"}
        ]}
    }

    return objInfo;
}

function saveInfo (infos){
    localStorage.setItem ('db', JSON.stringify (infos));
}

function incluirCurso (){

    let objInfo = leInfo ();
    
    let strCurso = document.getElementById ('campCurso').value;
    let novoCurso = {
        curso: strCurso
    };

    objInfo.cursos.push (novoCurso);

    saveInfo (objInfo);

    imprimeInfo ();
}


function imprimeInfo (){

    let tela = document.getElementById('tela');
    let strHtml = '';
    let objInfo = leInfo ();

    for (i = 0; i < objInfo.cursos.length; i++) {
        strHtml += `<p>${objInfo.cursos[i].curso}</p>`
    }

    tela.innerHTML = strHtml;
}

document.getElementById ('btnCarregaInfo').addEventListener ('click', imprimeInfo);

document.getElementById ('btnAddCurso').addEventListener ('click', incluirCurso);



