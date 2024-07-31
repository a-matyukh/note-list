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
export function saveNote(note: Note) {
    console.log(note)
    localforage.setItem(note.id, note)
}
export function removeNote(id: string) {
    localforage.removeItem(id)
}
