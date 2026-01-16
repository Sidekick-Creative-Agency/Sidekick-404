"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ProjectInfoLink.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-2222":{"id":"e-2222","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe5b2e1-575c-7bc0-1c69-d340fb30f39d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe5b2e1-575c-7bc0-1c69-d340fb30f39d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746038029903},"e-2223":{"id":"e-2223","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-273","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2222"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dbe5b2e1-575c-7bc0-1c69-d340fb30f39d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dbe5b2e1-575c-7bc0-1c69-d340fb30f39d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746038029907},"e-2226":{"id":"e-2226","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-272","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2227"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d8e9b8a-5edc-0a57-68da-556f0cf6ab0a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d8e9b8a-5edc-0a57-68da-556f0cf6ab0a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746038438365},"e-2227":{"id":"e-2227","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-273","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-2226"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6d8e9b8a-5edc-0a57-68da-556f0cf6ab0a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6d8e9b8a-5edc-0a57-68da-556f0cf6ab0a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1746038438369}},"actionLists":{"a-272":{"id":"a-272","title":"Project Info Link Mouse Enter","actionItemGroups":[{"actionItems":[{"id":"a-272-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-info_meta_list-item_icon","selectorGuids":["4d7d8486-4acb-35c6-538c-6fce1daf5300"]},"value":0,"unit":""}},{"id":"a-272-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".project-info_meta_list-item_icon","selectorGuids":["4d7d8486-4acb-35c6-538c-6fce1daf5300"]},"xValue":-1,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-272-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".project-info_meta_list-item_icon","selectorGuids":["4d7d8486-4acb-35c6-538c-6fce1daf5300"]},"value":1,"unit":""}},{"id":"a-272-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"swingTo","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".project-info_meta_list-item_icon","selectorGuids":["4d7d8486-4acb-35c6-538c-6fce1daf5300"]},"xValue":0,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1746038034053},"a-273":{"id":"a-273","title":"Project Info Link Mouse Leave","actionItemGroups":[{"actionItems":[{"id":"a-273-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"swingTo","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".project-info_meta_list-item_icon","selectorGuids":["4d7d8486-4acb-35c6-538c-6fce1daf5300"]},"xValue":-1,"xUnit":"rem","yUnit":"PX","zUnit":"PX"}},{"id":"a-273-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":250,"target":{"useEventTarget":"CHILDREN","selector":".project-info_meta_list-item_icon","selectorGuids":["4d7d8486-4acb-35c6-538c-6fce1daf5300"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1746038034053}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ProjectInfoLink({
  as: _Component = _Builtin.Link,
  text = "Lorem",
  link,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "project-info_meta_list-item_link")}
      data-w-id="6d8e9b8a-5edc-0a57-68da-556f0cf6ab0a"
      button={false}
      block="inline"
      options={link}
    >
      <_Builtin.Block tag="div">{text}</_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "project-info_meta_list-item_icon")}
        tag="div"
      >
        <_Builtin.Span
          className={_utils.cx(_styles, "project-info_meta_list-item_icon")}
        >
          {""}
        </_Builtin.Span>
      </_Builtin.Block>
    </_Component>
  );
}
