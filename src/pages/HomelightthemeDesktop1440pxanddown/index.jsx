import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Advantages from "components/Advantages";
import Faq from "components/Faq";
import Footer from "components/Footer";
import GridPanel from "components/GridPanel";
import Header from "components/Header";
import Panel from "components/Panel";
import StepsPanel from "components/StepsPanel";

import { handleSectionNavigation } from "utils";

const HomelightthemeDesktop1440pxanddownPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex items-center justify-center md:px-5 py-7 w-full" />
        <Panel className="flex flex-col gap-[120px] h-[768px] md:h-auto items-center justify-center py-[120px] w-full" />
        <div
          className="flex flex-col h-[768px] md:h-auto items-center justify-center py-[120px] w-full"
          id="block1"
        >
          <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1080px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <Img
                className="h-[480px] md:h-auto object-cover rounded-bl-[40px] rounded-br-[40px] w-full"
                src="images/img_homestationinstalled.png"
                alt="homestationinst_One"
              />
            </div>
            <div className="flex flex-1 flex-col gap-7 h-full items-start justify-center py-7 w-full">
              <Text
                className="leading-[44.00px] max-w-[526px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-black-900"
                size="txtRubikSemiBold36"
              >
                Зарядные устройства для дома
              </Text>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="leading-[24.00px] max-w-[526px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                  size="txtRubikRegular16"
                >
                  Заряжайте быстрее с нашими домашними зарядными устройствами
                  для электромобилей, которые просты в установке, имеют
                  интеллектуальные функции, прочны и надежны и могут заряжать
                  любые электрические транспортные средства.
                </Text>
                <Text
                  className="text-base text-black-900 tracking-[0.16px] w-full"
                  size="txtRubikRegular16"
                >
                  Установка + поддержка включены.
                </Text>
              </div>
              <div className="flex flex-row font-inter gap-3 items-center justify-start w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_refresh.svg"
                  alt="refresh_One"
                />
                <Text
                  className="text-light_green-700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  Узнать больше
                </Text>
              </div>
            </div>
          </div>
        </div>
        <GridPanel
          className="bg-gray-50 flex flex-col gap-10 items-center justify-start max-w-[1440px] pb-[120px] pt-[60px] w-full"
          id="block2"
        />
        <StepsPanel className="bg-gray-50 flex flex-col gap-10 items-center justify-start p-[60px] md:px-10 sm:px-5 w-full" />
        <Panel className="flex flex-col gap-[120px] h-[768px] md:h-auto items-center justify-center py-[120px] w-full" />
        <Faq className="flex flex-col gap-10 items-center justify-center pb-[120px] pt-[60px] md:px-10 sm:px-5 px-[60px] w-full" />
        <Advantages className="flex flex-col gap-10 items-center justify-center pb-[120px] pt-[60px] md:px-10 sm:px-5 px-[60px] w-full" />
        <Footer className="flex gap-10 items-center justify-center md:px-5 py-[60px] w-full" />
      </div>
    </>
  );
};

export default HomelightthemeDesktop1440pxanddownPage;
