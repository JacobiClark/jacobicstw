import { Fragment } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <Fragment>
      <div className="flex flex-col h-screen bg-slate-50 dark:bg-gray-900 ">
        <Navbar />
        <main className="h-full bg-orange-900">{children}</main>
      </div>
    </Fragment>
  );
}
