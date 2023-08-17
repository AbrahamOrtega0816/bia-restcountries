import useDarkMode from "@/hooks/useDarkMode";
import { useEffect, useState } from "react";
import Image from "next/image";

const SwitchTheme = () => {
  const { theme, setTheme } = useDarkMode();
  const [isMounted, setIsMounted] = useState(false);

  // update state on toggle
  const handleToggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="flex-none">
      <button
        className="btn btn-square btn-ghost"
        onClick={handleToggle}
        id="btn-toggle-theme"
      >
        <Image
          src={
            isMounted && theme === "dark"
              ? "/images/sun-2-svgrepo-com.svg"
              : "/images/moon-svgrepo-com.svg"
          }
          alt="theme"
          className="w-8 h-8"
          width={32}
          height={32}
        />
      </button>
      <span>{isMounted && theme === "dark" ? "Dark Mode" : "Light Mode"}</span>
    </div>
  );
};

export default SwitchTheme;
