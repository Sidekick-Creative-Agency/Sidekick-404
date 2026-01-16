"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Accordion.module.css";

export function Accordion({
  as: _Component = _Builtin.Block,
  accordionItem1,
  slot,
  acordionItem2,
  accordionItem3,
  accordionItem4,
  accordionItem5,
}) {
  return (
    <_Component className={_utils.cx(_styles, "accordion")} tag="div">
      {accordionItem1 ?? (
        <>
          <_Builtin.NotSupported _atom="Slot" />
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "accordion_styles")}
            value="%3Cstyle%3E%0Ahtml%3Anot(.wf-design-mode)%20.accordion-item_content%20%7B%0A%09max-height%3A%200px%3B%0A%20%20overflow%3A%20hidden%3B%0A%7D%0A.accordion-item_content%20a%20%7B%0A%09color%3A%20inherit%3B%0A%20%20text-decoration%3A%20underline%3B%0A%7D%0A.accordion-item%3Afirst-child%20%7B%0A%09border-top%3A%201px%20solid%20rgba(255%2C255%2C255%2C.25)%3B%0A%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "accordion_logic")}
            value="%3Cscript%3E%0Afunction%20initAccordionAnimations()%20%7B%0A%09const%20accordions%20%3D%20document.querySelectorAll('.accordion')%3B%0Afunction%20openAccordion(item)%20%7B%0A%09const%20trigger%20%3D%20item.querySelector('.accordion-item_trigger')%3B%0A%20%20const%20content%20%3D%20item.querySelector('.accordion-item_content')%3B%0A%20%20const%20contentLinks%20%3D%20content.querySelectorAll('a')%3B%0A%09trigger.setAttribute('aria-expanded'%2C%20'true')%3B%0A%20%20animate(content%2C%20%7B%0A%20%20%20%20maxHeight%3A%20%60%24%7Bcontent.scrollHeight%20%2B%20convertRemToPx(2.5)%7Dpx%60%2C%0A%20%20%20%20paddingBottom%3A%20%60%24%7BconvertRemToPx(2.5)%7Dpx%60%0A%20%20%7D%2C%20%7B%7D)%3B%0A%20%20animate(trigger.querySelector('.accordion-item_trigger_icon_line.vertical')%2C%20%7B%0A%20%20%20%20transform%3A%20'translate(-50%25%2C%20-50%25)%20rotate(-90deg)'%2C%0A%20%20%7D%2C%20%7B%7D)%3B%0A%20%20if%20(contentLinks)%20%7B%0A%20%20%09contentLinks.forEach((link)%20%3D%3E%20link.setAttribute('tabindex'%2C%20'0'))%3B%0A%20%20%7D%0A%7D%0Afunction%20closeAccordion(item)%20%7B%0A%09const%20trigger%20%3D%20item.querySelector('.accordion-item_trigger')%3B%0A%20%20const%20content%20%3D%20item.querySelector('.accordion-item_content')%3B%0A%20%20const%20contentLinks%20%3D%20content.querySelectorAll('a')%3B%0A%09trigger.setAttribute('aria-expanded'%2C%20'false')%3B%0A%20%20animate(content%2C%20%7B%0A%20%20%20%20maxHeight%3A%20'0px'%2C%0A%20%20%20%20paddingBottom%3A%200%0A%20%20%7D%2C%20%7B%7D)%0A%20%20animate(trigger.querySelector('.accordion-item_trigger_icon_line.vertical')%2C%20%7B%0A%20%20%20%20transform%3A%20'translate(-50%25%2C%20-50%25)%20rotate(0deg)'%2C%0A%20%20%7D%2C%20%7B%7D)%3B%0A%20%20if%20(contentLinks)%20%7B%0A%20%20%09contentLinks.forEach((link)%20%3D%3E%20link.setAttribute('tabindex'%2C%20'-1'))%3B%0A%20%20%7D%0A%7D%0Aaccordions.forEach((accordion)%20%3D%3E%20%7B%0A%09const%20items%20%3D%20Array.from(accordion.querySelectorAll('.accordion-item'))%3B%0A%20%20items.forEach((item%2C%20index)%20%3D%3E%20%7B%0A%20%20%09%0A%20%20%09const%20trigger%20%3D%20item.querySelector('.accordion-item_trigger')%3B%0A%20%20%20%20const%20contentLinks%20%3D%20item.querySelectorAll('.accordion-item_content%20a')%3B%0A%20%20%20%20if%20(contentLinks)%20%7B%0A%20%20%20%20%20%20contentLinks.forEach((link)%20%3D%3E%20link.setAttribute('tabindex'%2C%20'-1'))%3B%0A%20%20%20%20%7D%0A%20%20%09if%20(index%20%3D%3D%3D%200)%20%7B%0A%20%20%20%20%09openAccordion(item)%3B%0A%20%20%20%20%7D%0A%20%20%20%20trigger.addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%09e.preventDefault()%3B%0A%20%20%20%20%20%20if%20(trigger.getAttribute('aria-expanded')%20%3D%3D%3D%20'true')%20%7B%0A%20%20%20%20%20%20%09closeAccordion(item)%3B%0A%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20openAccordion(item)%3B%0A%20%20%20%20%20%20%20%20items.filter((_item)%20%3D%3E%20_item%20!%3D%3D%20item).forEach((other)%20%3D%3E%20closeAccordion(other)%20)%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D)%0A%7D)%0A%7D%0AinitAccordionAnimations()%3B%0A%0A%3C%2Fscript%3E"
          />
        </>
      )}
    </_Component>
  );
}
