import * as db from '../db'

type Mode = "select" | "create"

export class NoteList {

    mode: Mode = $state("select")

    async load() {
        this.notes = await db.getNotes()
    }
    changeMode(mode: Mode) {
        this.mode = mode
        if (mode === "create") this.input.focus()
    }

    input = null
    createNote() {
        this.notes.push(db.createNote(this.input.value))
        this.input.value = ""
        this.input.blur()
        this.mode = "select"
        console.log("ff")
    }

    notes: Note[] = $state([])
}