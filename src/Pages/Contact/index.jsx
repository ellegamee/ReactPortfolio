import React from "react"
import "./index.css"

export default function archive() {
    return(
        <React.Fragment>
            <p className="contact_intro">Contact me</p>

            <form className="form">
                <input type="text" className="form__input" placeholder="Full Name" />
                <input type="text" className="form__input" placeholder="Email" />
                <input type="text" className="form__input" placeholder="Message" />
                <input type="submit" className="form__submit" value="Send" />
            </form>
        </React.Fragment>
    )
}
