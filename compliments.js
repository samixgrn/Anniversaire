<<<<<<< HEAD
const compliments = [
    "Tu es magnifique",
    "Ton sourire illumine ma journée",
    "Tu as des yeux incroyables",
    "Tu es douce",
    "Tu es attentionnée",
    "Tu es drôle",
    "Tu es intelligente",
    "Tu es élégante",
    "Tu es adorable",
    "Tu es charmante",
    "Tu es unique",
    "Tu as un cœur en or",
    "Tu es inspirante",
    "Tu es pleine de vie",
    "Tu es incroyable",
    "Tu es captivante",
    "Tu es naturelle et belle",
    "Tu es sincère",
    "Tu es chaleureuse",
    "Tu es rassurante",
    "Tu es talentueuse",
    "Tu es brillante",
    "Tu es spéciale",
    "Tu es exceptionnelle",
    "Tu es magnifique quand tu souris",
    "Tu es magnifique quand tu ris",
    "Tu es rayonnante",
    "Tu es fascinante",
    "Tu es tendre",
    "Tu es douce avec les autres",
    "Tu es pleine de gentillesse",
    "Tu es forte",
    "Tu es courageuse",
    "Tu es sensible",
    "Tu es créative",
    "Tu es drôle sans essayer",
    "Tu es incroyable à écouter",
    "Tu es très stylée",
    "Tu es magnifique même sans maquillage",
    "Tu es incroyable quand tu es passionnée",
    "Tu es lumineuse",
    "Tu es adorable quand tu es timide",
    "Tu es élégante sans effort",
    "Tu es un vrai rayon de soleil",
    "Tu es fantastique",
    "Tu es magique",
    "Tu es merveilleuse",
    "Tu es incroyable à aimer",
    "Tu es incroyable à comprendre les autres",
    "Tu es rassurante",
    "Tu es mon bonheur",
    "Tu es mon sourire préféré",
    "Tu es mon endroit préféré",
    "Tu es mon moment préféré",
    "Tu es ma personne préférée",
    "Tu es mon calme",
    "Tu es mon bonheur quotidien",
    "Tu es mon rayon de soleil",
    "Tu es mon trésor",
    "Tu es mon rêve devenu réalité",
    "Tu es la plus belle à mes yeux",
    "Tu es parfaite à ta façon",
    "Tu es incroyable dans tout ce que tu fais",
    "Tu es douce quand tu parles",
    "Tu es magnifique aujourd’hui",
    "Tu es magnifique tous les jours",
    "Tu es irrésistible",
    "Tu es captivante quand tu parles",
    "Tu es incroyable quand tu es heureuse",
    "Tu es adorable quand tu ris",
    "Tu es incroyable quand tu es toi-même",
    "Tu es un vrai cadeau",
    "Tu es extraordinaire",
    "Tu es adorable quand tu me regardes",
    "Tu es merveilleuse dans les petits moments",
    "Tu es une personne incroyable",
    "Tu es une femme exceptionnelle",
    "Tu es une belle âme",
    "Tu es un bonheur dans ma vie",
    "Tu es la meilleure chose qui me soit arrivée",
    "Tu es une belle surprise dans ma vie",
    "Tu es mon bonheur préféré",
    "Tu es ma chance",
    "Tu es ma fierté",
    "Tu es ma douceur",
    "Tu es ma lumière",
    "Tu es ma joie",
    "Tu es mon sourire",
    "Tu es mon amour",
    "Tu es mon cœur",
    "Tu es mon bonheur constant",
    "Tu es mon rêve",
    "Tu es ma plus belle rencontre",
    "Tu es mon plus beau hasard",
    "Tu es la personne qui me comprend le mieux",
    "Tu es la personne qui me fait le plus sourire",
    "Tu es la personne qui me rend heureux",
    "Tu es la personne que j’admire",
    "Tu es la personne que je respecte",
    "Tu es la personne que j’aime le plus",
    "Tu es tout simplement incroyable",
    "Tu es unique au monde",
    "Tu es irremplaçable",
    "Tu es la plus belle personne que je connaisse",
    "Tu es la plus belle femme à mes yeux",
    "Tu es la personne qui rend ma vie meilleure",
    "Tu es mon bonheur pour toujours",
    "Tu es tout pour moi",
    "Tu es l’amour de ma vie"
];

