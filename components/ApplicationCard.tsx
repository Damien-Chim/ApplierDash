'use-client'
import './ApplicationCard.css';
import { Application } from '@/types/Application';
// type - TypeScript keyword to define a custom type
// The type is called ApplicationCardProps

// the {company, ...} : ApplicationCardProps parameter is known as object destructuring
// pulling out values directly fromt the props so that they can be used
export default function ApplicationCard({
    company, location, role, notes
}: Application) {
    return (
        <div className='card'>
            <h2>{company}</h2>
            <p>{location}</p>
            <p>{role}</p>
            <p>{notes}</p>
        </div>
    )
}
