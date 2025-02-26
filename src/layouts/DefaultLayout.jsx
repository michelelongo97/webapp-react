import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/ui/Card";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