const reasons = [
    "Parce que tu me fais sourire",
    "Parce que tu me rends heureux",
    "Parce que tu es toujours là pour moi",
    "Parce que tu as un cœur incroyable",
    "Parce que tu me comprends",
    "Parce que tu me soutiens",
    "Parce que tu crois en moi",
    "Parce que tu me motives",
    "Parce que tu me rends meilleur",
    "Parce que tu me fais rire",
    "Parce que tu as un sourire magnifique",
    "Parce que tu as un rire contagieux",
    "Parce que tu as des yeux magnifiques",
    "Parce que tu rends chaque moment spécial",
    "Parce que tu es douce avec moi",
    "Parce que tu es attentionnée",
    "Parce que tu es gentille",
    "Parce que tu es sincère",
    "Parce que tu es honnête",
    "Parce que tu es drôle sans essayer",
    "Parce que tu es intelligente",
    "Parce que tu es forte",
    "Parce que tu es courageuse",
    "Parce que tu es unique",
    "Parce que tu es différente des autres",
    "Parce que tu me rassures quand ça ne va pas",
    "Parce que tu me donnes confiance en moi",
    "Parce que tu me fais sentir aimé",
    "Parce que tu me fais sentir important",
    "Parce que tu me fais sentir spécial",
    "Parce que tu es belle",
    "Parce que tu es magnifique",
    "Parce que tu es naturelle",
    "Parce que tu es élégante",
    "Parce que tu es adorable",
    "Parce que tu es pleine de vie",
    "Parce que tu es inspirante",
    "Parce que tu es passionnée",
    "Parce que tu me fais découvrir de nouvelles choses",
    "Parce que tu me fais rêver",
    "Parce que tu me fais espérer",
    "Parce que tu es mon bonheur",
    "Parce que tu es mon calme",
    "Parce que tu es mon refuge",
    "Parce que tu es mon sourire quotidien",
    "Parce que tu es ma joie",
    "Parce que tu es mon soleil",
    "Parce que tu illumines mes journées",
    "Parce que tu es mon endroit préféré",
    "Parce que tu es ma personne préférée",
    "Parce que tu es mon moment préféré de la journée",
    "Parce que tu es ma plus belle rencontre",
    "Parce que tu es mon plus beau hasard",
    "Parce que tu es la meilleure chose qui me soit arrivée",
    "Parce que tu me fais sentir vivant",
    "Parce que tu me fais sentir complet",
    "Parce que tu me fais sentir chanceux",
    "Parce que tu es toujours toi-même",
    "Parce que tu es authentique",
    "Parce que tu es vraie",
    "Parce que tu es simple et sincère",
    "Parce que tu es incroyable",
    "Parce que tu es merveilleuse",
    "Parce que tu es exceptionnelle",
    "Parce que tu es unique au monde",
    "Parce que tu es irremplaçable",
    "Parce que tu es mon rêve devenu réalité",
    "Parce que tu es mon présent",
    "Parce que tu es mon avenir",
    "Parce que tu es mon amour",
    "Parce que tu es mon cœur",
    "Parce que tu es ma lumière",
    "Parce que tu es ma douceur",
    "Parce que tu es ma fierté",
    "Parce que tu es ma chance",
    "Parce que tu es tout pour moi",
    "Parce que tu me donnes envie d’être meilleur",
    "Parce que tu me donnes envie d’aimer encore plus",
    "Parce que tu me donnes envie de sourire chaque jour",
    "Parce que tu me donnes envie de vivre pleinement",
    "Parce que tu me donnes envie de rêver",
    "Parce que tu me donnes envie d’avancer",
    "Parce que tu me donnes envie de réussir",
    "Parce que tu me donnes envie d’être heureux",
    "Parce que tu es incroyable avec moi",
    "Parce que tu es incroyable avec les autres",
    "Parce que tu es pleine d’amour",
    "Parce que tu es pleine de gentillesse",
    "Parce que tu es pleine de douceur",
    "Parce que tu es pleine de beauté",
    "Parce que tu es pleine de lumière",
    "Parce que tu es pleine de vie",
    "Parce que tu rends ma vie meilleure",
    "Parce que tu rends mes journées plus belles",
    "Parce que tu rends mon monde plus beau",
    "Parce que tu rends tout plus simple",
    "Parce que tu rends tout plus heureux",
    "Parce que tu rends tout plus lumineux",
    "Parce que tu rends tout plus magique",
    "Parce que tu rends mon cœur heureux",
    "Parce que tu me fais sentir en paix",
    "Parce que tu me fais sentir chez moi",
    "Parce que tu me fais sentir complet",
    "Parce que tu es la personne que j’admire",
    "Parce que tu es la personne que je respecte",
    "Parce que tu es la personne qui me comprend le mieux",
    "Parce que tu es la personne que je veux garder dans ma vie",
    "Parce que tu es l’amour de ma vie",
    "Parce que je t’aime tout simplement"
];


