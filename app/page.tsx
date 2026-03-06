"use client";
import ApplicationCard from "@/components/ApplicationCard";
import Modal from "@/components/Modal";
import { useState } from "react";
import { Button } from "@mui/material";
import SuccessNotification from "@/components/SuccessNotification";
export default function Home() {
  // using useState hook to track the state of the modal card (shown/not shown)
  // Initial value of showModal = false
  // setShowModal is a function that will change value of showModal
  const [showModal, setShowModal] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  return (
    <div>
      {
        // create an add internship button, when it is pressed
        // it will trigger the useState hook to set the show modal to true
      }

      <Button variant="contained" onClick={() => setShowModal(true)}>Add Internship</Button>
      {/* Recall that closeModal will take a function */}
      {/* and that function should be something that sets setShowModal to false */}
      <Modal isOpen={showModal} closeModal={() => setShowModal(false)} setShowSuccessNotification={setShowSuccessNotification} />
      <SuccessNotification isShown={showSuccessNotification} />
      <div className="flex h-100 w-full overflow-x-auto">
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