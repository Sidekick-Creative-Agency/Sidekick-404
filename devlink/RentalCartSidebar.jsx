"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RentalCartSidebar.module.css";

export function RentalCartSidebar({ as: _Component = _Builtin.Block }) {
  return (
    <_Component
      className={_utils.cx(_styles, "cart-sidebar-container")}
      tag="div"
    >
      <_Builtin.Block className={_utils.cx(_styles, "cart-sidebar")} tag="div">
        <_Builtin.List
          className={_utils.cx(_styles, "cart-sidebar_list")}
          tag="ul"
          unstyled={true}
        >
          <_Builtin.ListItem />
        </_Builtin.List>
        <_Builtin.Block
          className={_utils.cx(_styles, "cart-sidebar_button-container")}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "button", "rental_contact-button")}
            button={false}
            aria-label="Add to Cart"
            id="add-to-cart"
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block tag="div">{"Submit Rental"}</_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "button-hover-overlay")}
              tag="div"
            />
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "cart-sidebar_button")}
        tag="div"
      >
        <_Builtin.Link
          className={_utils.cx(_styles, "cart-button")}
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {""}
        </_Builtin.Link>
        <_Builtin.Block
          className={_utils.cx(_styles, "cart-button_item-count")}
          tag="div"
        >
          {"0"}
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "cart-sidebar-logic")}
        value="%3Cscript%3E%0Adocument.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%09updateCartSidebar()%3B%0A%20%20const%20sidebar%20%3D%20document.querySelector('.cart-sidebar')%3B%0A%20%20const%20cartButtonItemCount%20%3D%20document.querySelector('.cart-button_item-count')%3B%0A%20%20document.querySelector('.cart-button').addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%09if%20(cartButtonItemCount.innerText%20%3D%3D%3D%20'0')%20%7B%0A%20%20%09%09sidebar.classList.remove('open')%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20sidebar.classList.toggle('open')%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%7D)%3B%0A%0Afunction%20updateCartSidebar()%20%7B%0A%09const%20cartButtonItemCount%20%3D%20document.querySelector('.cart-button_item-count')%3B%0A%20%20const%20cartItems%20%3D%20JSON.parse(localStorage.getItem('cart_items'))%3B%0A%20%20const%20cartSidebarList%20%3D%20document.querySelector('.cart-sidebar_list')%3B%0A%20%20let%20cartItemCount%20%3D%200%3B%0A%20%20cartSidebarList.innerHTML%20%3D%20''%3B%0A%20%20if%20(cartItems%20%26%26%20cartItems.length%20%26%26%20cartItems.length%20%3E%200)%20%7B%0A%20%20%20%20cartItems.forEach((item)%20%3D%3E%20%7B%0A%20%20%20%20%09const%20itemParts%20%3D%20item.split('%3B')%3B%0A%20%20%20%20%20%20const%20title%20%3D%20itemParts%5B0%5D%3B%0A%20%20%20%20%20%20const%20image%20%3D%20itemParts%5B1%5D.replace('%20'%2C%20'')%3B%0A%20%20%20%20%20%20const%20price%20%3D%20Number(itemParts%5B2%5D.replace('%20'%2C%20''))%3B%0A%20%20%20%20%20%20const%20quantity%20%3D%20Number(itemParts%5B3%5D.replace('%20'%2C%20''))%3B%0A%20%20%20%20%20%20cartItemCount%20%2B%3D%20quantity%3B%0A%20%20%20%20%20%20const%20titleEl%20%3D%20document.createElement('div')%3B%0A%20%20%20%20%20%20titleEl.classList.add('cart-sidebar_list-item-title')%3B%0A%20%20%20%20%20%20titleEl.innerText%20%3D%20title%3B%0A%20%20%20%20%20%20const%20imageEl%20%3D%20document.createElement('img')%3B%0A%20%20%20%20%20%20imageEl.classList.add('cart-sidebar_list-item-image')%3B%0A%20%20%20%20%20%20imageEl.setAttribute('src'%2C%20image)%3B%0A%20%20%20%20%20%20const%20priceEl%20%3D%20document.createElement('div')%3B%0A%20%20%20%20%20%20priceEl.classList.add('cart-sidebar_list-item-price')%3B%0A%20%20%20%20%20%20priceEl.innerText%20%3D%20price%20*%20quantity%3B%0A%20%20%20%20%20%20const%20quantityEl%20%3D%20document.createElement('div')%3B%0A%20%20%20%20%20%20quantityEl.classList.add('cart-sidebar_list-item-quantity')%3B%0A%20%20%20%20%20%20quantityEl.innerText%20%3D%20%60Quantity%3A%20%24%7Bquantity%7D%60%3B%0A%20%20%20%20%20%20const%20listItemEl%20%3D%20document.createElement('li')%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20const%20trashEl%20%3D%20document.createElement('a')%3B%0A%20%20%20%20%20%20trashEl.setAttribute('href'%2C%20'%23')%3B%0A%20%20%20%20%20%20trashEl.classList.add('cart-sidebar_list-item-trash')%3B%0A%20%20%20%20%20%20trashEl.classList.add('w-button')%3B%0A%20%20%20%20%20%20trashEl.setAttribute('role'%2C%20'button')%3B%0A%20%20%20%20%20%20trashEl.setAttribute('aria-label'%2C%20'Remove%20item%20from%20cart')%3B%0A%20%20%20%20%20%20trashEl.innerText%20%3D%20'%EF%87%B8'%3B%0A%20%20%20%20%20%20trashEl.addEventListener('click'%2C%20()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20const%20updatedCartItems%20%3D%20cartItems.filter((cartItem)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%09return%20!cartItem.includes(title)%0A%20%20%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%20%20localStorage.setItem('cart_items'%2C%20JSON.stringify(updatedCartItems))%3B%0A%20%20%20%20%20%20%20%20updateCartSidebar()%3B%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20cartButtonItemCount.style.display%20%3D%20'flex'%3B%0A%20%20%09%09cartButtonItemCount.innerText%20%3D%20cartItemCount%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20const%20quantityPriceContainerEl%20%3D%20document.createElement('div')%3B%0A%20%20%20%20%20%20quantityPriceContainerEl.classList.add('cart-sidebar_list-item-quantity-price')%3B%0A%20%20%20%20%20%20quantityPriceContainerEl.append(quantityEl)%3B%0A%20%20%20%20%20%20quantityPriceContainerEl.append(priceEl)%3B%0A%20%20%20%20%20%20const%20rentalInfoEl%20%3D%20document.createElement('div')%3B%0A%20%20%20%20%20%20rentalInfoEl.classList.add('cart-sidebar_list-item-rental-info')%3B%0A%20%20%20%20%20%20rentalInfoEl.append(quantityPriceContainerEl)%3B%0A%20%20%20%20%20%20rentalInfoEl.append(trashEl)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20const%20textContainerEl%20%3D%20document.createElement('div')%3B%0A%20%20%20%20%20%20textContainerEl.classList.add('cart-sidebar_list-item-text-container')%3B%0A%20%20%20%20%20%20textContainerEl.append(titleEl)%3B%0A%20%20%20%20%20%20textContainerEl.append(rentalInfoEl)%3B%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20listItemEl.classList.add('cart-sidebar_list-item')%3B%0A%20%20%20%20%20%20listItemEl.append(imageEl)%3B%0A%20%20%20%20%20%20listItemEl.append(textContainerEl)%3B%0A%20%20%20%20%20%20cartSidebarList.append(listItemEl)%3B%0A%20%20%20%20%7D)%0A%20%20%7D%20else%20%7B%0A%20%20%09cartButtonItemCount.style.display%20%3D%20'none'%3B%0A%20%20%20%20cartButtonItemCount.innerText%20%3D%20'0'%3B%0A%20%20%20%20const%20sidebar%20%3D%20document.querySelector('.cart-sidebar')%3B%0A%20%20%20%20sidebar.classList.remove('open')%3B%0A%20%20%7D%0A%20%20%0A%7D%0A%3C%2Fscript%3E%0A%3Cstyle%3E%0A.cart-sidebar_list-item-price%3A%3Abefore%20%7B%0A%09content%3A%20%22%24%22%3B%0A%7D%0A.cart-sidebar_list-item-price%3A%3Aafter%20%7B%0A%09content%3A%20%22%20%2Fday%22%3B%0A%7D%0A.cart-sidebar_list-item%3Alast-child%20%7B%0A%09border-bottom%3A%20none%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Block
        className={_utils.cx(_styles, "rental_contact-modal")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "rental_contact-modal-bg")}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "rental_contact-modal_form-container")}
          tag="div"
        >
          <_Builtin.Heading tag="h2">{"Rental Form"}</_Builtin.Heading>
          <_Builtin.FormWrapper
            className={_utils.cx(_styles, "rental_contact-modal_form-block")}
          >
            <_Builtin.FormForm
              name="wf-form-Rental-Form-2"
              data-name="Rental Form"
              action="https://usebasin.com/f/43a48711210e"
              method="post"
              data-basin-form="true"
              data-basin-spam-protection="recaptcha"
              data-basin-success-id="success-message"
              data-basin-error-id="error-message"
              id="wf-form-Rental-Form-2"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "contact-form_fields")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field-container")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_5767f153-38b7-c03f-0aee-c0b4cf97133b-f660a209"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="Name"
                      maxLength={256}
                      data-name="Name"
                      placeholder="Name"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      id="Name"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="Email"
                      maxLength={256}
                      data-name="Email"
                      placeholder="Email"
                      disabled={false}
                      type="email"
                      required={true}
                      autoFocus={false}
                      id="Email"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field-container")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_5767f153-38b7-c03f-0aee-c0b4cf971340-f660a209"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="Phone"
                      maxLength={256}
                      data-name="Phone"
                      placeholder="Phone Number"
                      disabled={false}
                      type="tel"
                      required={true}
                      autoFocus={false}
                      id="Phone"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="Company"
                      maxLength={256}
                      data-name="Company"
                      placeholder="Company"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      id="Company"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field-container")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_94b498ff-4dde-3107-a03a-f647bd5269e0-f660a209"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="Address"
                      maxLength={256}
                      data-name="Address"
                      placeholder="Address Line 1"
                      disabled={false}
                      type="tel"
                      required={true}
                      autoFocus={false}
                      id="Address"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="Address-Line-2"
                      maxLength={256}
                      data-name="Address Line 2"
                      placeholder="Address Line 2"
                      disabled={false}
                      type="text"
                      required={false}
                      autoFocus={false}
                      id="Address-Line-2"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field-container")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_805b0995-176d-5b27-3264-174a904f0690-f660a209"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="City"
                      maxLength={256}
                      data-name="City"
                      placeholder="City"
                      disabled={false}
                      type="tel"
                      required={true}
                      autoFocus={false}
                      id="City"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="State"
                      maxLength={256}
                      data-name="State"
                      placeholder="State"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      id="State"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="Zip-Code"
                      maxLength={256}
                      data-name="Zip Code"
                      placeholder="Zip code"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      id="Zip-Code"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field-container")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_5767f153-38b7-c03f-0aee-c0b4cf971345-f660a209"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="Start-Date"
                      maxLength={256}
                      data-name="Start Date"
                      placeholder="Start Date"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      data-toggle="datepicker"
                      autoComplete="off"
                      id="Start-Date"
                    />
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "contact-form_input")}
                      name="End-Date"
                      maxLength={256}
                      data-name="End Date"
                      placeholder="End Date"
                      disabled={false}
                      type="text"
                      required={true}
                      autoFocus={false}
                      data-toggle="datepicker"
                      autoComplete="off"
                      id="End-Date"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "contact-form_field-container",
                    "hide"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormTextarea
                      name="Rental-Information"
                      maxLength={5000}
                      data-name="Rental Information"
                      required={false}
                      autoFocus={false}
                      id="Rental-Information"
                    />
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "contact-form_field-container")}
                  id={_utils.cx(
                    _styles,
                    "w-node-_415e0bec-75e7-8a4e-3a77-a019543e1444-f660a209"
                  )}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "contact-form_field")}
                    tag="div"
                  >
                    <_Builtin.FormBlockLabel
                      className={_utils.cx(_styles, "form-label")}
                      htmlFor="COI"
                    >
                      {"COI (Certificate of Insurance)"}
                    </_Builtin.FormBlockLabel>
                    <_Builtin.FormTextInput
                      className={_utils.cx(_styles, "text-field")}
                      name="COI"
                      maxLength={256}
                      data-name="COI"
                      placeholder="Example Text"
                      disabled={false}
                      type="text"
                      required={false}
                      autoFocus={false}
                      role="uploadcare-uploader"
                      id="COI"
                    />
                    <_Builtin.FormBlockLabel
                      className={_utils.cx(_styles, "form-field_description")}
                      htmlFor="COI-2"
                    >
                      {"If Sidekick already has your COI, skip this step"}
                    </_Builtin.FormBlockLabel>
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(
                    _styles,
                    "contact-form_submit-container"
                  )}
                  id={_utils.cx(
                    _styles,
                    "w-node-_5767f153-38b7-c03f-0aee-c0b4cf97134f-f660a209"
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
                    className={_utils.cx(
                      _styles,
                      "contact-form_submit-overlay"
                    )}
                    tag="div"
                  />
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.FormForm>
            <_Builtin.FormSuccessMessage
              className={_utils.cx(_styles, "success-message")}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "product-form_success-heading")}
                tag="div"
              >
                {"Thank you for reaching out!"}
                <br />
                {"We will be in contact with you shortly!"}
              </_Builtin.Block>
            </_Builtin.FormSuccessMessage>
            <_Builtin.FormErrorMessage
              className={_utils.cx(_styles, "error-message")}
            >
              <_Builtin.Block tag="div">
                {"Oops! Something went wrong while submitting the form."}
              </_Builtin.Block>
            </_Builtin.FormErrorMessage>
          </_Builtin.FormWrapper>
          <_Builtin.HtmlEmbed
            className={_utils.cx(_styles, "")}
            value="%3Cstyle%3E%0A.contact-form_submit-container%3Ahover%20.contact-form_submit-overlay%2C%20.contact-form_submit%3Afocus%20%2B%20.contact-form_submit-overlay%2C%20.contact-form_submit%3Afocus-visible%20%2B%20.contact-form_submit-overlay%0A%20%20%7B%0A%20%20%20%20-webkit-transform%3A%20translateX(101%25)%3B%0A%20%20%09transform%3A%20translateX(101%25)%3B%0A%20%20%7D%0A%20%20select%20%7B%0A%09appearance%3A%20none%3B%0A%20%20-webkit-appearance%3A%20none%3B%0A%20%20-moz-appearance%3A%20none%3B%0A%20%20border-radius%3A%200%3B%0A%7D%0A.contact-form_select-container%3A%3Aafter%20%7B%0A%09content%3A%20%22%EF%81%B8%22%3B%0A%20%20font-family%3A%20%22Fa%20Light%20300%22%3B%0A%20%20font-size%3A%2014px%3B%0A%20%20color%3A%20inherit%3B%0A%20%20position%3A%20absolute%3B%0A%20%20right%3A%208px%3B%0A%20%20top%3A%2050%25%3B%0A%20%20transform%3A%20translateY(-50%25)%3B%0A%7D%0A%5Bdata-toggle%3D%22datepicker%22%5D%20%7B%0A%09background-color%3A%20var(--dark-grey)%20!important%3B%0A%7D%0A%3C%2Fstyle%3E"
          />
          <_Builtin.Link
            className={_utils.cx(_styles, "rental_contact-modal-close")}
            button={true}
            aria-label="Close Rental Contact Form Modal"
            block=""
            options={{
              href: "#",
            }}
          >
            {""}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.HtmlEmbed
        className={_utils.cx(_styles, "rental_contact-modal-logic")}
        value="%3Cscript%3EUPLOADCARE_PUBLIC_KEY%20%3D%20'c03491ceb3c05771d6b0'%3B%3C%2Fscript%3E%0A%3Cscript%20src%3D%22https%3A%2F%2Fucarecdn.com%2Flibs%2Fwidget%2F3.x%2Fuploadcare.full.min.js%22%20data-integration%3D%22Webflow%22%3E%3C%2Fscript%3E%0A%3Cstyle%3E%0A.uploadcare--widget__button%20%7B%0A%09background-color%3A%20%23dc3f35%20!important%3B%0A%20%20transition%3A%20.2s%20ease%3B%0A%20%20border-radius%3A%20.25rem%20!important%3B%0A%7D%0A.uploadcare--widget__button%3Ahover%2C%20.uploadcare--widget__button%3Afocus%2C%20.uploadcare--widget__button%3Afocus-visible%20%7B%0A%09opacity%3A%2080%25%3B%0A%7D%0A.uploadcare--progress_type_canvas%20%7B%0A%09color%3A%20%233c8dc7%20!important%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cscript%20async%3E%0A%0Adocument.addEventListener('DOMContentLoaded'%2C%20()%20%3D%3E%20%7B%0A%09const%20openButton%20%3D%20document.querySelector('.rental_contact-button')%3B%0A%20%20const%20closeButton%20%3D%20document.querySelector('.rental_contact-modal-close')%3B%0A%20%20const%20modalBG%20%3D%20document.querySelector('.rental_contact-modal-bg')%3B%0A%20%20const%20contactModal%20%3D%20document.querySelector('.rental_contact-modal')%3B%0A%20%20const%20rentalInformationInput%20%3D%20document.getElementById('Rental-Information')%3B%0A%20%20let%20rentalInformation%20%3D%20'Rental%20Items%3A%5Cn'%3B%0A%20%20%20%20%0A%20%20document.querySelector('input%5Btype%3D%22submit%22%5D').addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20const%20startDate%20%3D%20new%20Date(document.getElementById('Start-Date').value)%3B%0A%20%20%20%20const%20endDate%20%3D%20new%20Date(document.getElementById('End-Date').value)%3B%0A%0A%20%20%20%20if%20(startDate%20%3E%20endDate)%20%7B%0A%20%20%20%20%20%20alert('Start%20Date%20cannot%20be%20after%20End%20Date')%3B%0A%20%20%20%20%20%20e.preventDefault()%3B%0A%20%20%20%20%20%20return%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%0A%20%20document.querySelector('.rental_contact-modal_form-block%20form').addEventListener('submit'%2C%20(e)%20%3D%3E%20%7B%0A%0A%20%20%20%20let%20rentalInformation%20%3D%20'Rental%20Items%3A%5Cn'%3B%0A%20%20%20%20const%20cartItems%20%3D%20JSON.parse(localStorage.getItem('cart_items'))%3B%0A%20%20%20%20cartItems.forEach((item)%20%3D%3E%20%7B%0A%20%20%20%20%20%20const%20itemInfo%20%3D%20item.split('%3B')%3B%0A%20%20%20%20%20%20const%20title%20%3D%20itemInfo%5B0%5D%3B%0A%20%20%20%20%20%20const%20price%20%3D%20itemInfo%5B2%5D.replace('%20'%2C%20'')%3B%0A%20%20%20%20%20%20const%20quantity%20%3D%20itemInfo%5B3%5D.replace('%20'%2C%20'')%3B%0A%20%20%20%20%20%20rentalInformation%20%2B%3D%20%60Item%3A%20%24%7Btitle%7D%5Cn%5CtQuantity%3A%20%24%7Bquantity%7D%5Cn%5CtPrice%20per%20unit%3A%20%24%7BNumber(price)%7D%20%2Fday%5Cn%5CtTotal%20Price%3A%20%24%7BNumber(price)%20*%20Number(quantity)%7D%20%2Fday%5Cn%60%3B%0A%20%20%20%20%7D)%3B%0A%20%20%20%20rentalInformationInput.value%20%3D%20rentalInformation%3B%0A%20%20%20%20localStorage.setItem('cart_items'%2C%20'%5B%5D')%3B%0A%20%20%20%20updateCartSidebar()%3B%0A%20%20%7D)%3B%0A%0A%20%20openButton.addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%09e.preventDefault()%3B%0A%20%20%09contactModal.classList.add('open')%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20closeButton.addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%09e.preventDefault()%3B%0A%20%20%09contactModal.classList.remove('open')%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20modalBG.addEventListener('click'%2C%20(e)%20%3D%3E%20%7B%0A%09%09e.preventDefault()%3B%0A%09%09contactModal.classList.remove('open')%3B%0A%20%20%7D)%3B%0A%20%20%0A%20%20%5BopenButton%2C%20closeButton%5D.forEach((item)%20%3D%3E%20%7B%0A%20%20%09item.addEventListener('keypress'%2C%20(e)%20%3D%3E%20%7B%0A%20%20%20%20%09if%20(e.key%20%3D%3D%3D%20'Enter')%20%7B%0A%20%20%20%20%20%20%09e.preventDefault()%3B%0A%20%20%20%20%20%20%09item.click()%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%20%20%7D)%3B%0A%7D)%3B%0A%0A%3C%2Fscript%3E%0A%3Cstyle%3E%0A%09.rental_contact-modal%20%7B%0A%20%20%09visibility%3A%20hidden%3B%0A%20%20%20%20transition%3A%20opacity%20.3s%20ease%2C%20visibility%20.3s%20ease%3B%0A%20%20%7D%0A%09.rental_contact-modal.open%20%7B%0A%20%20%09pointer-events%3A%20all%3B%0A%20%20%20%20opacity%3A%201%3B%0A%20%20%20%20visibility%3A%20visible%3B%0A%20%20%20%20transition%3A%20opacity%200s%3B%0A%20%20%7D%0A%20%20.rental_contact-modal.open%20.rental_contact-modal-bg%20%7B%0A%20%20%09opacity%3A%201%3B%0A%20%20%7D%0A%20%20.rental_contact-modal_form-container%20%7B%0A%20%20%09transform%3A%20translateY(300px)%3B%0A%20%20%7D%0A%20%20.rental_contact-modal.open%20.rental_contact-modal_form-container%20%7B%0A%20%20%09transform%3A%20translateY(0px)%3B%0A%20%20%7D%0A%3C%2Fstyle%3E"
      />
    </_Component>
  );
}
