type mediatheque = 'livres' | 'films' | 'jeux';

interface media {
    nom : string,
    date_sortie : string,
    emprunte : boolean,
    nbr_exemplaire : number
}

interface mediaJeu extends media {
    genre : string,
    developpeur : string,
}

interface mediaFilm extends media {
    genre_film : string,
    realisateur : string,
}

interface mediaLivre extends media {
    mouvement_literraire : string,
    auteur : string,
}

const jeu1: mediaJeu = { 
    nom: 'Mario', 
    date_sortie: '1983', 
    emprunte: false, 
    nbr_exemplaire: 3, 
    genre: 'Jeu de plates-formes', 
    developpeur: 'Nintendo'
};

const film1: mediaFilm = { 
    nom: 'Pirates des Caraïbes', 
    date_sortie: '2003 ', 
    emprunte: false, 
    nbr_exemplaire: 3, 
    genre_film: 'Aventure', 
    realisateur: 'Gore Verbinski'
};

const livre1: mediaLivre = { 
    nom: 'Sorceleur : Le Dernier Voeu', 
    date_sortie: '1993', 
    emprunte: false, 
    nbr_exemplaire: 1, 
    mouvement_literraire: 'Fantastique', 
    auteur: 'Andrzej Sapkowski'
};

function loc_jeu(mediaJeu) {
    
}

function loc_film(mediaFilm) {
    
}

function loc_livre(mediaLivre) {
    
}