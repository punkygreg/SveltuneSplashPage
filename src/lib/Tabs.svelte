<script lang="ts">
  import Subscriber from "./Subscriber.svelte";
  import Router from "./Router.svelte";

	// import Tab1 from "./Tab1.svelte";
	// import Tab2 from "./Tab2.svelte";
	// import Tab3 from "./Tab3.svelte";
//   import Router from "./Router.svelte";

  // List of tab items with labels, values and assigned components
  let items = [
    { label: "Docs",
		 value: 1,
		 component: Subscriber
		},
    { label: "Roadmap",
		 value: 2,
		 component: Subscriber
		},
    { label: "Subsribe To Newsletter",
		 value: 3,
		 component: Subscriber
		}
  ];

// function handleClick() {

// }
</script>


<Router {items} />
<!-- <div id="tabs">
    <ul >
   
        <span on:click={handleClick()}>Docs</span>

        <span>Roadmap</span>
 
        <span>Medium Article</span>
   
        <span><a id="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Github</a></span>

        <span>Subscibe To Newsletter</span>
    
    </ul>
</div>   -->






<style>

    #tabs{
        display: flex;
        justify-content: flex-end;
    }

    #link{
        color: white;
        transition: 0.25s ease-in;
    }

   span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    /* display: block; */
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.25s ease-in;
    font-weight: 400;
  }


  span:hover, #link:hover {
    /* border-color: #e9ecef #e9ecef #dee2e6; */
    /* background-color: orangered; */
    color: orangered;
  }
</style>