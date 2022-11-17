import Head from "next/head";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Head>
        <title>Project Manager</title>
        <meta name="description" content="Project Manager" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          fontSize: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Project Manager
      </main>
    </div>
  );
}
