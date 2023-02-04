import React from 'react'

function CheckIn() {
    const queue = {id : '101001'}
    return (
        <form class="checkBtn" action="/queue/checkIn" method="post">
            <button class="subBtn" type="submit" name="queueCode" value={queue.id}>Check-In</button>
        </form>
    )
}

export default CheckIn