import React from 'react';

function Gallery() {
    return (
        <div className="gallery">
            <h1>Gallery</h1>
            <h2> Hall of Fame</h2>
            <p> A classic 2002 Mustang GT named Midnight</p>
            <div className="row">
                <div classname="column">
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=ec194e65c7&attid=0.2&permmsgid=msg-f:1754946016477989126&th=185ad21a98284906&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9i7rb9jqWOjJ_W1J2I-YOpXIb1YdpGCxUUqUfnmwO71AgWqHN-ODbBAJFI7035WyBlqANd-oz678-Jieq_3zaLGVHUxynFTAQC64VMN0mjO3XBzzBdNX5nUmc&disp=emb&realattid=185ad20cc379743d5a3"
                    style={{ width: "100%"}} />
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=ec194e65c7&attid=0.1&permmsgid=msg-f:1754946016477989126&th=185ad21a98284906&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9q-L0AKaFmNJEHzg-uVJxejZBeF_YkaKdh7pf7_3gg540tSUiB121H__Gafbo4OTurRLWtZ36S6jIQbsLtnSxV9GmTCTQ-mpqo9XjqTv-VnyPZBDYCTvsRDGI&disp=emb&realattid=185ad20a7664e3205da1"
                    style={{ width: "100%" }} />
                </div>
                <div className="column">
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=ec194e65c7&attid=0.3&permmsgid=msg-f:1754946016477989126&th=185ad21a98284906&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ93nKps6MpR8R0R2EtgGddiEac5M4bmBvWQnhpzCrjTgFzp-WmH-IcxcOLnr9meZbnroSmzHPjWHUyDr3SBIg7xqRDRyPeh5QmG5_gLnx5nRbHbEvtuzVPbZD4&disp=emb&realattid=185ad20e89a879820e84"
                    style={{ width: "100%"}} />
                    <img src="https://mail.google.com/mail/u/0?ui=2&ik=ec194e65c7&attid=0.4&permmsgid=msg-f:1754946016477989126&th=185ad21a98284906&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-533yw9TuIgmkd3"
                    style={{ width: "100%"}} />
                </div>
            </div>
        </div>
    );
}

export default Gallery;