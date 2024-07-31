<script>
import app from "$lib/store/index"
let { note } = $props()
let { text } = note
let isCurrent = $derived(app.selected_item == note)
let input = null
$effect(() => {
    if (app.mode === "edit") input.focus()
})
</script>
<form onsubmit={() => onSubmit("edit", note)}>
    <label>
        <input 
            bind:value={note.text}
            bind:this={input}
            disabled={!isCurrent}
            onblur={app.saveNote(note)}
        />
    </label>
</form>
<!-- <button onclick={() => onSubmit("remove", note)}>remove</button> -->