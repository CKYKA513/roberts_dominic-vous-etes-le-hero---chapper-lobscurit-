console.log("allo");


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
                action: "goToChapter('le_salon')",
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
                action: "goToChamber('la_chambre')",
            })
        ]
    },

    internet: {
        subtitle: "Internet",
        text: "Wahouuu le web!!!",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "réseaux sociaux",
                action: "goToChapter('reseaux_sociaux')",
            }),
            ({
                text: "image board",
                action: "goToChapter('image_board')",
            }),
            ({
                text: "silk road",
                action: "goToChapter('silk_road')",
            }),
        ],
    },

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
                action: "goToChapter('"
            })
        ],
    },

    image_board: {
        subtitle: "image board",
    },

    silk_road: {
        subtitle: "silk road",
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
                text: "retourner dans la chambre",
                action: "goToChapter('la_chambre')",
            })
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

    le_frigo: {
        subtitle: "Le frigo",
        text: "Je devrais peut-être manger? mais en même temps je n'ai tellement pas faim",
        img: "../assets/image/chambre.png",
    },

    // le salon
    le_salon: {
        subtitle: "Le salon",
        text: "Encore une bonne opportunitée de perdre du temps",
        img: "../assets/image/chambre.png",
        options: [
            ({
                text: "Manger des bonbons",
                action: "goToChapter('bonbons')",
            }),
            ({
                text: "Regarder la télévision",
                action: "goToChapter('la_television')",
            }),
        ],
    },

    bonbon: {
        subtitle: "Bonbon",
        text: "Bon, j'y retourne.",
    },

    la_television: {
        subtitle: "La télévision",
        text: "Je pourrais éteindre mon cerveau pour quelque heures.",
        img: "../assets/image/chambre.png",
    },

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

    let button = document.querySelectorAll('button');
    let barreOption = document.querySelector('.barre_option');
    let optionsArr = chapitre.options;
    console.log(optionsArr[0].action);
    const addButton = document.createElement("button");
    console.log(optionsArr.length);

    let element = ""; 

    for (let index = 0; index < optionsArr.length; index++) {
        // optionsArr[index].appendChild(addButton);

        console.log(optionsArr[index].text);
        element = `<button onclick="(${optionsArr[index].action})>${optionsArr[index].text}</button>`; 
        }

    barreOption.innerHTML = element;


    // console.log(optionsArr.length);

    // let optionsNbr = optionsArr.length;
    // console.log(optionsNbr);



    // console.log(optionsArr[0].text);

    // console.log(optionsArr[0]);
    // let option1 = optionsArr[0];
    // document.querySelector('.boutton1') = option1.text;
    // console.log(optionsArr[1]);
    // console.log(optionsArr[2]);

    // boutton1.textContent = optionsArr[1];
    // boutton2.textContent = optionsArr[2];
    // boutton3.textContent = optionsArr[3];

    // if (optionsNbr == 4) {
    //     document.querySelector('barre_option').appendChild(button);
    // } 
        // let whichNbr = Number(which);
        // console.log(whichNbr);
        // console.log(typeof whichNbr);
    // }
    
    
    

};