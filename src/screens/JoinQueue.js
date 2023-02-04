import React from 'react'
import '../assets/styles/header.css'
import '../assets/styles/index.css'
function JoinQueue() {
    return (
        <section className="sec1">
            <h2>Join a Queue</h2>

            <form className="queueForm">
                <div className="form-group">
                    <label for="queueCode">Queue Code:</label>
                    <input type="text" className="form-control" name="queueCode" required />
                </div>
                <button type="submit" className="subBtn">Join</button>
            </form>
        </section>
    )
}

export default JoinQueue