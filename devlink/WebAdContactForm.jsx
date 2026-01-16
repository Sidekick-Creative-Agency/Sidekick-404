"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./WebAdContactForm.module.css";

export function WebAdContactForm({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "contact-form")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "contact-form_heading-container")}
        tag="div"
      >
        <_Builtin.Heading
          className={_utils.cx(_styles, "sticky-contact-form_heading")}
          tag="h2"
        >
          {"Book a Call!"}
        </_Builtin.Heading>
      </_Builtin.Block>
      <_Builtin.FormWrapper
        className={_utils.cx(_styles, "contact-form_form-wrapper")}
      >
        <_Builtin.FormForm
          className={_utils.cx(_styles, "contact-form")}
          name="wf-form-Contact-Form"
          data-name="Contact Form"
          method="get"
          id="wf-form-Contact-Form"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "contact-form_fields")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "contact-form_field-container")}
              id={_utils.cx(
                _styles,
                "w-node-f51d6808-26fd-264e-fc3a-e9f7d0e3d8f8-d0e3d8f1"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_field")}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "contact-form_input")}
                  autoFocus={false}
                  maxLength={256}
                  name="Name"
                  data-name="Name"
                  placeholder="Name"
                  type="text"
                  disabled={false}
                  required={true}
                  id="Name"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_field")}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "contact-form_input")}
                  autoFocus={false}
                  maxLength={256}
                  name="Email"
                  data-name="Email"
                  placeholder="Email"
                  type="email"
                  disabled={false}
                  required={true}
                  id="Email"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "contact-form_field-container")}
              id={_utils.cx(
                _styles,
                "w-node-f51d6808-26fd-264e-fc3a-e9f7d0e3d8fd-d0e3d8f1"
              )}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_field")}
                tag="div"
              >
                <_Builtin.FormTextInput
                  className={_utils.cx(_styles, "contact-form_input")}
                  autoFocus={false}
                  maxLength={256}
                  name="Phone"
                  data-name="Phone"
                  placeholder="(000) 000-0000"
                  type="tel"
                  disabled={false}
                  required={true}
                  id="Phone"
                />
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_select-container")}
                tag="div"
              >
                <_Builtin.FormSelect
                  className={_utils.cx(_styles, "contact-form_select")}
                  name="Referral"
                  data-name="Referral"
                  required={true}
                  multiple={false}
                  id="Referral"
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
                  autoFocus={false}
                  maxLength={256}
                  name="Company"
                  data-name="Company"
                  placeholder="Company Name"
                  type="text"
                  disabled={false}
                  required={true}
                  id="Company"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "contact-form_field-container")}
              id={_utils.cx(
                _styles,
                "w-node-f51d6808-26fd-264e-fc3a-e9f7d0e3d905-d0e3d8f1"
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
                  id="Description"
                />
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "contact-form_field-container")}
              id={_utils.cx(
                _styles,
                "w-node-f51d6808-26fd-264e-fc3a-e9f7d0e3d908-d0e3d8f1"
              )}
              tag="div"
            >
              <_Builtin.FormReCaptcha
                id={_utils.cx(
                  _styles,
                  "w-node-f51d6808-26fd-264e-fc3a-e9f7d0e3d909-d0e3d8f1"
                )}
                siteKey={process.env.DEVLINK_ENV_GOOGLE_RECAPTCHA_API_KEY}
              />
              <_Builtin.FormTextInput
                className={_utils.cx(_styles, "hide")}
                autoFocus={false}
                maxLength={256}
                name="field"
                placeholder="Example Text"
                type="text"
                disabled={false}
                required={false}
                id="honey"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "contact-form_submit-container")}
              id={_utils.cx(
                _styles,
                "w-node-f51d6808-26fd-264e-fc3a-e9f7d0e3d90a-d0e3d8f1"
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
          className={_utils.cx(_styles, "contact-form_success-container")}
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
          className={_utils.cx(_styles, "contact-form_error-container")}
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
          value="%3Cstyle%3E%0A.contact-form_submit-container%3Ahover%20.contact-form_submit-overlay%2C%20.contact-form_submit%3Afocus%20%2B%20.contact-form_submit-overlay%2C%20.contact-form_submit%3Afocus-visible%20%2B%20.contact-form_submit-overlay%0A%20%20%7B%0A%20%20%20%20-webkit-transform%3A%20translateX(101%25)%3B%0A%20%20%09transform%3A%20translateX(101%25)%3B%0A%20%20%7D%0A%20%20select%20%7B%0A%09appearance%3A%20none%3B%0A%20%20-webkit-appearance%3A%20none%3B%0A%20%20-moz-appearance%3A%20none%3B%0A%20%20border-radius%3A%200%3B%0A%7D%0A.contact-form_select-container%3A%3Aafter%20%7B%0A%09content%3A%20%22%EF%81%B8%22%3B%0A%20%20font-family%3A%20%22Fa%20Light%20300%22%3B%0A%20%20font-size%3A%2014px%3B%0A%20%20color%3A%20inherit%3B%0A%20%20position%3A%20absolute%3B%0A%20%20right%3A%208px%3B%0A%20%20top%3A%2050%25%3B%0A%20%20transform%3A%20translateY(-50%25)%3B%0A%7D%0A%3C%2Fstyle%3E"
        />
        <_Builtin.HtmlEmbed
          className={_utils.cx(_styles, "")}
          value="%3Cscript%3E%0Adocument.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%20%20Webflow.push(function()%20%7B%0A%20%20%20%20document.querySelector('.contact-form').addEventListener('submit'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20honeyPot%20%3D%20document.getElementById('honey')%3B%0A%20%20%20%20%20%20%20%20if%20(honeyPot.value)%20%7B%0A%20%20%20%20%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D)%0A%20%20%20%20document.querySelector('.contact-form_submit').addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20honeyPot%20%3D%20document.getElementById('honey')%3B%0A%20%20%20%20%20%20if%20(honeyPot.value)%20%7B%0A%20%20%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D)%3B%0A%7D)%0A%3C%2Fscript%3E"
        />
      </_Builtin.FormWrapper>
    </_Component>
  );
}
