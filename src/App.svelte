<script lang="ts">
  
  // import Tabs from './lib/Tabs.svelte'
  // import Router from "./lib/Router.svelte";
  import Subscriber from "./lib/Subscriber.svelte";
  import Docs from './lib/Docs.svelte';
  import Roadmap from './lib/Roadmap.svelte';

	// import Tab1 from "./Tab1.svelte";
	// import Tab2 from "./Tab2.svelte";
	// import Tab3 from "./Tab3.svelte";
//   import Router from "./Router.svelte";

  // List of tab items with labels, values and assigned components
  let activeTabValue = 0;
  let items = [
    { label: "Docs",
		 value: 1,
		 component: Docs,
		},
    { label: "Roadmap",
		 value: 2,
		 component: Roadmap,
		},
    { label: "Subsribe To Newsletter",
		 value: 3,
		 component: Subscriber
		}
  ];



  const handleClick = tabValue => () => (activeTabValue = tabValue);
</script>

<main>

  <div >
    <span class="header">
      <h1>Sveltune</h1>
      
    </span>
    <span id = "menu" class="header">
      <!-- <Router {items}/> -->
      <ul>
    
        {#each items as item}
            <span  class={activeTabValue === item.value ? 'active' : ''}  on:click={handleClick(item.value)}>
                {item.label}
            </span>
        {/each}
        
            <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Medium</a></span>
            <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Github</a></span>
            <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Download</a></span>
        </ul>
    </span>
  </div>

  <div>
    {#each items as item}
        {#if activeTabValue == item.value}
        <div class="box">
            <svelte:component this={item.component}/>
        </div>
        {/if}
    {/each}
  </div>

  <!-- <p>
    Check out <a href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Our Github</a>
  </p> -->

<!-- <span>
  <Tabs/>
</span> -->


  <!-- <div class="card">
    <Counter />
  </div> -->

 

  <!-- <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p> -->
</main>

<style>

.header{
  display: inline-block;

}


/* #tabs{
        display: flex;
        justify-content: flex-end;
    } */

    #link{
        color: white;
        transition: 0.25s ease-in;
    }

   span{
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    /* display: block; */
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.25s ease-in;
    font-weight: 400;
  }


  span:hover, .link:hover {
    /* border-color: #e9ecef #e9ecef #dee2e6; */
    /* background-color: orangered; */
    color: orangered;
  }

  .active {
    color: orange;
  }


  /* .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  } */
  /* .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  } */

  /* .read-the-docs {
    color: #888;
  } */


</style>
