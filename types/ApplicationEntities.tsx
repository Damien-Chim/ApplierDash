'user client'
// type - TypeScript keyword to define a custom type
// The type is called ApplicationCardProps
export type ApplicationInput = {
    // field : data type of field
    // enforces data consistency
    // the card cannot exist unless you give a value for all the fields
    company: String
    location: String
    role: String
    notes: String
}

export type ApplicationObject = {
    application_id: string
    timestamp: String
    company: String
    location: String
    role: String
    notes: String
}

