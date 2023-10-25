<script>
import { Router, Link, Route } from "svelte-navigator"
import Home from "./pages/Home/Home.svelte"
import Admin from "./pages/Admin/Admin.svelte"
import Login from "./pages/Login/Login.svelte"

</script>


<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/login">Login</Link>
		<Link to="/admin">Admin</Link>
	</nav>

	<div>
		<Route path="/"><Home /></Route>
		<Route path="/login"><Login /></Route>
		<Route path="/admin"><Admin /></Route>
	</div>

</Router>
