import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../MainContent/Footer";
import PlayerState from "../../context/PlayerState";
import CreatePlaylistModal from "../utils/CreatePlaylistModal";
function getWindowWidth() {
  const innerWidth = window.innerWidth;
  return innerWidth;
}

const HomePage = () => {
  const [width, setWidth] = useState(getWindowWidth());
  const [openSidebar, setOpenSidebar] = useState(true);
  const [openModal, setOpenModal]=useState(false);

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
  }, [width]);

  return (
    <PlayerState>
      <div className="relative  h-screen bg-gradient-to-b from-neutral-700 via-zinc-800 to-zinc-900 text-white flex flex-col overflow-y-hidden justify-between">
        <div className="h-full flex overflow-hidden mb-[5rem]">
          <Sidebar setOpenModal={setOpenModal} openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
          <div className="md:w-full">
            <Navbar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />
            <div className="overflow-auto h-full pb-[5rem]">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer className="border-t border-solid w-[100%] border-gray-700" />
        <CreatePlaylistModal onClose={()=>setOpenModal(false)} open={openModal} setOpenModal={setOpenModal} />
      </div>
    </PlayerState>
  );
};

export default HomePage;
