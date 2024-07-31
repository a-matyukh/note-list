<form method="POST" action="?/create">
    <label>
        add a note:
        <input
            name="text"
            autocomplete="off"
        />
    </label>
</form>
<ol class="todos">
    {#each data.notes as note (note.id)}
        <li>
            <Note {note} />
        </li>
    {/each}
</ol>

<script>
export let data
import Note from "$lib/ui/Note.svelte"
</script>