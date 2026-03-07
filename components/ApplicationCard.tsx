'use-client'
import './ApplicationCard.css';
import { ApplicationDetails } from '@/types/ApplicationDetails';

// the {company, ...} : ApplicationCardProps parameter is known as object destructuring
// pulling out values directly fromt the props so that they can be used
export default function ApplicationCard({
    company, location, role, notes
}: ApplicationDetails) {
    return (
        <div className='card'>
            <h2>{company}</h2>
            <p>{location}</p>
            <p>{role}</p>
            <p>{notes}</p>
        </div>
    )
}
