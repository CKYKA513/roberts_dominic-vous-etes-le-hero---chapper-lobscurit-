

const chaptersObj = {

    //la chambre
    // img: chambre_2.jpg
    la_chambre: {
        subtitle: "La chambre",
        text: "Ma chambre, rien d'autre a faire que dormir et glander devant l'ordi",
        img: "assets/image/chambre_2.jpg",
        options: [
            {
              text: "ordinateur",
              action: "goToChapter('reseaux_sociaux')",
            },
            {
              text: "lit",
              action: "goToChapter('le_lit')",
            },
            {
                text: "Allé dans la cuisine",
                action: "goToChapter('la_cuisine')",
            },
            {
                text: "Allé dans le salon",
                action: "actionSpecialBonbon()",
            },
          ],
    },

    // img: noir.png
    le_lit: {
        subtitle: "Le lit",
        text: "Je suis tellement fatigué. Peut-être devrais-je m'étendre un petit peu",
        img: "assets/image/noir.png",
        options: [
            {
                text: "dormir",
                action: "goToChapter('dormir')",
            },
        ],
    },

    // img: noir.png
    dormir: {
        subtitle: "Faites de beaux rêves",
        text: "Une autre journée bien satisfesante...",
        img: "assets/image/noir.png",
        options: [
            {
                text: "continuer",
                action: "goToChapter('la_chambre')",
            }
        ]
    },

    // internet

    // img: reseaux_sociaux.png
    reseaux_sociaux: {
        subtitle: "reseaux sociaux",
        text: "Une toile d'objet superficiel entrelacé de pub",
        img: "assets/image/reseaux_sociaux.png",
        options: [
            {
                text: "image board",
                action: "goToChapter('image_board')",
            },
            {
                text: "silk road",
                action: "goToChapter('silk_road')",
            },
            {
                text: "retour",
                action: "goToChapter('la_chambre')",
            },
        ],
    },

    // img: image_board.jpg
    image_board: {
        subtitle: "image board",
        text: "",
        img: "assets/image/image_board.jpg",
        options: [
            {
                text: "reseaux sociaux",
                action: "goToChapter('reseaux_sociaux')",
            },
            {
                text: "silk road",
                action: "goToChapter('silk_road')",
            },
            {
                text: "retour",
                action: "goToChapter('la_chambre')",
            },
        ],
    },

    // img: silk_road.jpg
    silk_road: {
        subtitle: "silk road",
        text: "",
        img: "assets/image/silk_road.jpg",
        options: [
            {
                text: "reseaux sociaux",
                action: "goToChapter('reseaux_sociaux')",
            },
            {
                text: "image board",
                action: "goToChapter('image_board')",
            },
            {
                text: "retour",
                action: "goToChapter('la_chambre')",
            },
            // action spécial
            {
                text: "acheter des bonbons",
                action: "buyCandy()",
            },
        ],
    },

    // la cuisine
    // img: cuisine.jpg
    la_cuisine: {
        subtitle: "La cuisine",
        text: "Peut-être que je devrais manger un petit quelque chose, mais en même temps je n'ai pas très faim.",
        img: "assets/image/cuisine.jpg",
        options: [
            {
                text: "Utiliser le couteau",
                action: "goToChapter('le_couteau')",
            },
            {
                text: "frigo",
                action: "goToChapter('le_frigo')"
            },
            {
                text: "aller dans le salon",
                action: "actionSpecialBonbon()",
            },
            {
                text: "retourner dans la chambre",
                action: "goToChapter('la_chambre')",
            },
        ],
    },

    // img: couteau.jpg
    le_couteau: {
        subtitle: "Le couteau",
        text: "Est-ce que ce serait vraiment l'heure?",
        img: "assets/image/couteau.jpg",
        options: [
            {
                text: "Du calme, c'est bientot finit",
                action: "goToChapter('la_fin')"
            },
        ],
    },

    // mini-jeu du frigo

    // img: fridge.jpg
    le_frigo: {
        subtitle: "Le frigo",
        text: "Je devrais peut-être manger? mais en même temps je n'ai tellement pas faim",
        img: "assets/image/fridge.jpg",
        options: [
            {
                text: "doctor peper",
                action: "",
            },
            {
                text: "saucisson",
                action: "",
            },
            {
                text: "soda",
                action: "",
            },
            {
                text: "restant",
                action: "",
            },
            {
                text: "laitue",
                action: "",
            },
            {
                text: "pain",
                action: "",
            },
            {
                text: "retour",
                action: "goToChapter('la_cuisine')",
            },

            // le joueur devrait pouvoir prendre de la nourriture
            // chaque option est un aliment
            // le joueur a un meter et lorsqu'il atteint 0
            // le personnage vomit et se réveille dans la chambre
        ],
    },

    // img: vomi.jpg
    vomi: {
        subtitle: "BEEEUUUUAAARRRGGH!!!!!",
        text: "J'ai encore trop mangé...",
        img: "assets/image/vomi.jpg",
        options: [
            {
                text: "continuer",
                action: "goToChapter('la_chambre')",
            },
        ],
    },

    // le salon
    // img: salon_3.jpg
    le_salon_sans_bonbon: {
        subtitle: "Le salon sans bonbon",
        text: "Encore une bonne opportunitée de perdre du temps",
        img: "assets/image/salon_3.jpg",
        options: [
            {
                text: "Regarder la télévision",
                action: "goToChapter('canal_nouvelle')",
            },
            {
                text: "aller dans la cuisine",
                action: "goToChapter('la_cuisine')",
            },
            {
                text: "aller dans la chambre",
                action: "goToChapter('la_chambre')",
            },
        ],
    },

    // img: salon_3.jpg
    le_salon_avec_bonbon: {
        subtitle: "Le salon avec bonbon",
        text: "Encore une bonne opportunitée de perdre du temps",
        img: "assets/image/salon_3.jpg",
        options: [
            {
                text: "Manger des bonbons",
                action: "goToChapter('bonbon')",
            },
            {
                text: "Regarder la télévision",
                action: "goToChapter('canal_nouvelle')",
            },
            {
                text: "aller dans la cuisine",
                action: "goToChapter('la_cuisine')",
            },
            {
                text: "aller dans la chambre",
                action: "goToChapter('la_chambre')",
            },
        ],
    },

    // trip

    // img: bonbon.jpg
    bonbon: {
        subtitle: "Bonbon",
        text: "Bon, j'y retourne.",
        img: "assets/image/bonbon.jpg",
        options: [
            {
                text: "continuer",
                action: "goToChapter('salon_trip')",
            },
            {
                text: "mourrir",
                action: "goToChapter('la_fin')",
            },
        ],
    },

    // img: salon_3.jpg
    salon_trip: {
        subtitle: "salon",
        text: "je me sent étrange",
        img: "assets/image/salon_3.jpg",
        options: [
            {
                text: "aller dans la chambre",
                action: "goToChapter('chambre_trip')",
            },
            {
                text: "aller dans la cuisine",
                action: "goToChapter('couloir_trip')",
            },
            {
                text: "regarder la télé",
                action: "goToChapter('télé_trip')",
            },
        ],
    },

    // img: chambre_2.jpg
    chambre_trip: {
        subtitle: "la chambre",
        text: "je ressens la force de ma détresse",
        img: "assets/image/chambre_2.jpg",
        options: [
            {
                text: "ordinateur",
                action: "goToChapter('ordinateur_trip')",
            },
            {
                text: "allé se coucher",
                action: "goToChapter('lit_trip')",
            },
            
        ],
    },

    // no-finito start

    ordinateur_trip: {
        subtitle: "ordinateur",
        text: "",
        image: "",
    },

    // end

    // img: noir.png
    lit_trip: {
        subtitle: "quoi faire?",
        text: "je ne sais plus lequel est mieux...",
        img: "assets/image/noir.png",
        options: [
            {
                text: "dormir",
                action: "goToChapter('la_chambre')",
            },
            {
                text: "se laisser mourrir",
                action: "goTochapter('la_fin')",
            },
        ],
    },

    // img: couloir.jpg
    couloir_trip: {
        subtitle: "couloir",
        text: "je ne me rappel pas que mon appartement soit si grand.",
        img: "assets/image/couloir.jpg",
        options: [
            {
                text: "continuer",
                action: "",
            },
            {
                text: "reculer",
                action: "salon_trip",
            },
        ],
    },

//  inconscient

    // img: plaine.jpg
    plaine: {
        subtitle: "je suis perdue",
        text: "",
        img: "assets/image/plaine.jpg",
        options: [
            {
                text: "continuer",
                action: "gToChapter('horizon')",
            },
            {
                text: "s'arrêter",
                action: "goToChapter('la_table')",
            },
        ],
    },

    // no-finito start

    la_table: {
        subtitle: "",
    },

    horizon: {
        subtitle: "",
    },

    // end

//  souvenir tv

    // video: plage.mp4
    souvenir_un: {
        subtitle: "la plage",
        text: "c'est la plage ou j'allais tout les étés avec mes parents et ma soeur",
        video: "assets/image/plage.mp4",
        options: [
            {
                text: "zap",
                action: "goToChapter('souvenir_deux')",
            },
            {
                text: "arreter de regarder la télé",
                action: "goToChapter('salon_trip')",
            },
        ],
    },

    // video: rando.mp4
    souvenir_deux: {
        subtitle: "randonné",
        text: "ma premiere sortie avec la femme de ma vie, probablement la plus belle journée de ma vie...",
        video: "assets/image/rando.mp4",
        options: [
            {
                text: "zap",
                action: "goToChapter('souvenir_trois')",
            },
            {
                text: "arreter de regarder la télé",
                action: "goToChapter('salon_trip')",
            },
        ],
    },

    // video: graduation.mp4
    souvenir_trois: {
        subtitle: "graduation",
        text: "ma graduation de l'école d'architecture",
        video: "assets/image/graduation.mp4",
        options: [
            {
                text: "zap",
                action: "goToChapter('souvenir_quatre')",
            },
            {
                text: "arreter de regarder la télé",
                action: "goToChapter('salon_trip')",
            },
        ],
    },

    // video: marriage.mp4
    souvenir_quatre: {
        subtitle: "la journée de mon marriage",
        text: "tout était si merveilleux...",
        video: "assets/image/marriage.mp4",
        options: [
            {
                text: "zap",
                action: "goToChapter('souvenir_un')",
            },
            {
                text: "arreter de regarder la télé",
                action: "goToChapter('salon_trip')",
            },
        ],
    },

    // tv

    // img: news.gif
    canal_nouvelle: {
        subtitle: "les nouvelles",
        text: "toujours du négatif",
        video: "assets/image/news.mp4",
        options: [
            {
                text: "zap",
                action: "goToChapter('canal_nature')",
            },
            {
                text: "arreter de regarder la télé",
                action: "actionSpecialBonbon()",
            },
        ],
    },

    // video: nature.mp4
    canal_nature: {
        subtitle: "canal nature",
        text: "wow, la nature...",
        video: "assets/image/nature.mp4",
        options: [
            {
                text: "zap",
                action: "goToChapter('canal_cartoon')",
            },
            {
                text: "arreter de regarder la télé",
                action: "actionSpecialBonbon()",
            },
        ]
    },

    // video: cartoon.mp4
    canal_cartoon: {
        subtitle: "cartoon network",
        text: "",
        video: "assets/image/cartoon.mp4",
        options: [
            {
                text: "zap",
                action: "goToChapter('canal_reality')",
            },
            {
                text: "arreter de regarder la télé",
                action: "actionSpecialBonbon()",
            },
        ],
    },

    // video: reality.mp4
    canal_reality: {
        subtitle: "a reality show",
        text: "",
        video: "assets/image/reality.mp4",
        options: [
            {
                text: "zap",
                action: "goToChapter('canal_nouvelle')",
            },
            {
                text: "arreter de regarder la télé",
                action: "actionSpecialBonbon()",
            },
        ],
    },


    // vers la fin

    // img: porte.jpg
    la_porte: {
        subtitle: "La porte",
        text: "Peut-être que c'est ma chance aujourd'hui",
        img: "assets/image/porte.jpg",
        options: [
            {
                text: "Sortir de la maison",
                action: "goToChapter('la_vie')",
            },
            {
                text: "Allé",
                action: "goToChapter('la_chambre')",
            },
        ],
    },

    //fin

    // img: noir.jpg
    la_fin: {
        subtitle: "*silence*",
        text: "Enfin, le délicieux silence de la fin.",
        img: "assets/image/noir.jpg",
        options: [
            {
                text: "partie terminé",
                action: "goToChapter('partie_terminée')",
            },
        ],
    },

    // img: noir.jpg
    partie_terminée: {
        subtitle: "partie terminée",
        text: "Merci d'avoir joué à ce jeu",
        img: "assets/image/noir.jpg",
    },


    exterieur: {
        subtitle: "L'extérieur",
        text: "Le soleil m'éblouit, je ne pensais jamais revoir l'extérieur.",
        img: "assets/image/chambre.png",
    }

};

