"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SubscriptionsRolesCard.module.css";

export function SubscriptionsRolesCard({
  as: _Component = _Builtin.Link,
  image = "",
  title = "This is the default text value",
  subtitle = "This is the default text value",
  link,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "subscriptions-roles_card")}
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "subscriptions-roles_card_image-container"
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "absolute-image")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={image}
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "subscriptions-roles_card_content")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "subscriptions-roles_card_title")}
          tag="h3"
        >
          {title}
        </_Builtin.Heading>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "text-style-paragraph",
            "text-color-gray-03"
          )}
          tag="div"
        >
          {subtitle}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
