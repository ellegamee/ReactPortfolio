import React from "react"
import "./index.css"
import Header from "../../Layout/Header/index"

export default function archive() {
    return(
        <React.Fragment>
            <Header />
            <form className="form" action="https://getform.io/f/fe132cd1-39ba-4da6-ba07-f0c4523f0190" method="POST">
                <label className="contact_intro">Contact me</label>
                <input type="text" className="form__input" name="name" placeholder="Full Name" />
                <input type="text" className="form__input" name="email" placeholder="Email" />
                <input type="text" className="form__input" name="message" placeholder="Message" />
                <input type="submit" className="form__submit" value="Send" />
            </form>
        </React.Fragment>
    )
}
