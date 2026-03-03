"use client";
import { useState } from "react";
export default function Home() {
  // using useState hook to track the state of the modal card (shown/not shown)
  // Initial value of showModal = false
  // setShowModal is a function that will change value of showModal
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {
        // create an add internship button, when it is pressed
        // it will trigger the useState hook to set the show modal to true
      }
      <button onClick={() => setShowModal(true)}>Add Internship</button>

      {
        // true && jsx --> jsx
        // false && jsc --> nothing
      }
      {
        showModal && (
          // creating the overlay background that will span the entire screen
          <div style={overlayStyle} onClick={() => setShowModal(false)}>
            {/* and within this overlay background, is a modal card that will appear */}
            {/* {e.stopPropagation prevents the modal from closing when clicking inside} */}
            <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
              <h2>Add Internship</h2>

              <input placeholder="Company Name" style={inputStyle} />
              <input placeholder="Location" style={inputStyle} />
              <input placeholder="Role" style={inputStyle} />
              <textarea placeholder="Notes" style={inputStyle} />

              <button>Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>

            </div>
          </div>
        )
      }
    </div>
  );
}

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