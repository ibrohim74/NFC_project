import React from "react";

import { Img, Text } from "components";

const Faq = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center max-w-[766px] md:px-10 sm:px-5 px-[120px] w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-full"
            size="txtRubikSemiBold36"
          >
            Часто задаваемые вопросы
          </Text>
        </div>
        <div className="flex flex-col gap-7 items-start justify-start max-w-[766px] w-full">
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
    </>
  );
};

Faq.defaultProps = {};

export default Faq;
