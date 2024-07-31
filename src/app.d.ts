declare global {

	type UserID = string
	type DB = Record<UserID, Note[]>
	type Note = {
		id: string
		text: string
	}

}

export {}