import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={"bg-slate-200  flex-center padding-y padding-x text-center flex-col"}>
      <p className={"text-slate-500 text-sm"}>
        Właścicielem strony jest Uczymypl. Wszelkie zapytania prosimy kierować
        na adres uczymypl@kontakt.pl
          Korzystając ze strony akceptujesz regulamin oraz politykę prywatności strony.
      </p>
      <Link href={"/statute"}>Regulamin i polityka prywatności</Link>

    </footer>
  );
};
export default Footer;
