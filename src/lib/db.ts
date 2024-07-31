import localforage from "localforage"

function Note(text: string): Note {
    return {
        id: crypto.randomUUID(),
        text
    }
}

export async function getNotes() {
    let list = []
    try {
        await localforage.iterate((item: Note) => {
            list.push(item)
        })
    } catch (error) {
        console.log(error)
    }
    return list
}

export function createNote(text: string) {
    const newNote = Note(text)
    localforage.setItem(newNote.id, newNote)
    return newNote
}
export function saveNote(note: Note) {
    localforage.setItem(note.id, note)
}
export function removeNote(id: string) {
    localforage.removeItem(id)
}
