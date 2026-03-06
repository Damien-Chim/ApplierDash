'use-client'
import React from "react";
import SuccessNotification from "./SuccessNotification";
import { useState } from "react";
import { Button } from "@mui/material";
import './Modal.css';

type ModalProps = {
    isOpen: boolean

    // closeModal must be a function that takes in no parameter and returns nothing
    // () set of parameters that the function takes
    // => returns
    // void (nothing)
    closeModal: () => void
    setShowSuccessNotification: (value: boolean) => void
}


export default function Modal({
    isOpen, closeModal, setShowSuccessNotification
}: ModalProps) {

    function handleSubmit(formData: FormData) {
        const companyName = formData.get("companyName");
        const location = formData.get("location");
        const role = formData.get("role");
        const notes = formData.get("notes");

        setShowSuccessNotification(true)
        closeModal()

        setTimeout(() => {
            setShowSuccessNotification(false)
        }, 2000)

    }
    // return nothing, i.e.: modal will not open if isOpen is false
    if (!isOpen) { return null; }

    // otherwise: return this
    return (
        <div style={overlayStyle} onClick={closeModal}>
            {/* and within this overlay background, is a modal card that will appear */}
            {/* {e.stopPropagation prevents the modal from closing when clicking inside} */}
            <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
                <h2>Add Internship</h2>
                <form action={handleSubmit}>

                    <input className="w-full mb-3" name="companyName" placeholder="Company Name" style={inputStyle} />

                    <input className="w-full mb-3" name="location" placeholder="Location" style={inputStyle} />

                    <input className="w-full mb-3" name="role" placeholder="Role" style={inputStyle} />

                    <textarea className="w-full mb-3" name="notes" placeholder="Notes" style={inputStyle} />

                    <Button className="mui-button" type="submit" variant="contained" color="success">Save</Button>
                    <Button className="mui-button" variant="contained" color="error" onClick={closeModal}>Cancel</Button>
                </form>
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