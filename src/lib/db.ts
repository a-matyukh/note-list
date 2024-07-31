const db: DB = {}

function Note(text: string): Note {
    return {
        id: crypto.randomUUID(),
        text
    }
}

export function getNotes(userid: UserID) {
	if (!db[userid]) {
		db[userid] = [ 
            Note('Learn SvelteKit')
        ]
	}
	return db[userid]
}

export function createNote(userid: UserID, text: string) {
	const notes = db[userid]
	notes.push(Note(text))
}
