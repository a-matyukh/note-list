import * as db from '$lib/db'

export function load({ cookies }) {
	let id = cookies.get('userid')
	if (!id) {
		id = crypto.randomUUID()
		cookies.set('userid', id, { path: '/' });
	}
	return {
		notes: db.getNotes(id)
	}
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData()
		db.createNote(cookies.get('userid'), data.get('text') as string)
	},
	edit: async ({ cookies, request }) => {
		const note: Note = await request.json()
		db.editNote(cookies.get('userid'), note)
	},
	remove: async ({ cookies, request }) => {
		const note: Note = await request.json()
		db.removeNote(cookies.get('userid'), note)
	}
}