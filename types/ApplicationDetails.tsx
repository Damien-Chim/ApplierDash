
// type - TypeScript keyword to define a custom type
// The type is called ApplicationCardProps
export type ApplicationDetails = {
    // field : data type of field
    // enforces data consistency
    // the card cannot exist unless you give a value for all the fields
    company: String
    location: String
    role: String
    notes: String
}