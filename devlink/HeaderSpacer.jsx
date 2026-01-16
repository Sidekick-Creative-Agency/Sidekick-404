"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./HeaderSpacer.module.css";

export function HeaderSpacer({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "header-spacer")} tag="div" />
  );
}
