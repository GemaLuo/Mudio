import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

function getWindowWidth() {
  const innerWidth = window.innerWidth;
  return innerWidth;
}

const Home = () => {
  const [width, setWidth] = useState(getWindowWidth());
  const [openSidebar, setOpenSidebar] = useState(true);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(getWindowWidth());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    if (width < 1024) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  },[width]);

  return (
    <div className="h-screen bg-black text-white flex flex-col overflow-y-hidden justify-between">
      <div className="max-w-full h-full flex overflow-hidden mb-[5rem]">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
        <div className="w-full">
          <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
          main content
        </div>
      </div>
    </div>
  );
};

export default Home;
