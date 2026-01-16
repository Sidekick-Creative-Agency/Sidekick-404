"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./StickyContactForm.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-1545":{"id":"e-1545","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-212","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1546"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"297a435b-d570-0a1c-e2e8-bad5ce4ae662","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"297a435b-d570-0a1c-e2e8-bad5ce4ae662","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698179431767},"e-1547":{"id":"e-1547","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-213","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1548"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"297a435b-d570-0a1c-e2e8-bad5ce4ae665","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"297a435b-d570-0a1c-e2e8-bad5ce4ae665","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698179891683},"e-1550":{"id":"e-1550","name":"","animationType":"custom","eventTypeId":"PAGE_FINISH","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-214","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-1549"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698180397801}},"actionLists":{"a-212":{"id":"a-212","title":"Sticky Contact Modal Close","actionItemGroups":[{"actionItems":[{"id":"a-212-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"PARENT","selector":".sticky-contact_form-wrapper","selectorGuids":["3e56d7d7-a6a2-9bb9-ba72-71ad2a11762b"]},"yValue":300,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-212-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"PARENT","selector":".sticky-contact_overlay","selectorGuids":["f47af469-eef9-946e-4ce3-ea7685b4bde5"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-212-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".sticky-contact_overlay","selectorGuids":["f47af469-eef9-946e-4ce3-ea7685b4bde5"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1698179441449},"a-213":{"id":"a-213","title":"Sticky Contact Modal Open","actionItemGroups":[{"actionItems":[{"id":"a-213-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".sticky-contact_form-wrapper","selectorGuids":["3e56d7d7-a6a2-9bb9-ba72-71ad2a11762b"]},"yValue":300,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]},{"actionItems":[{"id":"a-213-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".sticky-contact_overlay","selectorGuids":["f47af469-eef9-946e-4ce3-ea7685b4bde5"]},"value":"flex"}}]},{"actionItems":[{"id":"a-213-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"ease","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".sticky-contact_overlay","selectorGuids":["f47af469-eef9-946e-4ce3-ea7685b4bde5"]},"value":1,"unit":""}},{"id":"a-213-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"ease","duration":400,"target":{"selector":".sticky-contact_form-wrapper","selectorGuids":["3e56d7d7-a6a2-9bb9-ba72-71ad2a11762b"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1698179903772},"a-214":{"id":"a-214","title":"Sticky Contact Button Entrance","actionItemGroups":[{"actionItems":[{"id":"a-214-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"297a435b-d570-0a1c-e2e8-bad5ce4ae665"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-214-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"ease","duration":500,"target":{"id":"297a435b-d570-0a1c-e2e8-bad5ce4ae665"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1698180409686}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function StickyContactForm({
  as: _Component = _Builtin.Block,
  visibility,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return visibility ? (
    <_Component className={_utils.cx(_styles, "sticky-contact")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "sticky-contact_open-button", "button")}
        data-w-id="297a435b-d570-0a1c-e2e8-bad5ce4ae665"
        tag="div"
        tabIndex="0"
        aria-label="close modal"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "sticky-contact_open-button-text")}
          tag="div"
        >
          {"Book a Call"}
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "sticky-contact_open-button-overlay",
            "button-hover-overlay"
          )}
          tag="div"
        />
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "sticky-contact_overlay")}
        tag="div"
      >
        <_Builtin.FormWrapper
          className={_utils.cx(_styles, "sticky-contact_form-wrapper")}
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "sticky-contact-form_heading")}
            tag="h2"
          >
            {"Contact Us"}
          </_Builtin.Heading>
          <_Builtin.FormForm
            className={_utils.cx(_styles, "sticky-contact-form_form")}
            name="wf-form-Sticky-Contact-Form-2"
            data-name="Sticky Contact Form"
            action="https://usebasin.com/f/ccba33631bab"
            method="post"
            data-basin-form="true"
            data-basin-spam-protection="recaptcha"
            data-basin-success-id="sticky-contact-form_success-container"
            data-basin-error-id="sticky-contact-form_error-container"
            id="wf-form-Sticky-Contact-Form-2"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "sticky-contact-form_fields")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_field-container")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6748b30d-b008-9670-1d78-2ccd94878a4d-ce4ae62b"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field")}
                  tag="div"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "contact-form_input")}
                    name="name-2"
                    maxLength={256}
                    data-name="Name 2"
                    placeholder="Name"
                    disabled={false}
                    type="text"
                    required={true}
                    autoFocus={false}
                    id="name-2"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field")}
                  tag="div"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "contact-form_input")}
                    name="email-2"
                    maxLength={256}
                    data-name="Email 2"
                    placeholder="Email"
                    disabled={false}
                    type="email"
                    required={true}
                    autoFocus={false}
                    id="email-2"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_field-container")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6748b30d-b008-9670-1d78-2ccd94878a52-ce4ae62b"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field")}
                  tag="div"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "contact-form_input")}
                    name="Phone-2"
                    maxLength={256}
                    data-name="Phone 2"
                    placeholder="(000) 000-0000"
                    disabled={false}
                    type="tel"
                    required={true}
                    autoFocus={false}
                    id="Phone-2"
                  />
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "contact-form_select-container"
                  )}
                  tag="div"
                >
                  <_Builtin.FormSelect
                    className={_utils.cx(_styles, "contact-form_select")}
                    name="referral-2"
                    data-name="Referral 2"
                    required={true}
                    multiple={false}
                    id="referral-2"
                    options={[
                      {
                        t: "How did you hear about us?",
                        v: "",
                      },
                      {
                        t: "Social Media",
                        v: "Social Media",
                      },
                      {
                        t: "Sidekick Employee",
                        v: "Friend of Employee",
                      },
                      {
                        t: "Sidekick Client",
                        v: "Client Referral",
                      },
                      {
                        t: "Search Engine",
                        v: "Google or Search Engine",
                      },
                    ]}
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_field-container")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field")}
                  tag="div"
                >
                  <_Builtin.FormTextInput
                    className={_utils.cx(_styles, "contact-form_input")}
                    name="Company"
                    maxLength={256}
                    data-name="Company"
                    placeholder="Company Name"
                    disabled={false}
                    type="text"
                    required={true}
                    autoFocus={false}
                    id="Company-2"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_field-container")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6748b30d-b008-9670-1d78-2ccd94878a57-ce4ae62b"
                )}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field")}
                  tag="div"
                >
                  <_Builtin.FormTextarea
                    className={_utils.cx(_styles, "contact-form_textarea")}
                    name="Description"
                    maxLength={5000}
                    data-name="Description"
                    placeholder="Tell us about your project or inquiry"
                    required={true}
                    autoFocus={false}
                    minLength="10"
                    id="Description-2"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_submit-container")}
                id={_utils.cx(
                  _styles,
                  "w-node-_6748b30d-b008-9670-1d78-2ccd94878a5c-ce4ae62b"
                )}
                tag="div"
              >
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "contact-form_submit")}
                  type="submit"
                  value="Submit"
                  data-wait="Please wait..."
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_submit-overlay")}
                  tag="div"
                />
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.FormForm>
          <_Builtin.FormSuccessMessage
            className={_utils.cx(
              _styles,
              "sticky-contact-form_success-container"
            )}
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "contact-form_success-heading")}
              tag="h2"
            >
              {"Thank You!"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-align-left",
                "font-weight-light"
              )}
              tag="div"
            >
              {"Thanks for reaching out to us. We'll be in touch shortly."}
            </_Builtin.Block>
          </_Builtin.FormSuccessMessage>
          <_Builtin.FormErrorMessage
            className={_utils.cx(
              _styles,
              "sticky-contact-form_error-container"
            )}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "contact-form_error")}
              tag="div"
            >
              {"Something went wrong while submitting the form."}
              <br />
              {"Please try again."}
            </_Builtin.Block>
          </_Builtin.FormErrorMessage>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "")}
            value="%3Cstyle%3E%0A.contact-form_submit-container%3Ahover%20.contact-form_submit-overlay%2C%20.contact-form_submit%3Afocus%20%2B%20.contact-form_submit-overlay%2C%20.contact-form_submit%3Afocus-visible%20%2B%20.contact-form_submit-overlay%0A%20%20%7B%0A%20%20%20%20-webkit-transform%3A%20translateX(101%25)%3B%0A%20%20%09transform%3A%20translateX(101%25)%3B%0A%20%20%7D%0A.contact-form_select-container%20select%20%7B%0A%09appearance%3A%20none%3B%0A%20%20-webkit-appearance%3A%20none%3B%0A%20%20-moz-appearance%3A%20none%3B%0A%20%20border-radius%3A%200%3B%0A%7D%0A.contact-form_select-container%3A%3Aafter%20%7B%0A%09content%3A%20%22%EF%81%B8%22%3B%0A%20%20font-family%3A%20%22Fa%20Light%20300%22%3B%0A%20%20font-size%3A%2014px%3B%0A%20%20color%3A%20inherit%3B%0A%20%20position%3A%20absolute%3B%0A%20%20right%3A%208px%3B%0A%20%20top%3A%2050%25%3B%0A%20%20transform%3A%20translateY(-50%25)%3B%0A%7D%0A%09.sticky-contact_open-button%3Ahover%20.sticky-contact_open-button-overlay%20%7B%0A%20%20%09left%3A%200%25%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "sticky-contact_close-button")}
            data-w-id="297a435b-d570-0a1c-e2e8-bad5ce4ae662"
            tag="div"
            tabIndex="0"
          >
            <_Builtin.Block tag="div">{""}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.FormWrapper>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "html-embed-4")}
        value="%3Cscript%20src%3D%22https%3A%2F%2Fjs.usebasin.com%2Fv2.3.0.min.js%22%20async%3E%3C%2Fscript%3E%0A%3Cscript%3E%0A%09document.querySelector('.contact-form_submit').addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%09document.querySelector('.sticky-contact_overlay').classList.add('active')%0A%20%20%20%20%24(%22body%22).addClass(%22no-scroll%22)%3B%0A%20%20%7D)%0A%20%20document.querySelector('.sticky-contact_close-button').addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%09document.querySelector('.sticky-contact_overlay').classList.remove('active')%0A%20%20%20%20%24(%22body%22).removeClass(%22no-scroll%22)%3B%0A%20%20%7D)%0A%20%20document.querySelector('.sticky-contact_close-button').addEventListener('keydown'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%09if%20(e.keyCode%20%3D%3D%3D%2013)%20%7B%0A%20%20%20%20%20%20e.target.click()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%0A%20%20document.querySelector('.sticky-contact_open-button').addEventListener('keydown'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%09if%20(e.keyCode%20%3D%3D%3D%2013)%20%7B%0A%20%20%20%20%20%20e.target.click()%3B%0A%20%20%20%20%7D%0A%20%20%7D)%0A%20%20%0A%20%20document.querySelectorAll(%22.contact-form_field%22).forEach((field)%20%3D%3E%20%7B%0A%20%20%09field.addEventListener(%22focus%22%2Cfunction()%20%7B%0A%20%09%09%09dataLayer.push(%7B%0A%20%20%09%09%09event%3A%20%22sticky_contact_form_start%22%2C%0A%20%20%20%20%09%09data%3A%20field.getAttribute('id')%0A%20%20%09%09%7D)%0A%20%20%20%20%7D)%0A%20%20%7D)%20%0A%3C%2Fscript%3E"
      />
    </_Component>
  ) : null;
}
