import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState<string>(
    typeof window !== "undefined"
      ? localStorage.getItem("theme")
        ? (localStorage.getItem("theme") as string)
        : "dark"
      : "dark"
  );

  useEffect(() => {
    document
      ?.querySelector("html")
      ?.setAttribute("data-theme", theme as string);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return { theme, setTheme };
}

export default useDarkMode;
