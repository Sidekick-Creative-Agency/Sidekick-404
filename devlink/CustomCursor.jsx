"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CustomCursor.module.css";

export function CustomCursor({
  as: _Component = _Builtin.Block,
  cursorWrapperVisibility = true,
}) {
  return cursorWrapperVisibility ? (
    <_Component className={_utils.cx(_styles, "cursor-wrapper")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "cursor-dot-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cursor-dot-inner")}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cursor-circle-container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "cursor-circle-inner")}
          tag="div"
        />
      </_Builtin.Block>
    </_Component>
  ) : null;
}
