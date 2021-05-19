function leInfo (){

    let strInfo = localStorage.getItem('db');
    let objInfo = {};
    
    if (strInfo) {
        objInfo = JSON.parse (strInfo);
    }else {
        objInfo = { cursos: [ 
            {curso: "Curso 1", trait: "caracteristica1", rating: "Muito Positiva"}, 
            {curso: "Curso 2", trait: "caracteristica2", rating: "Negativa"}, 
            {curso: "Curso 3", trait: "caracteristica3", rating: "Ligeiramente Positiva"},
            {curso: "Curso 4", trait: "caracteristica4", rating: "Positiva"},
            {curso: "Curso 5", trait: "caracteristica5", rating: "Neutra"},
            {curso: "Curso 6", trait: "caracteristica6", rating: "Muito Negativa"}
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



