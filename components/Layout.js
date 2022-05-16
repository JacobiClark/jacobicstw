import { Fragment } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <div className="flex flex-col items-center h-screen min-h-screen bg-slate-50 dark:bg-gray-900 ">
        <Navbar />
        <main className="h-full ">{children}</main>
      </div>
    </Fragment>
  );
}
