import React, {Component} from "react";
import ReactDOM from "react-dom";


let flowers = [
    {
        name: "Acacia",
        picture: "https://habahram.blob.core.windows.net/flowers/acacia.jpg"
    },
    {
        name: "Alyssum",
        picture: "https://habahram.blob.core.windows.net/flowers/alyssum.jpg"
    },
    {
        name: "Amaryllis",
        picture: "https://habahram.blob.core.windows.net/flowers/amaryllis.jpg"
    },
    {
        name: "Aster",
        picture: "https://habahram.blob.core.windows.net/flowers/aster.jpg"
    },
    {
        name: "Azalea",
        picture: "https://habahram.blob.core.windows.net/flowers/azalea.jpg"
    },
    {
        name: "Begonia",
        picture: "https://habahram.blob.core.windows.net/flowers/begonia.jpg"
    },
    {
        name: "Buttercup",
        picture: "https://habahram.blob.core.windows.net/flowers/buttercup.jpg"
    },
    {
        name: "Calluna",
        picture: "https://habahram.blob.core.windows.net/flowers/calluna.jpg"
    },
    {
        name: "Camellia",
        picture: "https://habahram.blob.core.windows.net/flowers/camellia.jpg"
    },
    {
        name: "Cardinal",
        picture: "https://habahram.blob.core.windows.net/flowers/cardinal.jpg"
    },
    {
        name: "Carnation",
        picture: "https://habahram.blob.core.windows.net/flowers/carnation.jpg"
    },
    {
        name: "Clover",
        picture: "https://habahram.blob.core.windows.net/flowers/clover.jpg"
    },
    {
        name: "Crown Imperial",
        picture: "https://habahram.blob.core.windows.net/flowers/crownimperial.jpg"
    },
    {
        name: "Daffodil",
        picture: "https://habahram.blob.core.windows.net/flowers/daffodil.jpg"
    },
    {
        name: "Dahlia",
        picture: "https://habahram.blob.core.windows.net/flowers/dahlia.jpg"
    },
    {
        name: "Daisy",
        picture: "https://habahram.blob.core.windows.net/flowers/daisy.jpg"
    },
    {
        name: "Gladiolus",
        picture: "https://habahram.blob.core.windows.net/flowers/gladiolus.jpg"
    },
    {
        name: "Lantana",
        picture: "https://habahram.blob.core.windows.net/flowers/lantana.jpg"
    },
    {
        name: "Lily",
        picture: "https://habahram.blob.core.windows.net/flowers/lily.jpg"
    },
    {
        name: "Lotus",
        picture: "https://habahram.blob.core.windows.net/flowers/lotus.jpg"
    },
    {
        name: "Marigold",
        picture: "https://habahram.blob.core.windows.net/flowers/Marigold.jpg"
    },
    {
        name: "Orchid",
        picture: "https://habahram.blob.core.windows.net/flowers/orchid.jpg"
    },
    {
        name: "Primrose",
        picture: "https://habahram.blob.core.windows.net/flowers/primrose.jpg"
    },
    {
        name: "Sunflower",
        picture: "https://habahram.blob.core.windows.net/flowers/sunflower.jpg"
    },
    {
        name: "Tickseed",
        picture: "https://habahram.blob.core.windows.net/flowers/tickseed.jpg"
    },
    {
        name: "Tulip",
        picture: "https://habahram.blob.core.windows.net/flowers/tulip.jpg"
    },
    {
        name: "Zinnia",
        picture: "https://habahram.blob.core.windows.net/flowers/zinnia.jpg"
    }
];

const quiz1 = [
    {
        questionText: 'What Flower is this?',
        answerOptions: [
            { answerText: 'Lily', isCorrect: false },
            { answerText: 'Daisy', isCorrect: false },
            { answerText: 'Acaia', isCorrect: true },
            
        ],
    },
    {
        questionText: 'How Long Do Acaia Trees live?',
        answerOptions: [
            { answerText: '10-20 years', isCorrect: false },
            { answerText: '20-30 years', isCorrect: true },
            { answerText: '30-40 years', isCorrect: false },
        ],
    },
    {
        questionText: 'What animals feed off this?',
        answerOptions: [
            { answerText: 'Both of these', isCorrect: true },
            { answerText: 'Elephants', isCorrect: false },
            { answerText: 'Giraffes', isCorrect: false },
        ],
    },
    {
        questionText: 'Where do these trees grow?',
        answerOptions: [
            { answerText: 'Austrailia', isCorrect: false },
            { answerText: 'South Africa', isCorrect: false },
            { answerText: 'both of these', isCorrect: true },
        ],
    },
    {
        questionText: 'What protection do these trees have for herbivores?',
        answerOptions: [
            
            { answerText: 'Termites', isCorrect: false },
            { answerText: 'Poisonous leaves', isCorrect: false },
            { answerText: 'Thorns', isCorrect: true },
        ],
    },
    {
        questionText: 'What color do these leaves have when blooming?',
        answerOptions: [
            { answerText: 'Red', isCorrect: false },
            { answerText: 'Green', isCorrect: false },
            { answerText: 'Yellow', isCorrect: true },
        ],
    },

];

export default flowers;

