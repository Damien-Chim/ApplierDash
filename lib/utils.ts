import { ApplicationInput, ApplicationObject } from "@/types/ApplicationEntities";
import { timeStamp } from "console";

export function parseAddApplicationFormData(formData: FormData): ApplicationInput {
    const companyName = (formData.get("companyName") as string).trim();
    const location = (formData.get("location") as string).trim();
    const role = (formData.get("role") as string).trim();
    const notes = (formData.get("notes") as string).trim();

    const application: ApplicationInput = {
        company: companyName,
        location: location,
        role: role,
        notes: notes
    }
    return application;

}

export function getAppObj(appInfo: ApplicationObject): ApplicationObject {
    const application_id = appInfo.application_id;
    const timestamp = appInfo.timestamp;
    const company = appInfo.company;
    const location = appInfo.location;
    const role = appInfo.role;
    const notes = appInfo.notes;

    const applicationObject: ApplicationObject = {

        application_id: application_id,
        timestamp: timestamp,
        company: company,
        location: location,
        role: role,
        notes: notes
    }

    return applicationObject
}