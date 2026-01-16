"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SuccessStoriesCard.module.css";

export function SuccessStoriesCard({
  as: _Component = _Builtin.DOM,
  id = "card",
  logo = "",
  imageGrid = "",
  blockquote = "This is the default text value",
  nameTitle = "This is the default text value",
  company = "This is the default text value",
  backgroundStyles = "",
  link,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "success-stories_card")}
      tag="button"
      slot=""
      aria-expanded="false"
      aria-label="Click to view Success Story Testimonial"
      id={id}
    >
      <_Builtin.Link
        className={_utils.cx(_styles, "success-stories_card_front")}
        button={false}
        block="inline"
        options={link}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "success-stories_card_logo-container")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "success-stories_card_logo")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={logo}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "success-stories_card_image-container")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "absolute-image")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={imageGrid}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "success-stories_card_image-overlay")}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Link>
      <_Builtin.Block
        className={_utils.cx(_styles, "success-stories_card_overlay", "hide")}
        tag="div"
      >
        <_Builtin.Block className={_utils.cx(_styles, "badge")} tag="div">
          {"Testimonial"}
        </_Builtin.Block>
        <_Builtin.Blockquote
          className={_utils.cx(_styles, "success-stories_card_quote")}
        >
          {blockquote}
        </_Builtin.Blockquote>
        <_Builtin.Block
          className={_utils.cx(_styles, "success-stories_card_info")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "success-stories_card_info_text")}
            tag="h3"
          >
            {nameTitle}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "success-stories_card_info_separator"
            )}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "success-stories_card_info_text")}
            tag="div"
          >
            {company}
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "success-stories_card_toggle", "hide")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "success-stories_card_toggle_line")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "success-stories_card_toggle_line",
            "vertical"
          )}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.RichText
        className={_utils.cx(_styles, "hide")}
        tag="div"
        slot=""
      >
        {backgroundStyles}
      </_Builtin.RichText>
    </_Component>
  );
}
