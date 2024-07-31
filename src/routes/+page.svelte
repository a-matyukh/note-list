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
    {#each app.list as note (note.id)}
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
<p>
    <button onclick={() => app.select("ArrowUp")}>ArrowUp</button>
    <button onclick={() => app.changeMode("edit")}>edit</button>
    <button onclick={() => app.changeMode("select")}>select</button>
    <button onclick={() => app.select("ArrowDown")}>ArrowDown</button>
</p>
<p>
    <button onclick={() => app.removeNote()}>Ctrl + D</button>
</p>

<script>
import app from "$lib/store/index"
import Note from "$lib/ui/Note.svelte"
app.load()
</script>