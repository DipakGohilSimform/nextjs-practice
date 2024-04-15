import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 flex gap-10 justify-center items-center w-screen h-[100px] bg-slate-900 text-white">
      <Link href="/admin" className="text-lg">
        Admin
      </Link>
      <Link href="/student" className="text-lg">
        Student
      </Link>
      <Link href="/staff" className="text-lg">
        Staff
      </Link>
      <Link href="/rollnopage" className="text-lg">
        Roll No
      </Link>
    </div>
  );
};

export default Navbar;
