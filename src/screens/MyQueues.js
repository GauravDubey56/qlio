import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { server, accessToken } from '../constants'
import '../assets/styles/header.css'
import '../assets/styles/index.css'
async function fetchMyQueues() {
  const res = await axios.get(server + '/queue', accessToken());
  console.log(res.data)
  if (res.data) {
    
    console.log(res.data);
    return []
  } else return;
}
function MyQueues() {
  const location = useLocation();
  const action = location.action ? location.action : 'created';
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    const fetchQueues = async () => {
      const res = await axios.get(server + '/queue', accessToken());
      const data = res.data;
      const items = data.map(ele => {
        const link = `/queue/${ele.id}`
        return <li><Link to={link}>{ele.title}</Link></li>
      })
      setListItem(items);
    };
    fetchQueues();
}, []);
  console.log(listItem)
  return (
    <section className="sec1">
      <h2> Queues {action} by you</h2>
      <div className="queues">
        <ul>
          {listItem}
        </ul>
      </div>
      {action === 'joined' && <Link className="subBtn" to="/queue/created">Created Queues</Link>}
      {action === 'created' && <Link className="subBtn" to="/queue">Joined Queues</Link>}
    </section>
  )
}

export default MyQueues