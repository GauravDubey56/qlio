import React, { useState } from 'react'
import PeopleList from './PeopleList'
import QueueActions from './QueueActions'

function QueueCard() {
    const [isAdmin, setIsAdmin] = useState(true)
    const [queue, setQueue] = useState({
        id: '11010',
        title: 'opopop',
        joinedUsersName: ['Gogo', 'klklkl', 'jkjkjkja'],
        maxLimit: 12
    })
    const userPos = 10
    return (
        <section className="secQue">
            <h2 className="queTitle">{queue.title}</h2>
            {!isAdmin &&
                <p class="belowTitle">Your position in the queue: <span id="userPos">{userPos}</span></p>
            }
            {isAdmin &&
                <p class="belowTitle">Queue Code: <span>{queue.id}</span></p>
            }
            {isAdmin &&
                <PeopleList />}
            <div class="commDiv">
                <p>Nunmber of people in the queue currently: <span id="remInQue">{queue.joinedUsersName.length}</span></p>
                <p>Max number of people who can join: {queue.maxLimit}</p>
            </div>
            {isAdmin &&
            <QueueActions />}
        </section>
    )
}

export default QueueCard