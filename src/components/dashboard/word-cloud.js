import React from "react";
import ReactWordcloud from 'react-wordcloud';


function WordCloud() {
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
        colors: "#545454",
    };

    return <ReactWordcloud
        words={words}
        options={options}
    />
}

export default WordCloud;