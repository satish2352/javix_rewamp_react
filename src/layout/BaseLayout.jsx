import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import Header from './Header'
import Footer from './Footer'
const BaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Header/>
        <Outlet />
        <Footer/>
      </div>
    </main>
  );
};

export default BaseLayout;
