<p>
    add a note:
    <input
        name="text"
        autocomplete="off"
        bind:this = {app.input}
        bind:value = {app.new_note_text}
    />
</p>
<ol class="todos">
    {#each app.notes as note (note.id)}
        <li>
            <Note {note} />
        </li>
    {/each}
</ol>

<hr>
Actions:
<p>
    <button onclick={() => app.changeMode("create")}>ctrl + n</button>
    <button onclick={() => app.createNote()}>enter</button>
</p>
<p></p>

<script>
import app from "$lib/store/index"
import Note from "$lib/ui/Note.svelte"
app.load()
</script>