console.log("allo");

let candyBought = false;

function buyCandy() {
    candyBought = true;
}

function actionSpecial() {
    if (candyBought == true) {
        goToChapter('le_salon_avec_bonbon');
    } else {
        goToChapter('le_salon_sans_bonbon');
    }
}

const chaptersObj = {

    //la chambre
    la_chambre: {
        subtitle: "La chambre",
        text: "Ma chambre, rien d'autre a faire que dormir et glander devant l'ordi",
        img: "../assets/image/chambre.png",
        options: [
            ({
              text: "ordinateur",
              action: "goToChapter('reseaux_sociaux')",
            }),
            ({
              text: "lit",
              action: "goToChapter('le_lit')",
            }),
            ({
                text: "Allé dans la cuisine",
                action: "goToChapter('la_cuisine')",
            }),
            ({
                text: "Allé dans le salon",
                action: "actionSpecial()",
            }),
          ],
    },

    le_lit: {
        subtitle: "Le lit",
        text: "Je suis tellement fatigué. Peut-être devrais-je m'étendre un petit peu",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "dormir",
                action: "goToChapter('dormir')",
            }),
        ],
    },

    dormir: {
        subtitle: "Faites de beaux rêves",
        text: "Une autre journée bien satisfesante...",
        img: "",
        options: [
            ({
                text: "continuer",
                action: "goToChapter('la_chambre')",
            })
        ]
    },

    // internet

    reseaux_sociaux: {
        subtitle: "reseaux sociaux",
        text: "Une toile d'objet superficiel entrelacé de pub",
        img: "",
        options: [
            ({
                text: "image board",
                action: "goToChapter('image_board')",
            }),
            ({
                text: "silk road",
                action: "goToChapter('silk_road')",
            }),
            ({
                text: "retour",
                action: "goToChapter('la_chambre')",
            }),
        ],
    },

    image_board: {
        subtitle: "image board",
        text: "",
        img: "",
        options: [
            ({
                text: "reseaux sociaux",
                action: "goToChapter('reseaux_sociaux')",
            }),
            ({
                text: "silk road",
                action: "goToChapter('silk_road')",
            }),
            ({
                text: "retour",
                action: "goToChapter('la_chambre')",
            }),
        ],
    },

    silk_road: {
        subtitle: "silk road",
        text: "",
        img: "",
        options: [
            ({
                text: "reseaux sociaux",
                action: "goToChapter('reseaux_sociaux')",
            }),
            ({
                text: "image board",
                action: "goToChapter('image_board')",
            }),
            ({
                text: "retour",
                action: "goToChapter('la_chambre')",
            }),
            // action spécial
            ({
                text: "acheter des bonbons",
                action: "buyCandy()",
            }),
        ],
    },

    // la cuisine

    la_cuisine: {
        subtitle: "La cuisine",
        text: "Peut-être que je devrais manger un petit quelque chose, mais en même temps je n'ai pas très faim.",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "Utiliser le couteau",
                action: "goToChapter('le_couteau')",
            }),
            ({
                text: "frigo",
                action: "goToChapter('le_frigo')"
            }),
            ({
                text: "aller dans le salon",
                action: "actionSpecial()",
            }),
            ({
                text: "retourner dans la chambre",
                action: "goToChapter('la_chambre')",
            }),
        ],
    },

    le_couteau: {
        subtitle: "Le couteau",
        text: "Est-ce que ce serait vraiment l'heure?",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "Du calme, c'est bientot finit",
                action: "goToChapter('la_fin')"
            }),
        ],
    },

    // mini-jeu du frigo

    le_frigo: {
        subtitle: "Le frigo",
        text: "Je devrais peut-être manger? mais en même temps je n'ai tellement pas faim",
        img: "../assets/image/chambre.png",
        options: [
            // le joueur devrait pouvoir prendre de la nourriture
            // chaque option est un aliment 
            // le joueur a un meter et lorsqu'il atteint 0
            // le personnage vomit et se réveille dans la chambre
        ],
    },

    vomi: {
        subtitle: "BEEEUUUUAAARRRGGH!!!!!",
        text: "J'ai encore trop mangé...",
        img: "",
        options: [
            ({
                text: "continuer",
                action: "goToChapter('la_chambre')",
            }),
        ],
    },

    // le salon

    le_salon_sans_bonbon: {
        subtitle: "Le salon1",
        text: "Encore une bonne opportunitée de perdre du temps",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "Regarder la télévision",
                action: "goToChapter('canal_nouvelle')",
            }),
            ({
                text: "aller dans la cuisine",
                action: "goToChapter('la_cuisine')",
            }),
            ({
                text: "aller dans la chambre",
                action: "goToChapter('la_chambre')",
            }),
        ],
    },

    le_salon_avec_bonbon: {
        subtitle: "Le salon",
        text: "Encore une bonne opportunitée de perdre du temps",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "Manger des bonbons",
                action: "goToChapter('bonbon')",
            }),
            ({
                text: "Regarder la télévision",
                action: "goToChapter('canal_nouvelle')",
            }),
            ({
                text: "aller dans la cuisine",
                action: "goToChapter('la_cuisine')",
            }),
            ({
                text: "aller dans la chambre",
                action: "goToChapter('la_chambre')",
            }),
        ],
    },

    // trip

    bonbon: {
        subtitle: "Bonbon",
        text: "Bon, j'y retourne.",
        img: "",
        options: [
            ({
                text: "continuer",
                action: "",
            }),
            ({
                text: "mourrir",
                action: "goToChapter('la_fin')",
            }),
        ],
    },

    salon_trip: {
        subtitle: "salon",
        text: "",
        img: "",
        options: [
            ({
                text: "aller dans la chambre",
                action: "goToChapter('chambre_trip')",
            }),
            ({
                text: "aller dans la cuisine",
                action: "goToChapter('couloir_trip')",
            }),
            ({
                text: "regarder la télé",
                action: "goToChapter('télé_trip')",
            }),
        ],
    },

    chambre_trip: {
        subtitle: "la chambre",
        text: "",
        img: "",
        options: [

        ],
    },

    couloir_trip: {
        subtitle: "couloir",
        text: "",
        img: "",
        options: [

        ],
    },

    souvenir_un: {
        subtitle: "la plage",
        text: "c'est la plage ou j'allais tout les étés avec mes parents et ma soeur",
        img: "",
        options: [
            ({
                text: "zap",
                action: "goToChapter('souvenir_deux')",
            }),
            ({
                text: "arreter de regarder la télé",
                action: "goToChapter('salon_trip')",
            }),
        ],
    },

    souvenir_deux: {
        subtitle: "randonné",
        text: "ma premiere sortie avec la femme de ma vie, probablement la plus belle journée de ma vie...",
        img: "",
        options: [
            ({
                text: "zap",
                action: "goToChapter('souvenir_trois')",
            }),
            ({
                text: "arreter de regarder la télé",
                action: "goToChapter('salon_trip')",
            }),
        ],
    },

    souvenir_trois: {
        subtitle: "la journée de mon marriage",
        text: "tout était si merveilleux...",
        img: "",
        options: [
            ({
                text: "zap",
                action: "goToChapter('souvenir_quatre')",
            }),
            ({
                text: "arreter de regarder la télé",
                action: "goToChapter('salon_trip')",
            }),
        ],
    },

    souvenir_quatre: {
        subtitle: "graduation",
        text: "ma graduation de l'école d'architecture",
        img: "",
        options: [
            ({
                text: "zap",
                action: "goToChapter('souvenir_cinq')",
            }),
            ({
                text: "arreter de regarder la télé",
                action: "goToChapter('salon_trip')",
            }),
        ],
    },

    souvenir_cinq: {
        subtitle: ""
    }



    // tv

    la_television: {
        subtitle: "La télévision",
        text: "Je pourrais éteindre mon cerveau pour quelque heures.",
        img: "../assets/image/chambre.png",
    },

    canal_nouvelle: {
        subtitle: "les nouvelles",
        text: "",
        img: "",
        options: [
            ({
                text: "zap",
                action: "goToChapter('canal_nature')",
            }),
            ({
                text: "arreter de regarder la télé",
                action: "actionSpecial()",
            }),
        ],
    },

    canal_nature: {
        subtitle: "canal nature",
        text: "wow, la nature...",
        img: "",
        options: [
            ({
                text: "zap",
                action: "goToChapter('canal_cartoon')",
            }),
            ({
                text: "arreter de regarder la télé",
                action: "actionSpecial()",
            }),
        ]
    },

    canal_cartoon: {
        subtitle: "cartoon network",
        text: "",
        img: "",
        options: [
            ({
                text: "zap",
                action: "goToChapter('canal_reality')",
            }),
            ({
                text: "arreter de regarder la télé",
                action: "actionSpecial()",
            }),
        ],
    },

    canal_reality: {
        subtitle: "a reality show",
        text: "",
        options: [
            ({
                text: "zap",
                action: "goToChapter('canal_nouvelle')",
            }),
            ({
                text: "arreter de regarder la télé",
                action: "actionSpecial()",
            }),
        ],
    },


    // vers la fin

    la_porte: {
        subtitle: "La porte",
        text: "Peut-être que c'est ma chance aujourd'hui",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "Sortir de la maison",
                action: "goToChapter('la_vie')",
            }),
            ({
                text: "Allé",
                action: "goToChapter('la_chambre')",
            }),
        ],
    },

    //fin

    la_fin: {
        subtitle: "*silence*",
        text: "Enfin, le délicieux silence de la fin.",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "partie terminé",
                action: "goToChapter('partie_terminée')",
            }),
        ],
    },

    partie_terminée: {
        subtitle: "partie terminée",
        text: "Merci d'avoir joué à ce jeu",
        img: "",
    },

    exterieur: {
        subtitle: "L'extérieur",
        text: "Le soleil m'éblouit, je ne pensais jamais revoir l'extérieur.",
        img: "../assets/image/chambre.png",
    }

};

function goToChapter(chapterName) {

    const chapitre = chaptersObj[chapterName];
    console.log(chapitre);

    document.querySelector('.titre_chapitre').textContent = chapitre.subtitle;
    document.querySelector('.texte').textContent = chapitre.text;
    document.querySelector('.image').src = chapitre.img;

    let barreOption = document.querySelector('.barre_option');
    let optionsArr = chapitre.options;

    let element = ""; 

    for (let index = 0; index < optionsArr.length; index++) {
        console.log(optionsArr[index].text);
        element += `<button onclick="${optionsArr[index].action}">${optionsArr[index].text}</button>`; 
        }
    barreOption.innerHTML = element;
};

goToChambre('la_chambre');