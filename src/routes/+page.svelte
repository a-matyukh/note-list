<form method="POST">
    <label>
        add a note:
        <input
            name="text"
            autocomplete="off"
        />
    </label>
</form>
<ul class="todos">
    {#each data.notes as note (note.id)}
        <li>
            {note.text}
        </li>
    {/each}
</ul>

<script>
export let data;
</script>