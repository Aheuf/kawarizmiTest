
function ComptageChar(){
    let texte = document.getElementById('chaineChar').value;
    document.getElementById('nbchar').value = texte.length;
}

function estLePlusPresent(){
    let texte = document.getElementById('chaineChar').value;

    if (texte){
        let dico = {};
        for (let i=0; i < texte.length; i++){
            if(dico[texte[i]]){
                dico[texte[i]]++;
            } else {
                dico[texte[i]] = 1;
            }
        }
        let col = Object.keys(dico).map(function(key){
            return[key,dico[key]];
        });

        col.sort(valeurTrie);

        document.getElementById('plusPresent').value = col[0][0];
    }
}

function valeurTrie(a,b){
    return b[1] - a[1];
}

function rediff(){
    let texte = document.getElementById('chaineChar').value;
    document.getElementById('redifChar').value = texte;
}

function inverser(){
    let texte = document.getElementById('chaineChar').value;
    document.getElementById('texteInv').value = texte.split("").reverse().join("");
}

function testDate(){
    let dateNow = new Date();
    let date = new Date(document.getElementById('champDate').value);

    if (date < dateNow){
        document.getElementById('repDate').value = 'chocolat'
    } else {
        document.getElementById('repDate').value = 'cheval'
    }
}