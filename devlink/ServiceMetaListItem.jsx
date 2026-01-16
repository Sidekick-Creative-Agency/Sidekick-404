"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ServiceMetaListItem.module.css";

export function ServiceMetaListItem({
  as: _Component = _Builtin.Block,
  text = "Lorem",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "service-hero_meta_list-item")}
      tag="div"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "service-hero_meta_list-item_icon")}
        tag="div"
      >
        {""}
      </_Builtin.Block>
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
    </_Component>
  );
}
