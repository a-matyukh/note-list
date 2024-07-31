import localforage from "localforage"

function Note(text: string): Note {
    return {
        id: crypto.randomUUID(),
        text
    }
}

export async function getNotes() {
    let notes = []
    try {
        await localforage.iterate((note: Note) => {
            notes.push(note)
        })
    } catch (error) {
        console.log(error)
    }
    return notes
}

export function createNote(text: string) {
    const newNote = Note(text)
    localforage.setItem(newNote.id, newNote)
    return newNote
}
export function editNote(userid: UserID, newNote: Note) {
	// let notes = db[userid]
    // notes = notes.map(note => {
    //     if (note.id === newNote.id) note = newNote
    //     return note
    // })
    // db[userid] = notes
    // console.log(db)
}
export function removeNote(userid: UserID, removedNote: Note) {
	// let notes = db[userid]
    // notes = notes.filter(note => note.id != removedNote.id)
    // db[userid] = notes
    // console.log(db)
}
