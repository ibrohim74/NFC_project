import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Advantages from "components/Advantages";
import Faq from "components/Faq";
import Footer from "components/Footer";
import GridPanel from "components/GridPanel";
import Header from "components/Header";
import Panel from "components/Panel";
import StepsPanel from "components/StepsPanel";
import VideoPanel from "components/VideoPanel";

import { handleSectionNavigation } from "utils";
import Functions from "components/Functions";
import TrustedBy from "components/TrustedBy";
import Instructions from "components/Instructions";
import PanelReverse from "components/PanelReverse";
import Wps from "components/Wps";

const HomelightthemeDesktop1440pxanddownPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex flex-col gap-5 items-center justify-center px-7 md:px-8 py-7 w-full" />
        <VideoPanel className="flex flex-col items-center justify-center sm:m-[] sm:mb-[] sm:ml-[] sm:mr-[] sm:mt-[] sm:p-[] pt-16 sm:px-5 w-full" />
        <TrustedBy className="flex flex-col gap-8 items-center justify-start pb-16 pt-32 sm:px-5 md:px-5 w-full" />
        <Panel
          className="bg-gray-50 flex flex-col items-center justify-center sm:p-[] pb-32 pt-16 sm:px-5 md:px-5 rounded-tl-[128px] rounded-tr-[128px] w-full"
          id="Product"
        />
        <Functions
          className="bg-gray-50 flex flex-col gap-8 items-center justify-start sm:p-[] pb-32 sm:px-5 md:px-5 w-full"
          id="Functions"
        />
        <Instructions
          className="bg-gray-50 flex flex-col gap-8 items-center justify-center sm:p-[] pb-16 sm:px-5 md:px-5 rounded-bl-[128px] rounded-br-[128px] w-full"
          id="Instructions"
        />
        <PanelReverse className="flex flex-col gap-[120px] items-center justify-center sm:p-[] pb-32 pt-[65px] sm:px-5 md:px-5 w-full" />
        <Faq
          className="flex flex-col gap-8 items-center justify-center sm:p-[] pb-32 sm:px-5 md:px-5 w-full"
          id="Faq"
        />
        <Wps className="flex flex-col gap-8 items-center justify-center sm:p-[] pb-32 sm:px-5 md:px-5 w-full" />
        <Footer className="flex gap-10 items-center justify-center md:px-5 py-[60px] w-full" />
      </div>
    </>
  );
};

export default HomelightthemeDesktop1440pxanddownPage;
