import Head from "next/head";
import ComingSoon from "../components/ComingSoon";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Head>
          <title>YoutubeNLP</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ComingSoon></ComingSoon>

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
