"use client";
import ApplicationCard from "@/components/ApplicationCard";
import AddApplicationModal from "@/components/AddApplicationModal";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import SuccessNotification from "@/components/SuccessNotification";
import { ApplicationInput, ApplicationObject } from "@/types/ApplicationEntities";
import Navbar from "@/components/Navbar";
import { deleteApplication, getApplications } from "@/lib/api";

export default function DashboardPage() {
    const [showAddApplicationModal, setShowAddApplicationModal] = useState(false);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);
    const [applications, setApplications] = useState<ApplicationObject[]>([]);

    useEffect(() => {
        async function loadApplications() {
            const data = await getApplications();
            setApplications(data.reverse());
        }
        loadApplications()
    }, [])

    async function handleDelete(applicationId: string) {
        const data = await deleteApplication(applicationId);
        setApplications(data.reverse());
    }

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
                {applications.map((app) => (
                    <ApplicationCard
                        key={app.application_id}
                        app={app}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}