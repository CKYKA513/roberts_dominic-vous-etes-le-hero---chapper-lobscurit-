console.log("allo");

let chapitre1 = {
    subtitle: "La chambre",
    text: "Ma chambre, rien d'autre a faire que dormir et glander devant l'ordi",
    img: "../assets/image/chambre.png",
    options: [
        (ordinateur = {
          text: "Que ce passe-t-il de bon sur le web, probablement rien encore",
          action: "goToChapter('internet')",
        }),
        (lit = {
          text: "Je suis tellement fatigué...",
          action: "goToChapter('le_lit')",
        }),
      ],
};
let chapitre2 = {
    subtitle: "Le lit",
    text: "Peut-être devrais-je m'étendre un petit peu",
    img: "../assets/image/chambre.png",
    options: [
        (dormir = {
            text: "Un autre somme pour perdre mon temps en attendant ma fin.",
            action: "goToChapter('la_chambre')",
        }),
    ],
};
let chapitre3 = {
    subtitle: "Internet",
    text: "Wahouuu le web!!!",
    img: "../assets/image/chambre.png",
    options: [
        (reseauxSociaux = {
            text: "Rien d'autre que des gens egocentrique essayant de se remonter encore",
            action: "goToChapter('reseaux_sociaux')",
        }),
        (imageBoard = {
            text: "peut-être quelque chose d'interessant se trame ici",
            action: "goToChapter('image_board')",
        }),
        (silkRoad = {
            text: "Encore une fois, c'est le seul échapatoire",
            action: "goToChapter('silk_road')",
        }),
    ],
};
let chapitre3_1 = {
    subtitle: "reseaux sociaux",
}
let chapitre3_2 = {
    subtitle: "image board",
}
let chapitre3_3 = {
    subtitle: "silk road",
}
let chapitre4 = {
    subtitle: "La cuisine",
    text: "Peut-être que je devrais manger un petit quelque chose, mais en même temps je n'ai pas très faim.",
    img: "../assets/image/chambre.png",
    options: [
        (couteau = {
            text: "devrais-je?",
            action: "goToChapter('le_couteau')",
        }),
        (frigo = {
            text: "chaque jour les mêmes choses...",
            action: "goToChapter('le_frigo')"
        }),
    ],
};
let chapitre5 = {
    subtitle: "Le couteau",
    text: "Est-ce que ce serait vraiment l'heure?",
    img: "../assets/image/chambre.png",
    options: [
        text: "Du calme, c'est bientot finit",
        action: "goToChapter('la_fin')",
    ],
};
let chapitre6 = {
    subtitle: "Le frigo",
    text: "Je devrais peut-être manger? mais en même temps je n'ai tellement pas faim",
    img: "../assets/image/chambre.png",
};
let chapitre7 = {
    subtitle: "Le salon",
    text: "Encore une bonne opportunitée de perdre du temps",
    img: "../assets/image/chambre.png",
    options: [
        (Bonbon = {
            text: "Pourquoi pas?",
            action: "goToChapter('bonbons')",
        }),
        (Television = {
            text: "Rien d'autre à faire de toute façon",
            action: "goToChapter('la_television')",
        }),
    ],
};
let chapitre8 = {
    subtitle: "Bonbon",
    text: "Bon, j'y retourne.",
}
let chapitre9 = {
    subtitle: "La télévision",
    text: "Je pourrais éteindre mon cerveau pour quelque heures.",
    img: "../assets/image/chambre.png",
};
let chapitre10 = {
    subtitle: "La porte",
    text: "Peut-être que c'est ma chance aujourd'hui",
    img: "../assets/image/chambre.png",
    options: [
        (extérieur = {
            text: "J'ai un soudain désir de m'en allé",
            action: "goToChapter('la_vie')",
        }),
        (retour = {
            text: "ça ne sert à rien de toute façon",
            action: "goToChapter('la_chambre')",
        }),
    ],
};
let chapitre11 = {
    subtitle: "*silence*",
    text: "Enfin, le délicieux silence de la fin.",
    img: "../assets/image/chambre.png",
    options
}
let chapitre12 = {
    subtitle: "L'extérieur",
    text: "Le soleil m'éblouit, je ne pensais jamais revoir l'extérieur.",
    img: "../assets/image/chambre.png",
}
const chaptersObj = {
    la_chambre: chapitre1,
    le_lit: chapitre2,
    internet: chapitre3,
    reseaux_sociaux: chapitre3_1,
    image_board: chapitre3_2,
    silk_road: chapitre3_3,
    la_cuisine: chapitre4,
    le_couteau: chapitre5,
    le_frigo: chapitre6,
    le_salon: chapitre7,
    bonbons: chapitre8,
    la_television: chapitre9,
    la_porte: chapitre10,
    la_fin: chapitre11,
    la_vie: chapitre12,
};

function goToChapter(chapterName) {

    const chapitre = chapterName;

    console.log(chapitre.subtitle);
    console.log(chapitre.text);
    console.log(chapitre.img);
};

console.log('allo');