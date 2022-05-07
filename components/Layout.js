import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <div className="h-screen bg-slate-50 dark:bg-gray-900">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
