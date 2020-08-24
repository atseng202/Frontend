import Head from "next/head";
import ComingSoon from "../components/ComingSoon";
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

export default function Home() {
  return (
    <div>
      <div className="container">
        <Head>
          <title>YoutubeNLP</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ComingSoon></ComingSoon>
        <ReactWordcloud words={words} options={options}/>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
