"use client";
import ApplicationCard from "@/components/ApplicationCard";
import Modal from "@/components/Modal";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import SuccessNotification from "@/components/SuccessNotification";
import { ApplicationDetails } from "@/types/ApplicationDetails";

export default function Home() {

  // using useState hook to track the state of the modal card (shown/not shown)
  // Initial value of showModal = false
  // setShowModal is a function that will change value of showModal
  const [showModal, setShowModal] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  // <Application[]> is a typescript type annotation
  // it tells the typescript that the state (applications) 
  // will contain an array of ApplicationDetails objects
  // setApplications is a function that will update the array of applications
  const [applications, setApplications] = useState<ApplicationDetails[]>([]);

  useEffect(() => {
    async function getApplications() {
      try {
        const response = await fetch("http://127.0.0.1:8000/applications");
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setApplications(data);
      }

      catch (error) {
        console.log(error);
      }
    }
    getApplications();
  }, [])


































  // useEffect(() => {
  //   async function loadApplications() {

  //     try {

  //       const res = await fetch("http://127.0.0.1:8000/applications");
  //       if (!res.ok) throw new Error("Failed to fetch applications");

  //       const data: ApplicationDetails[] = await res.json();
  //       setApplications(data);
  //     }

  //     catch (err) {
  //       console.error(err);
  //     }
  //   }

  //   loadApplications()
  // }, [])

  return (
    <div>
      <Button variant="contained" onClick={() => setShowModal(true)}>+ Add Application</Button>
      {
        // create an add internship button, when it is pressed
        // it will trigger the useState hook to set the show modal to true
      }


      {/* Recall that closeModal will take a function */}
      {/* and that function should be something that sets setShowModal to false */}
      <Modal
        isOpen={showModal}
        closeModal={() => setShowModal(false)}
        setShowSuccessNotification={setShowSuccessNotification}
        applications={applications}
        setApplications={setApplications}
      />

      <SuccessNotification isShown={showSuccessNotification} />
      <div className="flex h-100 w-full overflow-x-auto">
        {applications.map((app, index) => (
          <ApplicationCard
            key={index}
            company={app.company}
            location={app.location}
            role={app.role}
            notes={app.notes}
          />
        ))}
        {/* <ApplicationCard
          company={"Google"}
          location={"Barangaroo"}
          role={"SWE Intern"}
          notes={"01/06"}
        />

        <ApplicationCard
          company={"Microsoft"}
          location={"NSW"}
          role={"Graduate Offer"}
          notes={"24/05"}
        />

        <ApplicationCard
          company={"TikTok"}
          location={"CBD"}
          role={"Test Intern"}
          notes={"05/06"}
        />

        <ApplicationCard
          company={"Canva"}
          location={"CBD"}
          role={"Software Engineering Intern"}
          notes={"05/06"}
        />

        <ApplicationCard
          company={"The Trade Desk"}
          location={"Barangaroo Three Towers"}
          role={"Software developer intern"}
          notes={"05/06"}
        /> */}

      </div>
    </div>
  );
}