/* IMPORTANT : mets la date du premier jour */
const startDate = new Date("2026-03-10");


const today = new Date();


function getDayNumber() {

    const diff = today - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return days;

}


const dayIndex = getDayNumber();


const complimentText = document.getElementById("complimentText");
const reasonText = document.getElementById("reasonText");
const dayCounter = document.getElementById("dayCounter");


if (dayIndex < compliments.length) {

    complimentText.textContent = compliments[dayIndex];

    reasonText.textContent = reasons[dayIndex];

    dayCounter.textContent = "Jour " + (dayIndex + 1) + " / 109";

} else {

    complimentText.textContent = "Plus que quelques jours avant qu'on se retrouve ❤️";

    reasonText.textContent = "";

    dayCounter.textContent = "";

}

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;

    createHeartTrail(e.clientX, e.clientY);
});

let lastHeartTime = 0;

=======
const compliments = [
    "Tu es magnifique",
    "Ton sourire illumine ma journée",
    "Tu as des yeux incroyables",
    "Tu es douce",
    "Tu es attentionnée",
    "Tu es drôle",
    "Tu es intelligente",
    "Tu es élégante",
    "Tu es adorable",
    "Tu es charmante",
    "Tu es unique",
    "Tu as un cœur en or",
    "Tu es inspirante",
    "Tu es pleine de vie",
    "Tu es incroyable",
    "Tu es captivante",
    "Tu es naturelle et belle",
    "Tu es sincère",
    "Tu es chaleureuse",
    "Tu es rassurante",
    "Tu es talentueuse",
    "Tu es brillante",
    "Tu es spéciale",
    "Tu es exceptionnelle",
    "Tu es magnifique quand tu souris",
    "Tu es magnifique quand tu ris",
    "Tu es rayonnante",
    "Tu es fascinante",
    "Tu es tendre",
    "Tu es douce avec les autres",
    "Tu es pleine de gentillesse",
    "Tu es forte",
    "Tu es courageuse",
    "Tu es sensible",
    "Tu es créative",
    "Tu es drôle sans essayer",
    "Tu es incroyable à écouter",
    "Tu es très stylée",
    "Tu es magnifique même sans maquillage",
    "Tu es incroyable quand tu es passionnée",
    "Tu es lumineuse",
    "Tu es adorable quand tu es timide",
    "Tu es élégante sans effort",
    "Tu es un vrai rayon de soleil",
    "Tu es fantastique",
    "Tu es magique",
    "Tu es merveilleuse",
    "Tu es incroyable à aimer",
    "Tu es incroyable à comprendre les autres",
    "Tu es rassurante",
    "Tu es mon bonheur",
    "Tu es mon sourire préféré",
    "Tu es mon endroit préféré",
    "Tu es mon moment préféré",
    "Tu es ma personne préférée",
    "Tu es mon calme",
    "Tu es mon bonheur quotidien",
    "Tu es mon rayon de soleil",
    "Tu es mon trésor",
    "Tu es mon rêve devenu réalité",
    "Tu es la plus belle à mes yeux",
    "Tu es parfaite à ta façon",
    "Tu es incroyable dans tout ce que tu fais",
    "Tu es douce quand tu parles",
    "Tu es magnifique aujourd’hui",
    "Tu es magnifique tous les jours",
    "Tu es irrésistible",
    "Tu es captivante quand tu parles",
    "Tu es incroyable quand tu es heureuse",
    "Tu es adorable quand tu ris",
    "Tu es incroyable quand tu es toi-même",
    "Tu es un vrai cadeau",
    "Tu es extraordinaire",
    "Tu es adorable quand tu me regardes",
    "Tu es merveilleuse dans les petits moments",
    "Tu es une personne incroyable",
    "Tu es une femme exceptionnelle",
    "Tu es une belle âme",
    "Tu es un bonheur dans ma vie",
    "Tu es la meilleure chose qui me soit arrivée",
    "Tu es une belle surprise dans ma vie",
    "Tu es mon bonheur préféré",
    "Tu es ma chance",
    "Tu es ma fierté",
    "Tu es ma douceur",
    "Tu es ma lumière",
    "Tu es ma joie",
    "Tu es mon sourire",
    "Tu es mon amour",
    "Tu es mon cœur",
    "Tu es mon bonheur constant",
    "Tu es mon rêve",
    "Tu es ma plus belle rencontre",
    "Tu es mon plus beau hasard",
    "Tu es la personne qui me comprend le mieux",
    "Tu es la personne qui me fait le plus sourire",
    "Tu es la personne qui me rend heureux",
    "Tu es la personne que j’admire",
    "Tu es la personne que je respecte",
    "Tu es la personne que j’aime le plus",
    "Tu es tout simplement incroyable",
    "Tu es unique au monde",
    "Tu es irremplaçable",
    "Tu es la plus belle personne que je connaisse",
    "Tu es la plus belle femme à mes yeux",
    "Tu es la personne qui rend ma vie meilleure",
    "Tu es mon bonheur pour toujours",
    "Tu es tout pour moi",
    "Tu es l’amour de ma vie"
];

