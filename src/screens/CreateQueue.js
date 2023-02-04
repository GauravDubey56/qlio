import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { useContext } from 'react';
import { server, accessToken } from '../constants';
import '../assets/styles/header.css'
import '../assets/styles/index.css'
function CreateQueue() {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data);
        // eslint-disable-next-line no-console
        const body = {
            title : data.get('queueName'),
            maxLimit : data.get('maxLimit')
        }
        const res = await axios.post(server + '/queue', body, accessToken());
        if(res.data){
            navigate('../queue/created', {action : 'created'})
        }
    }
    return (
            <section className="sec1">
                <h2>Create a new Queue</h2>
                <form className="queueForm" onSubmit={handleSubmit}>
                    <div className="formGroup">
                        <label htmlFor="queueName">Queue Name:</label>
                        <input type="text" className="form-control" name="queueName" required />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="maxLimit">Max-Limit:</label>
                        <input type="number" className="form-control" name="maxLimit" required />
                    </div>
                    <button type="submit" className="subBtn">Create</button>
                </form>
            </section>
    )
}

export default CreateQueue