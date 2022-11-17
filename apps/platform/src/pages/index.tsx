import { Button, ProductDrawer } from "ui";
import { useEffect, useState } from "react";
import { LoginFormCard } from "../features/session/ui/LoginFormCard";
import Cookie from "cookie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    const cookies = Cookie.parse(document.cookie);
    if (cookies["logged"]) {
      setLogged(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = () => {
    document.cookie = Cookie.serialize("logged", "true", {
      path: "/",
    });

    setLogged(true);
  };

  if (loading) return <div>Loading...</div>;

  if (!loading && !logged)
    return (
      <div>
        <LoginFormCard onLogin={handleLogin} />
      </div>
    );

  return (
    <div style={{ minHeight: "100vh" }}>
      <ProductDrawer />

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: 32,
          }}
        >
          Suite Platform
        </h1>
        <div>
          button from UI package: <Button />
        </div>
      </main>
    </div>
  );
}
