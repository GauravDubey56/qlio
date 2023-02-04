import React from 'react'

function PeopleList() {
    const people = [
        { id: 1, name: 'opopo' },
        { id: 2, name: 'opopop' }
    ]
    const listItem = people.map((person) => {
        return <li>
            {person.name}<abbr title="Remove User from Queue"><button class="rmBtn" id={person.id}><i class="fas fa-times"></i></button></abbr>
        </li>
    })
    const qrUrl = 'https://localhost:3000'
    const nextTurn = people[0].name
    return (
        <div class="DetailsFAd">
            <div class="left">
                <p>Next Turn: <span id="nexTurn">{nextTurn}</span></p>
                <p>People in the Queue:
                    <ol id="personList">
                        {listItem}
                    </ol>
                </p>
            </div>
            <div class="right">
                <img src={qrUrl} alt="" />
            </div>
        </div>
    )
}

export default PeopleList