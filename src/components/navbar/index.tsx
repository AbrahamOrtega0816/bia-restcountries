import SwitchTheme from "./components/SwitchTheme";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
      <div className="flex-1">
        <Link href="/">
          <h1 className="text-lg font-bold mx-4">Where in the world ?</h1>
        </Link>
      </div>
      <SwitchTheme />
    </div>
  );
};
export default Navbar;