const reasons = [
    "Parce que tu me fais sourire",
    "Parce que tu me rends heureux",
    "Parce que tu es toujours là pour moi",
    "Parce que tu as un cœur incroyable",
    "Parce que tu me comprends",
    "Parce que tu me soutiens",
    "Parce que tu crois en moi",
    "Parce que tu me motives",
    "Parce que tu me rends meilleur",
    "Parce que tu me fais rire",
    "Parce que tu as un sourire magnifique",
    "Parce que tu as un rire contagieux",
    "Parce que tu as des yeux magnifiques",
    "Parce que tu rends chaque moment spécial",
    "Parce que tu es douce avec moi",
    "Parce que tu es attentionnée",
    "Parce que tu es gentille",
    "Parce que tu es sincère",
    "Parce que tu es honnête",
    "Parce que tu es drôle sans essayer",
    "Parce que tu es intelligente",
    "Parce que tu es forte",
    "Parce que tu es courageuse",
    "Parce que tu es unique",
    "Parce que tu es différente des autres",
    "Parce que tu me rassures quand ça ne va pas",
    "Parce que tu me donnes confiance en moi",
    "Parce que tu me fais sentir aimé",
    "Parce que tu me fais sentir important",
    "Parce que tu me fais sentir spécial",
    "Parce que tu es belle",
    "Parce que tu es magnifique",
    "Parce que tu es naturelle",
    "Parce que tu es élégante",
    "Parce que tu es adorable",
    "Parce que tu es pleine de vie",
    "Parce que tu es inspirante",
    "Parce que tu es passionnée",
    "Parce que tu me fais découvrir de nouvelles choses",
    "Parce que tu me fais rêver",
    "Parce que tu me fais espérer",
    "Parce que tu es mon bonheur",
    "Parce que tu es mon calme",
    "Parce que tu es mon refuge",
    "Parce que tu es mon sourire quotidien",
    "Parce que tu es ma joie",
    "Parce que tu es mon soleil",
    "Parce que tu illumines mes journées",
    "Parce que tu es mon endroit préféré",
    "Parce que tu es ma personne préférée",
    "Parce que tu es mon moment préféré de la journée",
    "Parce que tu es ma plus belle rencontre",
    "Parce que tu es mon plus beau hasard",
    "Parce que tu es la meilleure chose qui me soit arrivée",
    "Parce que tu me fais sentir vivant",
    "Parce que tu me fais sentir complet",
    "Parce que tu me fais sentir chanceux",
    "Parce que tu es toujours toi-même",
    "Parce que tu es authentique",
    "Parce que tu es vraie",
    "Parce que tu es simple et sincère",
    "Parce que tu es incroyable",
    "Parce que tu es merveilleuse",
    "Parce que tu es exceptionnelle",
    "Parce que tu es unique au monde",
    "Parce que tu es irremplaçable",
    "Parce que tu es mon rêve devenu réalité",
    "Parce que tu es mon présent",
    "Parce que tu es mon avenir",
    "Parce que tu es mon amour",
    "Parce que tu es mon cœur",
    "Parce que tu es ma lumière",
    "Parce que tu es ma douceur",
    "Parce que tu es ma fierté",
    "Parce que tu es ma chance",
    "Parce que tu es tout pour moi",
    "Parce que tu me donnes envie d’être meilleur",
    "Parce que tu me donnes envie d’aimer encore plus",
    "Parce que tu me donnes envie de sourire chaque jour",
    "Parce que tu me donnes envie de vivre pleinement",
    "Parce que tu me donnes envie de rêver",
    "Parce que tu me donnes envie d’avancer",
    "Parce que tu me donnes envie de réussir",
    "Parce que tu me donnes envie d’être heureux",
    "Parce que tu es incroyable avec moi",
    "Parce que tu es incroyable avec les autres",
    "Parce que tu es pleine d’amour",
    "Parce que tu es pleine de gentillesse",
    "Parce que tu es pleine de douceur",
    "Parce que tu es pleine de beauté",
    "Parce que tu es pleine de lumière",
    "Parce que tu es pleine de vie",
    "Parce que tu rends ma vie meilleure",
    "Parce que tu rends mes journées plus belles",
    "Parce que tu rends mon monde plus beau",
    "Parce que tu rends tout plus simple",
    "Parce que tu rends tout plus heureux",
    "Parce que tu rends tout plus lumineux",
    "Parce que tu rends tout plus magique",
    "Parce que tu rends mon cœur heureux",
    "Parce que tu me fais sentir en paix",
    "Parce que tu me fais sentir chez moi",
    "Parce que tu me fais sentir complet",
    "Parce que tu es la personne que j’admire",
    "Parce que tu es la personne que je respecte",
    "Parce que tu es la personne qui me comprend le mieux",
    "Parce que tu es la personne que je veux garder dans ma vie",
    "Parce que tu es l’amour de ma vie",
    "Parce que je t’aime tout simplement"
];


/* IMPORTANT : mets la date du premier jour */
const startDate = new Date("2026-03-10");


const today = new Date();


function getDayNumber() {

    const diff = today - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return days;

}


const dayIndex = getDayNumber();


const complimentText = document.getElementById("complimentText");
const reasonText = document.getElementById("reasonText");
const dayCounter = document.getElementById("dayCounter");


if (dayIndex < compliments.length) {

    complimentText.textContent = compliments[dayIndex];

    reasonText.textContent = reasons[dayIndex];

    dayCounter.textContent = "Jour " + (dayIndex + 1) + " / 109";

} else {

    complimentText.textContent = "Plus que quelques jours avant qu'on se retrouve ❤️";

    reasonText.textContent = "";

    dayCounter.textContent = "";

}

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;

    createHeartTrail(e.clientX, e.clientY);
});

let lastHeartTime = 0;

>>>>>>> 4ca4e72 (first commit)
