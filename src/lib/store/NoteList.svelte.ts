import * as db from '../db'

type Mode = "select" | "create" | "edit"

export class NoteList {

    mode: Mode = $state("select")
    changeMode(mode: Mode) {
        this.mode = mode
        if (mode === "create") this.input.focus()
    }
    isSelect() {
        return this.mode === "select"
    }
    isEdit() {
        return this.mode === "edit"
    }

    // list
    notes: Note[] = $state([])
    async load() {
        this.notes = await db.getNotes()
    }

    input = null
    createNote() {
        this.notes.push(db.createNote(this.input.value))
        this.input.value = ""
        this.input.blur()
        this.mode = "select"
        console.log("ff")
    }
    saveNote() {
        db.saveNote(JSON.parse(JSON.stringify(this.selected_item)))
    }
    removeNote() {
        db.removeNote(this.selected_item.id)
        this.notes.splice(this.selected_index, 1)
        if (this.notes.length === 0) {
            this.selected_index = 0
        } else {
            this.leaf("up")
        }
    }

    selected_index = $state(0)
    selected_item: Note = $derived(this.notes.length == 0 ? null : this.notes[this.selected_index])
    select(pointer) {
        if (!this.isSelect()) this.changeMode("select")
        if (this.notes.length <= 1) return
        if (pointer === "ArrowUp") {
            this.leaf("up")
        } else if (pointer === "ArrowDown") {
            this.leaf("down")
        } else if (typeof pointer === "number") {
            if (this.notes[pointer]) {
                this.selected_index = pointer
                console.log("select_todo", pointer)
            }
        }
    }
    leaf(direction) {
		const size = this.notes.length - 1
		switch (direction) {
			case "up":
				this.selected_index == 0 ? this.selected_index = size : this.selected_index--
				break
			case "down":
				this.selected_index < size ? this.selected_index++ : this.selected_index = 0
				break
		}		
	}

}