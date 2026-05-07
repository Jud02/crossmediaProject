const rebusArray = [
    {
        word1: "./bilder/emojies/pine-tree.png",
        word2: "./bilder/emojies/apple.png",
        correctAnswer: "pineapple"

    },
    {
        word1: "./bilder/emojies/butter.png",
        word2: "./bilder/emojies/fly.png",
        correctAnswer: "butterfly"

    },
    {
        word1: "./bilder/emojies/fire.png",
        word2: "./bilder/emojies/golden-retriever.png",
        correctAnswer: "hotdog"

    },
    {
        word1: "./bilder/emojies/pagophagia.png",
        word2: "./bilder/emojies/smiley.png",
        correctAnswer: "ice cream"

    },
    {
        word1: "./bilder/emojies/sunny.png",
        word2: "./bilder/emojies/flower.png",
        correctAnswer: "sunflower"

    },
    {
        word1: "./bilder/emojies/stack-of-books.png",
        word2: "./bilder/emojies/worm.png",
        correctAnswer: "bookworm"

    },
    {
        word1: "./bilder/emojies/construction-and-tools.png",
        word2: "./bilder/emojies/package.png",
        correctAnswer: "sandbox"

    }
]

//fixa lika många svarsrutor som antal bokstäver i correctAnswer
//fixa loop för att få ut emojies

const gamingArea = document.querySelector(".gamingArea");

function getRebus() {
    for (let i = 0; i < rebusArray.length; i++) {
        const img1 = document.createElement("img");
        img1.classList.add("img1");
        img1.src = rebusArray[i].word1;

        const img2 = document.createElement("img");
        img2.classList.add("img2");
        img2.src = rebusArray[i].word2;

        gamingArea.appendChild(img1);
        gamingArea.appendChild(img2);


    }
}

getRebus();

