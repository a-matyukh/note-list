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
	default: async ({ cookies, request }) => {
		const data = await request.formData()
		db.createNote(cookies.get('userid'), data.get('text') as string)
	}
};