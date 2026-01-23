import React, { useEffect, useState } from "react";

function ThemeSync() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (e) => {
      setTheme(e.matches ? "dark" : "light");
    };

    applyTheme(mediaQuery);        
    mediaQuery.addEventListener("change", applyTheme);

    return () => mediaQuery.removeEventListener("change", applyTheme);
  }, []);

  return (
    <div
      style={{
        width:"500px",
        height: "100vh",
        background: theme === "dark" ? "#111" : "#f4f4f4",
        color: theme === "dark" ? "white" : "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "0.3s",
      }}
    >
      <h1>Current Theme: {theme}</h1>
    </div>
  );
}

export default ThemeSync;
