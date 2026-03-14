import { ApplicationDetails } from "@/types/ApplicationEntities";

export function parseAddApplicationFormData(formData: FormData): ApplicationDetails {
    const companyName = (formData.get("companyName") as string).trim();
    const location = (formData.get("location") as string).trim();
    const role = (formData.get("role") as string).trim();
    const notes = (formData.get("notes") as string).trim();

    const application: ApplicationDetails = {
        company: companyName,
        location: location,
        role: role,
        notes: notes
    }
    return application;

}