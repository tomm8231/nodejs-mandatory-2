<script>
    import { user } from "../../stores";
  function handleLogout() {
    $user = null;
  }
</script>

<h3>Brugerside</h3>

<p>Check it out</p>

<button on:click={handleLogout}>Log ud</button>
