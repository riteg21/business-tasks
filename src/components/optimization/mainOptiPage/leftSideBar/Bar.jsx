import { Link } from "react-router-dom";
import { Filter } from "./filter/Filter";
import { Contacts } from "./contacts/Contacts";

export const NavOptiBar = () => {
  return (
    <div className="bg-[#F5F7FA]/90 rounded-4xl py-10 px-3">
      <Link className="flex justify-center mb-10" to={"/"}>
        <img src="logo.svg" alt="Logo" className="w-17 h-auto" />
      </Link>
      <div className="flex justify-center">
        <Filter />
      </div>
      <div>
        <Contacts />
      </div>
    </div>
  );
};
