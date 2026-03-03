'use-client'
import './ApplicationCard.css';
// type - TypeScript keyword to define a custom type
// The type is called ApplicationCardProps
type ApplicationCardProps = {
    // field : data type of field
    // enforces data consistency
    // the card cannot exist unless you give a value for all the fields
    company: String
    role: String
    status: String
    date: String
}

// the {company, ...} : ApplicationCardProps parameter is known as object destructuring
// pulling out values directly fromt the props so that they can be used
export default function ApplicationCard({
    company, role, status, date
}: ApplicationCardProps) {
    return (
        <div className='card'>
            <h2>{company}</h2>
            <p>{role}</p>
            <p>{status}</p>
            <p>{date}</p>
        </div>
    )
}
