import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
      <div className="notes__main-content">
        <NotesAppBar />

        <div className="notes__content">
          <input
            type="text"
            placeholder="Some awesome title"
            className="notes__title-input"
            autoComplete="off"
          />
          <textarea
            placeholder="What happened today"
            className="notes__textarea"
          ></textarea>

          <div class="notes__image">
            <img
              src="https://img.freepik.com/foto-gratis/colorido-cielo-dramatico-nubes-al-atardecer_37874-1733.jpg?size=626&ext=jpg"
              alt="imagen"
            />
          </div>
        </div>
      </div>
    );
}
