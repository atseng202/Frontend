


export default function ComingSoon() {
  return (
    <main>
      <h1 className="title">
        Coming Soon!
      </h1>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
          text-align: center;
        }
      `}</style>
    </main>
  )
}