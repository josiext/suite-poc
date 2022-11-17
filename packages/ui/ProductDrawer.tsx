import { APP_URLS } from "./utils";
import Cookies from "js-cookie";

export const ProductDrawer = ({ onLogout }: any) => {
  const handleCloseSession = () => {
    Cookies.remove("logged");
    onLogout();
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: 24,
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#f8f8f8",
      }}
    >
      <div style={{ display: "flex", gap: 24 }}>
        <a href={APP_URLS.PLATFORM}>Home</a>
        <a href={APP_URLS.DMS}>DMS</a>
        <a href={APP_URLS.PROJECT_MANAGER}>Project Manager</a>
      </div>

      <div>
        <button onClick={handleCloseSession}>Cerrar sesion</button>
      </div>
    </nav>
  );
};