let body = document.querySelector('body');

let chapitreNom = localStorage.getItem('chapterName');

let bonbonAchete = localStorage.getItem('candy_bought');

document.addEventListener('DOMContentLoaded', function() {
    if (chapitreNom != undefined) {
        goToChapter(chapitreNom);
    };
    if (bonbonAchete != undefined) {
        candyBought = true;
    };
});

let candyBought = false;

function buyCandy() {
    candyBought = true;
    localStorage.setItem('candy_bought', candyBought);
    const sfx = new Audio('assets/mp3/sound_effect.wav');
    sfx.play();
}

function actionSpecialBonbon() {
    if (candyBought == true) {
        goToChapter('le_salon_avec_bonbon');
    } else {
        goToChapter('le_salon_sans_bonbon');
    }
    
    const sfx = new Audio('assets/mp3/sound_effect.wav');
    sfx.play();
}

function goToChapter(chapterName) {
    let titreChapitre = document.querySelector('.titre_chapitre');

    const chapitre = chaptersObj[chapterName];

    titreChapitre.textContent = chapitre.subtitle;
    document.querySelector('.texte').textContent = chapitre.text;
    // document.querySelector('.image').src = chapitre.img;

    let barreOption = document.querySelector('.barre_option');
    let optionsArr = chapitre.options;

    let element = "";

    for (let index = 0; index < optionsArr.length; index++) {
        element += `<button onclick="${optionsArr[index].action}">${optionsArr[index].text}</button>`;
        }
    barreOption.innerHTML = element;

    let imgDiv = document.querySelector('.img');

    if (chapitre.video != undefined) {
        element = `<video src="${chapitre.video}" class="video" autoplay loop muted></video>`;
        imgDiv.innerHTML = element;
    }
    if (chapitre.img != undefined) {
        element = `<img class="image" src="${chapitre.img}" alt="image">`;
        imgDiv.innerHTML = element;
    }

    const sfx = new Audio('assets/mp3/sound_effect.wav');
    sfx.play();

    localStorage.setItem('chapterName', chapterName);
    console.log(localStorage.getItem('chapterName'));
};
goToChapter('la_chambre');