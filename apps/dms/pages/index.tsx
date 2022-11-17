import Head from "next/head";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Head>
        <title>DMS</title>
        <meta name="description" content="Generated by DMS" />
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
        DMS
      </main>
    </div>
  );
}
