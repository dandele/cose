var presentazioniEasy = [
    'Tronchi per femministe',
    'Borracce per il signor laurenti',
    'Mostri e dirimpettai',
    'Anatemi di lusso',
    'Scuole e ventilatori',
    'nudità del Bosone di higgs' 
]

function presentazioneFacile() {
    var numeroRandom = Math.floor(Math.random() * (presentazioniEasy.length));
    document.getElementById('presentazione').innerHTML = presentazioniEasy[numeroRandom];
}

//cose medie
var presentazioniMedie = [
    'Tarocchi nudi per casa',
    'Anziani adoratori di calzini',
    'Panda drogati di amebe',
    'Calzini spogliati dalle dinamo',
    'Apparecchi che spgliano gli ermellini'
]

function presentazioneMedia() {
    var numeroRandom_Medie = Math.floor(Math.random() * (presentazioniMedie.length));
    document.getElementById('presentazione').innerHTML = presentazioniMedie[numeroRandom_Medie];
}



var presentazioniHard = [
    'Bottiglie di thè in relazione ai capitoli della bibbia',
    'Tradimento per lettere dell alfabeto medio',
    'Amebe mangiatrici di suini',
    'Cinema ad aria compressa',
    'Nuedità in relazione allo spazio geolocico'
]

function presentazioneDifficile() {
    var numeroRandom_Hard = Math.floor(Math.random() * (presentazioniHard.length));
    document.getElementById('presentazione').innerHTML = presentazioniHard[numeroRandom_Hard];
}
