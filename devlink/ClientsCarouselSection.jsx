"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ClientsCarouselSection.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1558":{"id":"e-1558","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-219","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1557"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":true,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698936129663}},"actionLists":{"a-219":{"id":"a-219","title":"Clients Carousel Transform","actionItemGroups":[{"actionItems":[{"id":"a-219-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":30000,"target":{"selector":".clients-carousel_carousel","selectorGuids":["abcb4160-f7f9-03b3-7bc5-ccbb96b5461c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-219-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":45000,"target":{"selector":".clients-carousel_carousel","selectorGuids":["abcb4160-f7f9-03b3-7bc5-ccbb96b5461c"]},"xValue":-50,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"id":"a-219-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".clients-carousel_carousel","selectorGuids":["abcb4160-f7f9-03b3-7bc5-ccbb96b5461c"]},"xValue":0,"xUnit":"%","yUnit":"PX","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1698936134788}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ClientsCarouselSection({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "section_clients-carousel")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "padding-section-large")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "clients-carousel")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "clients-carousel_heading-container")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "text-align-center")}
              tag="h2"
            >
              {"Some of our clients include:"}
            </_Builtin.Heading>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "clients-carousel_container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "clients-carousel_carousel")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.baylor.edu/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad04b00b7eb2d69dc4_Baylor.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.ritzcarlton.com/en/hotels/dalil-the-ritz-carlton-dallas-las-colinas/overview/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Luxurious white Ritz-Carlton hotel building with balconies and rooftop, set against a pale sky."
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/677c428ca22068717e449dba_Ritz%20Carlton.avif"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.omnihotels.com/hotels/austin-barton-creek",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Logo with stylized script spelling 'Omni Barton' in white on a dark rectangular background."
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/677c428c444787716a96de84_Omni%20Barton.avif"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.nelnetbank.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Nelnet company logo with stylized 'N' in green and blue gradient text."
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/677c428cc9799c6dc801d704_Nelnet.avif"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://centurionamerican.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad2480c2a5f21ef51d_Centurion.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.waco-texas.com/Departments/Airport",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Waco Regional Airport Logo"
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad670d06ceca380a6a_City%20of%20Waco.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.howmet.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7add21b52346fe3289c_Howmet.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.extracobanks.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad24e3ea63477dd159_Extraco.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.hfsindustrial.com/brands/huck.html",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad8e9b9c9581ebd3d1_Huck.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.lennar.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad98e2266deb3b4772_Lennar.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.omnihotels.com/hotels/pga-frisco",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7adfb481b1f01fcc321_Omni.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.txst.edu/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Texas State University Logo"
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad4f8e4fd7d5b05fc6_Texas%20State.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://senderopc.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Sendero Provisions Co. Logo"
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad44939f2d8c7ea0bc_Sendero.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://premier.care/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ae98e2266deb3b47e7_Premier.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.baylor.edu/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad04b00b7eb2d69dc4_Baylor.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.ritzcarlton.com/en/hotels/dalil-the-ritz-carlton-dallas-las-colinas/overview/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Luxurious white Ritz-Carlton hotel building with balconies and rooftop, set against a pale sky."
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/677c428ca22068717e449dba_Ritz%20Carlton.avif"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.omnihotels.com/hotels/austin-barton-creek",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Logo with stylized script spelling 'Omni Barton' in white on a dark rectangular background."
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/677c428c444787716a96de84_Omni%20Barton.avif"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.nelnetbank.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Nelnet company logo with stylized 'N' in green and blue gradient text."
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/677c428cc9799c6dc801d704_Nelnet.avif"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://centurionamerican.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad2480c2a5f21ef51d_Centurion.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.waco-texas.com/Departments/Airport",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Waco Regional Airport Logo"
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad670d06ceca380a6a_City%20of%20Waco.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.howmet.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7add21b52346fe3289c_Howmet.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.extracobanks.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad24e3ea63477dd159_Extraco.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.hfsindustrial.com/brands/huck.html",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad8e9b9c9581ebd3d1_Huck.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.lennar.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad98e2266deb3b4772_Lennar.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.omnihotels.com/hotels/pga-frisco",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7adfb481b1f01fcc321_Omni.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://www.txst.edu/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Texas State University Logo"
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad4f8e4fd7d5b05fc6_Texas%20State.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://senderopc.com/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Sendero Provisions Co. Logo"
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ad44939f2d8c7ea0bc_Sendero.Logo.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "clients-carousel_link")}
                button={false}
                block="inline"
                options={{
                  href: "https://premier.care/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "clients-carousel_image")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://cdn.prod.website-files.com/62e3e9ad20cf160251505194/6543e7ae98e2266deb3b47e7_Premier.Logo.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "clients-carousel_overlay")}
              tag="div"
            />
            <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A.clients-carousel_container%7B%0A%09width%3A%20max-content%3B%0A%7D%0A%3C%2Fstyle%3E" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
