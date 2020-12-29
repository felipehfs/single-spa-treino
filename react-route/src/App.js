import React, { useState} from 'react'
import Parcel from 'single-spa-react/parcel';

export default function App() {
    const [task, setTask] = useState('')

    function handleSubmit(event) {
        event.preventDefault();
        dispatchEvent(new CustomEvent(
            "@teste/react-route/todo/add-task",
            {
                detail: {
                    id: Math.floor(Math.random() * 10000),
                    describe: task,
                },
            }
        ))
        setTask('');
    }

    return (
        <div>
            <form>
                <input type="text" 
                    value={task}
                    onChange={event => setTask(event.target.value)} />
                <button onClick={handleSubmit}>Add</button>
            </form>
            <Parcel 
                config={() => System.import("@teste/react-parcel")}
            />
        </div>
    )
}
