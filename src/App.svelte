
<script lang="ts">
  
  // import Tabs from './lib/Tabs.svelte'
  // import Router from "./lib/Router.svelte";
  import Subscriber from "./lib/Subscriber.svelte";
  import Docs from './lib/Docs.svelte';
  import About from "./lib/About.svelte";
  import Roadmap from './lib/Roadmap.svelte';

	// import Tab1 from "./Tab1.svelte";
	// import Tab2 from "./Tab2.svelte";
	// import Tab3 from "./Tab3.svelte";
//   import Router from "./Router.svelte";

  // List of tab items with labels, values and assigned components
  let activeTabValue = 0;
  let items = [
    { label: "About",
		 value: 1,
		 id:"#about",
		},
    { label: "Docs",
		 value: 2,
		 id: "#docs",
		},
    { label: "Roadmap",
		 value: 3,
		 id: "#roadmap"
		},
    { label: "Subsribe To Newsletter",
		 value: 4,
		 id:"#subscriber"
		}
  ];


  function smoothScroll(target) {
  const element = document.getElementById(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: 'smooth'
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const target = anchor.getAttribute('href').substring(1);
      smoothScroll(target);
    });
  });
});

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);



</script>

<main>

  <div id="navbar">
    <span  id="title" class="header">
      <h1>Sveltune</h1>
      
    </span>
    <span id = "menu" class="header">
      <!-- <Router {items}/> -->
      <ul>
    
        {#each items as item}
            <span> <a href={item.id} class="{activeTabValue === item.value ? 'active' : ''} tab"   on:click={handleClick(item.value)}>
                {item.label}
            </span>
        {/each}
        
            <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Medium</a></span>
            <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Github</a></span>
            <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Download</a></span>
        </ul>
    </span>
  </div>


    <!-- {#each items as item}
        {#if activeTabValue == item.value}
        <div class="box">
            <svelte:component this={item.component}/>
        </div>
        {/if}
    {/each} -->
  
  <div id="pages">
  <div id="about">
    <About />
  </div>
  <div id="roadmap">
    <Roadmap />
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  <div>
    hi
  </div>
  </div>

  <div id="subscriber">
    <Subscriber/>
  </div>

</main>

<style>

.header{
  display: inline-block;
}


/* #tabs{
        display: flex;
        justify-content: flex-end;
    } */

    /* .link{
        color: white;
        transition: 0.25s ease-in;
    } */
    #navbar{
      position: fixed;
      top:0;
      left:0;
      width:100%; 
      background: black;
    }

    #title{
      margin-left: 10px;
    }

    #pages{
    padding-top:100px;
  }

   .tab{
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
   
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.25s ease-in;
    font-weight: 400;
  }
/*  */

  /* span:hover, .link:hover {
    /* border-color: #e9ecef #e9ecef #dee2e6; */
    /* background-color: orangered;
    color: orangered;
  } */



   .active {
    color: orange;
  }

  .link{ 
   transition: 0.25s ease-in; 
   padding: 0.5rem 1rem;
  }

  .tab:hover, .link:hover {
    /* border-color: #e9ecef #e9ecef #dee2e6; */
    /* background-color: orangered; */
    color: orangered;
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

