import React, { useState } from 'react'

function QueueActions() {
    const [isAdmin, setIsAdmin] = useState(true);
    const queue = {
        id : '90909',
        title : '90909kak',
        paused : false,
    }
    return (
        <div className="indiQFCon">
            <form className="">
                
              {queue.paused && <button className="subBtn creBtn" type="submit" name="queueCode" value={queue.id}>Resume Queue</button>}
            
              {!queue.paused && <button className="subBtn creBtn" type="submit" name="queueCode" value={queue.id}>Pause Queue</button>}
            </form>
            <form className="checkBtn" >
                <button className="subBtn indiQDBtn" type="submit" name="queueCode" value={queue.id}>Delete Queue</button>
            </form>
        </div>
    )
}

export default QueueActions