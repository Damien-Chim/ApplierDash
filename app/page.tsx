"use client";
import ApplicationCard from "@/components/ApplicationCard";
import Modal from "@/components/Modal";
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

      {/* Recall that closeModal will take a function */}
      {/* and that function should be something that sets setShowModal to false */}
      <Modal isOpen={showModal} closeModal={() => setShowModal(false)} />

      <div style={cardContainerStyle}>
        <ApplicationCard
          company={"Google"}
          role={"SWE Intern"}
          status={"Pending"}
          date={"01/06"}
        />

        <ApplicationCard
          company={"Microsoft"}
          role={"Graduate Offer"}
          status={"Interview"}
          date={"24/05"}
        />

        <ApplicationCard
          company={"TikTok"}
          role={"Test Intern"}
          status={"Rejected"}
          date={"05/06"}
        />

        <ApplicationCard
          company={"TikTok"}
          role={"Test Intern"}
          status={"Rejected"}
          date={"05/06"}
        />

        <ApplicationCard
          company={"TikTok"}
          role={"Test Intern"}
          status={"Rejected"}
          date={"05/06"}
        />

      </div>
    </div>
  );
}

const cardContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "row",
  height: "400px",
  width: "100%",
  overflowX: "auto"
}