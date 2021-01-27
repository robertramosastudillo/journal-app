import React from 'react'

export const JournalEntry = () => {
    return (
      <div className="journal__entry pointer">
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://www.ngenespanol.com/wp-content/uploads/2018/08/La-imagen-m%C3%A1s-bella-del-espacio.jpg)",
          }}
        ></div>
        <div className="journal__entry-body">
          <p className="journal__entry-title">Un nuevo día</p>
          <p className="journal__entry-content">Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="journal__entry-date-box">
            <span>Monday</span>
            <h4>28</h4>
        </div>
      </div>
    );
}
