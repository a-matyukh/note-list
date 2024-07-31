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
    list: Note[] = $state([])
    async load() {
        this.list = await db.getNotes()
    }

    input = null
    createNote() {
        this.list.push(db.createNote(this.input.value))
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
        this.list.splice(this.selected_index, 1)
        if (this.list.length === 0) {
            this.selected_index = 0
        } else {
            this.leaf("up")
        }
    }

    selected_index = $state(0)
    selected_item: Note = $derived(this.list.length == 0 ? null : this.list[this.selected_index])
    select(pointer: string | number) {
        if (!this.isSelect()) this.changeMode("select")
        if (this.list.length <= 1) return
        if (pointer === "ArrowUp") {
            this.leaf("up")
        } else if (pointer === "ArrowDown") {
            this.leaf("down")
        } else if (typeof pointer === "number") {
            if (this.list[pointer]) {
                this.selected_index = pointer
                console.log("select_todo", pointer)
            }
        }
    }
    leaf(direction: "up" | "down") {
		const size = this.list.length - 1
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