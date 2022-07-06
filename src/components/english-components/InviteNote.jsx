import React from "react";
import "./styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. T. Hussain Basha Sahab</h2>
                <h5>
                    H.No.: 1/541/120, NGO's Colony,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: +91 93xxx 58xxx, <br />
                    +91 99xxx 41xxx.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
