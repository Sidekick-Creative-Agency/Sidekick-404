"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./AccordionItem.module.css";

export function AccordionItem({
  as: _Component = _Builtin.Block,
  question = "This is the default text value",
  answer = "",
  contentId = "accordion-content_[number]",
  triggerId = "accordion-trigger_[number]",
}) {
  return (
    <_Component className={_utils.cx(_styles, "accordion-item")} tag="div">
      <_Builtin.DOM
        className={_utils.cx(_styles, "accordion-item_trigger")}
        tag="button"
        slot=""
        aria-expanded="false"
        aria-controls={contentId}
        id={triggerId}
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "heading-style-h3_small")}
          tag="h3"
        >
          {question}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(_styles, "accordion-item_trigger_icon")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "accordion-item_trigger_icon_line")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "accordion-item_trigger_icon_line",
              "vertical"
            )}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.DOM>
      <_Builtin.Block
        className={_utils.cx(_styles, "accordion-item_content")}
        tag="div"
        aria-labelledby={triggerId}
        id={contentId}
      >
        <_Builtin.RichText
          className={_utils.cx(_styles, "text-color-gray-03")}
          tag="div"
          slot=""
        >
          {answer}
        </_Builtin.RichText>
      </_Builtin.Block>
    </_Component>
  );
}
