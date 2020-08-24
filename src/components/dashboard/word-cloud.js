import React, { Component } from "react";
import ReactWordcloud from 'react-wordcloud';

const words = [
    {
        text: 'told',
        value: 64,
    },
    {
        text: 'mistake',
        value: 11,
    },
    {
        text: 'thought',
        value: 16,
    },
    {
        text: 'bad',
        value: 17,
    },
]

const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
};

function WordCloud() {
    return <ReactWordcloud
        words={words}
        options={options}
    />
}