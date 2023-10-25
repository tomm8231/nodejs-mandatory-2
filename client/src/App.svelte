<script>
import { Router, Link, Route } from "svelte-navigator"
import Home from "./pages/Home/Home.svelte"
import Admin from "./pages/Admin/Admin.svelte"
import Login from "./pages/Login/Login.svelte"
import Signup from "./pages/Signup/Signup.svelte";
import Contact from "./pages/Contact/Contact.svelte";

</script>


<Router>
	<nav>
		<Link to="/">Home</Link>
		<Link to="/login">Login</Link>
		<Link to="/signup">Opret bruger</Link>
		<Link to="/admin">Admin</Link>
		<Link to="/contact">Kontakt</Link>
	</nav>

	<div>
		<Route path="/"><Home /></Route>
		<Route path="/login"><Login /></Route>
		<Route path="/signup"><Signup /></Route>
		<Route path="/admin"><Admin /></Route>
		<Route path="/contact"><Contact /></Route>
	</div>

</Router>
