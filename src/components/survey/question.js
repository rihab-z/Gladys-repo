import {responses} from './responses'



const json = {
    "title": "GLADYS",
    "logoPosition" : "right",
    
    elements : [
    {
        type: "boolean",
        name: "question1",
        title: "Votre enfant transforme l’image de la lettre : h/k, o/e, a/o, t/f.",
        resNumb : 1,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question2",
        title: "Il inverse l’orientation de la lettre : b/d, u/n, p/q",
        resNumb : 1,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question3",
        title: "Il ne respecte pas la place de la lettre dans le mot : niche/chien, porche/proche.",
        resNumb : 1,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question4",
        title: "Il peut lire et relire de nombreuses fois, une phrase ou même un paragraphe sans le comprendre.",
        resNumb : 1,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question5",
        title: "Il a des difficultés pour comprendre un texte et le reformuler.",
        resNumb : 1,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question6",
        title: "Votre enfant a des difficultés en orthograph. ",
        resNumb : 2,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question7",
        title: "Il écrit souvent comme il entend, sans tenir compte de l’orthographe.",
        resNumb : 2,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question8",
        title: "Il a des difficultés à séparer correctement les mots les uns des autres.",
        resNumb : 2,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question9",
        title: "Votre enfant n’a pas intégré les notions courantes telles que sur/sous, devant/derrière, avant/ après, en haut/en bas, entre, à côté, etc.",
        resNumb : 3,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question10",
        title: "Il a des difficultés à associer des gestes avec des mots ou un enchainement de mots.",
        resNumb : 3,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question11",
        title: "Il a des difficultés à former une phrase, à élaborer une production écrite.",
        resNumb : 3,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question12",
        title: "Votre enfant transforme l’image de la lettre : h/k, o/e, a/o, t/f ",
        resNumb : 4,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question13",
        title: "Il confonds la droite et  la gauche.",
        resNumb : 4,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question14",
        title: "Il a des difficultés d’organisation : trouver ses objets, intégrer les rituels de classe (ranger ses feuilles, rendre spontanément son travail, faire son emploi, ranger les pantoufles, prendre son sac de gym, etc.).",
        resNumb : 4,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question15",
        title: "L'enfant a du mal à se relire. ",
        resNumb : 5,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question16",
        title: "Il peut confondre les nombres tels que 35 et  53.",
        resNumb : 6,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question17",
        title: "Il inverse les chiffres et les nombres (6/9, 12/21), confond des signes (> <...).",
        resNumb : 6,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question18",
        title: "Il rencontre des problèmes au niveau de la compréhension des consignes, des règles d’un jeu, des schémas, des tableaux.",
        resNumb : 6,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question19",
        title: "Il a des difficultés à apprendre les tables de multiplication.",
        resNumb : 6,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question20",
        title: "Il ne reconnaît pas les formes géométriques.",
        resNumb : 6,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    },
    {
        type: "boolean",
        name: "question21",
        title: "Il rencontre des problèmes au niveau de la compréhension des consignes, des règles d’un jeu, des schémas, des tableaux.",
        resNumb : 6,
        isRequired: true,
        labelTrue: "Non",
        labelFalse: "Oui"
    }
    ],
    "visible": false
    
    
}


export default json;