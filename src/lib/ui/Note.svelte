<script>
let { note } = $props()
let { text } = note

function onSubmit(action, payload) {
    fetch(`?/${action}`, {
        method: "POST",
        body: JSON.stringify(payload)
    })
}
</script>

<form onsubmit={() => onSubmit("edit", note)}>
    <label>
        <input bind:value={note.text} />
        <button type="submit">ok</button>
    </label>
</form>