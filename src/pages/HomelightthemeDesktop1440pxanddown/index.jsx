import React from "react";

import { Button, Img, Line, List, Text } from "components";

const HomelightthemeDesktop1440pxanddownPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-rubik items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <header className="bg-white-A700 flex items-center justify-center md:px-5 py-7 w-full">
          <div className="flex flex-row items-center justify-center max-w-[1080px] w-full">
            <div className="flex flex-col h-[29px] md:h-auto items-center justify-start">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                size="txtRubikMedium24"
              >
                LOGO
              </Text>
            </div>
            <ul className="flex flex-1 sm:flex-col flex-row gap-14 h-full md:hidden items-center justify-center w-full common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="text-base text-black-900 tracking-[0.16px]"
                >
                  <Text size="txtRubikRegular16">Home chargers</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-base text-black-900 tracking-[0.16px]"
                >
                  <Text size="txtRubikRegular16">Charging stations</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-base text-black-900 tracking-[0.16px]"
                >
                  <Text size="txtRubikRegular16">Applications</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="text-base text-black-900 tracking-[0.16px]"
                >
                  <Text size="txtRubikRegular16">Contacts</Text>
                </a>
              </li>
            </ul>
            <div className="flex flex-row font-montserrat gap-7 h-7 md:h-auto items-center justify-end">
              <div className="flex flex-row h-7 md:h-auto items-center justify-start sm:pr-5 pr-6">
                <Img
                  className="h-full w-6"
                  src="images/img_globe.svg"
                  alt="globe"
                />
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtMontserratRomanMedium16"
                >
                  Uzb
                </Text>
              </div>
              <Img
                className="h-full w-4"
                src="images/img_user.svg"
                alt="user"
              />
              <Img
                className="h-full w-[18px]"
                src="images/img_cart.svg"
                alt="cart"
              />
            </div>
          </div>
        </header>
        <div className="flex flex-col h-[768px] md:h-auto items-center justify-center py-[120px] w-full">
          <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1080px] mx-auto md:px-5 w-full">
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
                  alt="refresh"
                />
                <Text
                  className="text-light_green-700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  Узнать больше
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <Img
                className="h-[480px] md:h-auto object-cover rounded-bl-[40px] rounded-br-[40px] w-full"
                src="images/img_homestationinstalled.png"
                alt="homestationinst"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col h-[768px] md:h-auto items-center justify-center py-[120px] w-full">
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
        <div className="bg-gray-50 flex flex-col gap-10 items-center justify-start max-w-[1440px] pb-[120px] pt-[60px] w-full">
          <div className="flex flex-col gap-5 items-center justify-center max-w-[1080px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRubikSemiBold36"
            >
              Приложения, которые вам понравятся
            </Text>
            <Text
              className="leading-[24.00px] max-w-[710px] md:max-w-full text-base text-black-900 text-center tracking-[0.16px]"
              size="txtRubikRegular16"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </div>
          <div className="gap-7 grid md:grid-cols-1 grid-cols-2 items-start max-w-[1080px] min-h-[auto] mx-auto md:px-5 w-full">
            <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-[400px] md:h-auto items-start justify-end p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                size="txtRubikSemiBold16"
              >
                Мобильное приложение
              </Text>
              <Text
                className="leading-[28.00px] max-w-[313px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtRubikMedium24"
              >
                Заряжайте и оплачивайте в выбранном пункте оплаты.
              </Text>
            </div>
            <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-end p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                size="txtRubikSemiBold16"
              >
                Мобильное приложение
              </Text>
              <Text
                className="leading-[28.00px] max-w-[470px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtRubikMedium24"
              >
                Найдите доступные точки зарядки, ближайшие к вам в любом месте.
              </Text>
            </div>
            <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-end p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                size="txtRubikSemiBold16"
              >
                Мобильное приложение
              </Text>
              <Text
                className="leading-[28.00px] max-w-[313px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtRubikMedium24"
              >
                Заряжайте и оплачивайте в выбранном пункте оплаты.
              </Text>
            </div>
            <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-end p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                size="txtRubikSemiBold16"
              >
                Мобильное приложение
              </Text>
              <Text
                className="leading-[28.00px] max-w-[470px] md:max-w-full text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtRubikMedium24"
              >
                Найдите доступные точки зарядки, ближайшие к вам в любом месте.
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col gap-10 items-center justify-start p-[60px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col items-center justify-center max-w-[766px] md:px-10 sm:px-5 px-[60px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRubikSemiBold36"
            >
              Launch your online profile today
            </Text>
          </div>
          <List
            className="flex flex-col gap-7 items-start max-w-[766px] w-full"
            orientation="vertical"
          >
            <div className="bg-gray-100 flex flex-1 flex-col gap-10 items-start justify-center my-0 p-7 sm:px-5 rounded-[24px] w-full">
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-full">
                <Text
                  className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                  size="txtRubikSemiBold16"
                >
                  STEP 01
                </Text>
                <Line className="bg-gray-200 h-px w-[86%]" />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRubikMedium24"
                >
                  <>
                    Click on the &#39;Get started&#39; button and fill out the
                    form
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[710px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                  size="txtRubikRegular16"
                >
                  Choose the product you like and provide minimal information
                  such as your name, email, phone number, and job title to get
                  started.
                </Text>
              </div>
            </div>
            <div className="bg-gray-100 flex flex-1 flex-col gap-10 items-start justify-center my-0 p-7 sm:px-5 rounded-[24px] w-full">
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-full">
                <Text
                  className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                  size="txtRubikSemiBold16"
                >
                  STEP 01
                </Text>
                <Line className="bg-gray-200 h-px w-[86%]" />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRubikMedium24"
                >
                  <>
                    Click on the &#39;Get started&#39; button and fill out the
                    form
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[710px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                  size="txtRubikRegular16"
                >
                  Choose the product you like and provide minimal information
                  such as your name, email, phone number, and job title to get
                  started.
                </Text>
              </div>
            </div>
            <div className="bg-gray-100 flex flex-1 flex-col gap-10 items-start justify-center my-0 p-7 sm:px-5 rounded-[24px] w-full">
              <div className="flex sm:flex-col flex-row gap-7 items-center justify-start w-full">
                <Text
                  className="text-base text-blue-A400 tracking-[0.32px] w-auto"
                  size="txtRubikSemiBold16"
                >
                  STEP 01
                </Text>
                <Line className="bg-gray-200 h-px w-[86%]" />
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRubikMedium24"
                >
                  <>
                    Click on the &#39;Get started&#39; button and fill out the
                    form
                  </>
                </Text>
                <Text
                  className="leading-[24.00px] max-w-[710px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                  size="txtRubikRegular16"
                >
                  Choose the product you like and provide minimal information
                  such as your name, email, phone number, and job title to get
                  started.
                </Text>
              </div>
            </div>
          </List>
          <Button className="bg-light_green-A200 cursor-pointer font-medium mb-[60px] min-w-[228px] py-1.5 rounded-[16px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl">
            Get started today
          </Button>
        </div>
        <div className="flex flex-col h-[768px] md:h-auto items-center justify-center py-[120px] w-full">
          <div className="flex md:flex-col flex-row gap-7 items-start justify-start max-w-[1080px] mx-auto md:px-5 w-full">
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
                  alt="refresh_Two"
                />
                <Text
                  className="text-light_green-700 text-xl w-auto"
                  size="txtInterSemiBold20"
                >
                  Узнать больше
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <Img
                className="h-[480px] md:h-auto object-cover rounded-bl-[40px] rounded-br-[40px] w-full"
                src="images/img_homestationinstalled.png"
                alt="homestationinst_Two"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center pb-[120px] pt-[60px] w-full">
          <div className="flex flex-col items-center justify-center max-w-[766px] md:px-5 px-[120px] w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRubikSemiBold36"
            >
              Часто задаваемые вопросы
            </Text>
          </div>
          <div className="flex flex-col gap-7 items-start justify-start max-w-[766px] md:px-5 w-full">
            <div className="bg-gray-100 flex sm:flex-col flex-row gap-7 items-center justify-center p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="flex-1 text-base text-black-900 tracking-[0.16px] w-auto"
                size="txtRubikRegular16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_refresh_blue_a400.svg"
                alt="refresh_Three"
              />
            </div>
            <div className="bg-gray-100 flex md:flex-col flex-row gap-7 items-center justify-center p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="flex-1 leading-[24.00px] max-w-[662px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
              <Img
                className="h-5 w-5"
                src="images/img_refresh_blue_a400.svg"
                alt="refresh_Four"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center justify-center pb-[120px] pt-[60px] w-full">
          <div className="flex flex-col items-start justify-start max-w-[1080px] mx-auto md:px-5 w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
              size="txtRubikSemiBold36"
            >
              Наши преимущества
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-7 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1080px] mx-auto md:px-5 w-full"
            orientation="horizontal"
          >
            <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-start p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="text-black-900 text-xl w-full"
                size="txtRubikMedium20"
              >
                Heading
              </Text>
              <Text
                className="leading-[24.00px] max-w-[285px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </div>
            <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-start p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="text-black-900 text-xl w-full"
                size="txtRubikMedium20"
              >
                Heading
              </Text>
              <Text
                className="leading-[24.00px] max-w-[285px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </div>
            <div className="bg-gray-100 flex flex-1 flex-col gap-5 h-full items-start justify-start p-7 sm:px-5 rounded-[28px] w-full">
              <Text
                className="text-black-900 text-xl w-full"
                size="txtRubikMedium20"
              >
                Heading
              </Text>
              <Text
                className="leading-[24.00px] max-w-[285px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                size="txtRubikRegular16"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </div>
          </List>
        </div>
        <footer className="flex items-center justify-center md:px-5 py-[60px] w-full">
          <div className="flex flex-col gap-10 items-center justify-center w-3/4 md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1080px] w-full">
              <div className="flex flex-col items-start justify-start w-[356px]">
                <Text
                  className="leading-[24.00px] max-w-[193px] md:max-w-full text-base text-black-900 tracking-[0.16px]"
                  size="txtRubikRegular16"
                >
                  Заряжайте свой автомобиль быстрее, удобнее и дешевле с нами.
                </Text>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-7 items-start justify-between w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRubikMedium24"
                  >
                    Links
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900 tracking-[0.16px]"
                      >
                        <Text size="txtRubikRegular16">For home</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900 tracking-[0.16px]"
                      >
                        <Text size="txtRubikRegular16">For business</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900 tracking-[0.16px]"
                      >
                        <Text size="txtRubikRegular16">For drivers</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900 tracking-[0.16px]"
                      >
                        <Text size="txtRubikRegular16">Blog</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRubikMedium24"
                  >
                    Information
                  </Text>
                  <ul className="flex flex-col gap-4 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900 tracking-[0.16px]"
                      >
                        <Text size="txtRubikRegular16">About Us</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900 tracking-[0.16px]"
                      >
                        <Text size="txtRubikRegular16">
                          Return & Refund policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="text-base text-black-900 tracking-[0.16px]"
                      >
                        <Text size="txtRubikRegular16">Cookie policy</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-auto"
                    size="txtRubikMedium24"
                  >
                    Contacts
                  </Text>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="text-base text-black-900 tracking-[0.16px] w-auto"
                      size="txtRubikRegular16"
                    >
                      hello@ecarchargers.uz
                    </Text>
                    <Text
                      className="text-base text-black-900 tracking-[0.16px] w-auto"
                      size="txtRubikRegular16"
                    >
                      +998 00 000 00 00
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start max-w-[1080px] w-full">
              <Line className="bg-gray-200_7e h-px w-full" />
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-black-900 text-sm w-auto"
                  size="txtRubikRegular14"
                >
                  eCARchargers
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Img
                    className="h-6 w-[21px]"
                    src="images/img_play.svg"
                    alt="play"
                  />
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomelightthemeDesktop1440pxanddownPage;
