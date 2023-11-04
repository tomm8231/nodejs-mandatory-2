<script>
    import { onMount } from 'svelte';
    let url = "";
    onMount(() => url = window.location.href);
    console.log(url);
    
    let errorMessage = ""

    onMount(async () => {
        const response = await fetch("http://localhost:8080/*")
        const data = await response.json()
        errorMessage = data.data
    })

</script>
<h3>{errorMessage}</h3>
<p>{url}</p>
