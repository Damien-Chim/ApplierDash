'use-client'
import React from "react";
import SuccessNotification from "./SuccessNotification";
import { useState } from "react";
type ModalProps = {
    isOpen: boolean

    // closeModal must be a function that takes in no parameter and returns nothing
    // () set of parameters that the function takes
    // => returns
    // void (nothing)
    closeModal: () => void
    setShowSuccessNotification: () => void
    closeSuccessNotification: () => void
}


export default function Modal({
    isOpen, closeModal, setShowSuccessNotification, closeSuccessNotification
}: ModalProps) {
    // return nothing, i.e.: modal will not open if isOpen is false
    if (!isOpen) { return null; }

    // otherwise: return this
    return (
        <div style={overlayStyle} onClick={closeModal}>
            {/* and within this overlay background, is a modal card that will appear */}
            {/* {e.stopPropagation prevents the modal from closing when clicking inside} */}
            <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
                <h2>Add Internship</h2>

                <input placeholder="Company Name" style={inputStyle} />
                <input placeholder="Location" style={inputStyle} />
                <input placeholder="Role" style={inputStyle} />
                <textarea placeholder="Notes" style={inputStyle} />



                <button onClick={() => {
                    setShowSuccessNotification()
                    closeModal()

                    setTimeout(() => {
                        closeSuccessNotification()
                    }, 2000)

                }}>Save</button>
                <button onClick={closeModal}>Cancel</button>

            </div>
        </div>
    )
}

// closeModal (without parentheses) is just a pointer to the actual function that closes the modal
// React will call the function pointed to by the closeModal pointer immediately when button is pressed

// closeModal() (with parentheses) is the actual function call
// wrapping it in () => {...} delays the function call until the button is actually pressed
// necessary for multiple actions

const overlayStyle: React.CSSProperties = {
    // the top and left properties are used to precisely position an element
    // that has its position property set to anything other than the default "static"
    // top specifies the vertical position of the element from a reference point, i.e.: top edge
    // left specifies the horizonal position of the element from a reference point, i.e.: left edge
    position: "fixed",
    top: 0,
    left: 0,
    // 100vw and 100vh means 100% of the width and height of the viewport respectively
    // used to make elements span the full width of the screen, regardless of their
    width: "100vw",
    height: "100vh",

    backgroundColor: "rgba(0, 0, 0, 0.5)",

    // this three combinations are used to center child items
    // both horizontally and vertically
    // display : "flex" transform the container into a flex container, 
    // enabling flexbox layout for its children
    // justifyContent : "center" aligns the flex item along the main axis (horizontal) to the center of the container
    // alignItems: "center" aligns the flex item along the cross axis (vertical) to the center of the container
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const modalStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
};

const inputStyle: React.CSSProperties = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
};