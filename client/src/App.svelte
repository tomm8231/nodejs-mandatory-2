<script>
import { Router, Link, Route } from "svelte-navigator"
import Home from "./pages/Home/Home.svelte"
import Admin from "./pages/Admin/Admin.svelte"

</script>


<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/admin">Admin</Link>
	</nav>

	<div>
		<Route path="/"><Home /></Route>
		<Route path="/admin"><Admin /></Route>
	</div>

</Router>
