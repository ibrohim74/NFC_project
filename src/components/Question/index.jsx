import React from "react";

import "../../utils/faq.js";
import { Img, Text } from "components";

const Question = (props) => {
  const { question, answer } = { ...props.faq };
  return (
    <>
      <div className={props.className} onClick={props.onClick} id={props.id}>
        <Text
          className="flex-1 text-base text-black-900 tracking-[0.16px] w-auto"
          size="txtRubikRegular16"
        >
          {question}
        </Text>
        <Img className="h-5 w-5" src="images/img_refresh.svg" alt="refresh" />
      </div>
    </>
  );
};

Question.defaultProps = {};

export default Question;
