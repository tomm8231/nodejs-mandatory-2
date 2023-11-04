<script>
import { Router, Link, Route } from "svelte-navigator"
import Home from "./pages/Home/Home.svelte"
import User from "./pages/User/User.svelte"
import Login from "./pages/Login/Login.svelte"
import Signup from "./pages/Signup/Signup.svelte";
import Contact from "./pages/Contact/Contact.svelte";
import Error from "./pages/Error/Error.svelte";
import PrivateRoute from "./PrivateRoute.svelte";
import { user } from "./stores";
import { onMount } from "svelte";

  if (localStorage.getItem("userId")) {
    user.set({ id: localStorage.getItem('userId') });
  }

async function handleLogout() {

	console.log("sker der noget?")

	const options = {
		method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }

	// @ts-ignore
	const response = await fetch("http://localhost:8080/auth/logout", options)
	if (response.ok) {
		user.set(null)
		localStorage.removeItem('userId');		
	} else {
		//toastr...
		console.log("Could not log out")
	}

  
}

</script>


<Router>
	<nav>
		<Link to="/">Forside</Link>
		<span>|</span>
		<Link to="/contact">Kontakt</Link>
		{#if !$user}
		<span>|</span>
			<Link to="/login">Login</Link>
			<span>|</span>
			<Link to="/signup">Opret bruger</Link>
		{:else}
		<span>|</span>
			<Link to="/user">Bruger</Link>
			<span>|</span>
			<a href="/" on:click={handleLogout}>Log ud</a>
		{/if}

	</nav>

	<div>
		<Route path="/"><Home /></Route>
		<Route path="/login"><Login /></Route>
		<Route path="/signup"><Signup /></Route>
		<PrivateRoute path="/user" let:location><User /></PrivateRoute>
		<Route path="/contact"><Contact /></Route>
		<Route path="*"><Error /></Route>
	</div>

</Router>
