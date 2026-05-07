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

const gamingArea = document.querySelector(".gamingArea")

function getRebus() {
    for (let i = 0; i < rebusArray.length; i++) {
        const img = document.createElement("img");
        img.src = rebusArray[i].word1;

        gamingArea.appendChild(img)

    }
}

getRebus()
