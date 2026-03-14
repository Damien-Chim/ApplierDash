'use client'
import './ApplicationCard.css';
import { ApplicationObject } from '@/types/ApplicationEntities';

type ApplicationCardProps = {
    app: ApplicationObject,
    handleDelete: (idToDelete: string) => void

}
// the {company, ...} : ApplicationCardProps parameter is known as object destructuring
// pulling out values directly fromt the props so that they can be used

export default function ApplicationCard({
    app, handleDelete
}: ApplicationCardProps) {

    return (
        <div id={app.application_id} className='card'>
            <button onClick={() => {handleDelete(app.application_id)}} className="border-4 border-indigo-500">Delete Application</button>
            <h2>{app.company}</h2>
            <p>{app.location}</p>
            <p>{app.role}</p>
            <p>{app.notes}</p>
            <p>{app.timestamp}</p>
        </div>
    )
}
