<script>
import { Router, Link, Route } from "svelte-navigator"
import Home from "./pages/Home/Home.svelte"
import User from "./pages/User/User.svelte"
import Login from "./pages/Login/Login.svelte"
import Signup from "./pages/Signup/Signup.svelte";
import Contact from "./pages/Contact/Contact.svelte";
import PrivateRoute from "./PrivateRoute.svelte";

</script>


<Router>
	<nav>
		<Link to="/">Forside</Link> |
		<Link to="/login">Login</Link> |
		<Link to="/signup">Opret bruger</Link> |
		<Link to="/user">Bruger</Link> |
		<Link to="/contact">Kontakt</Link>
	</nav>

	<div>
		<Route path="/"><Home /></Route>
		<Route path="/login"><Login /></Route>
		<Route path="/signup"><Signup /></Route>
		<PrivateRoute path="/user" let:location><User /></PrivateRoute>
		<Route path="/contact"><Contact /></Route>
	</div>

</Router>
