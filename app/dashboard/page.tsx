"use client";
import ApplicationCard from "@/components/ApplicationCard";
import AddApplicationModal from "@/components/AddApplicationModal";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import SuccessNotification from "@/components/SuccessNotification";
import { ApplicationDetails } from "@/types/ApplicationDetails";
import Navbar from "@/components/Navbar";
import { getApplications } from "@/lib/api";

export default function DashboardPage() {
    const [showAddApplicationModal, setShowAddApplicationModal] = useState(false);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);
    const [applications, setApplications] = useState<ApplicationDetails[]>([]);

    useEffect(() => {
        async function loadApplications() {
            const data = await getApplications();
            setApplications(data.reverse());
        }
        loadApplications()
    }, [])

    return (
        <div>
            <Navbar />
            <Button variant="contained" onClick={() => setShowAddApplicationModal(true)}>+ Add Application</Button>
            <AddApplicationModal
                isOpen={showAddApplicationModal}
                setShowAddApplicationModal={setShowAddApplicationModal}
                setShowSuccessNotification={setShowSuccessNotification}
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
            </div>
        </div>
    );
}