import { ApplicationDetails } from "@/types/ApplicationEntities";

export async function getApplications() {
    try {
        const response = await fetch(
            "http://127.0.0.1:8000/applications",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    }

    catch (error) {
        console.log(error);
    }
}

export async function addApplication(application: ApplicationDetails) {
    try {
        const response = await fetch(
            "http://127.0.0.1:8000/receive",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(application)
            }
        );
        if (!response.ok) {
            throw new Error("Error posting data");
        }
    }

    catch (error) {
        console.log(error);
    }
}