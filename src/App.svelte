<script lang="ts">
  import Hero from './lib/Hero.svelte';
  import About from './lib/About.svelte';
  // List of tab items with labels, values and assigned components
  let activeTabValue = 0;

  function smoothScroll(target) {
    const element = document.getElementById(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(function (anchor) {
      anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = anchor.getAttribute('href').substring(1);
        smoothScroll(target);
      });
      anchor.addEventListener('click', async () => {});
    });
  });

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
</script>

<div class="app-container">
  <header id="navbar">
    <svg
      class="logo-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m28.072 17.405l7.05-10.424c.584-.864-.168-2.002-1.192-1.805L15.308 8.773L7.993 19.589a2.352 2.352 0 0 0 .63 3.266l10.817 7.314l21.397-4.132l-8.633 12.765l-18.622 3.596c-1.024.198-1.776-.941-1.192-1.805l7.05-10.424l8.632-12.764l12.765 8.632"
      />
    </svg>
    <div id="title" class="header">
      <h1>Svelte<span class="header-span">Scope</span></h1>
    </div>
  </header>
</div>

<!-- HERO SECTION -->
<section id="hero-section">
  <Hero />
</section>

<!-- ABOUT SECTION -->
<section id="about-section">
  <About />
</section>

<style>
  section {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #hero-section {
    margin-top: 25px;
  }

  #about-section {
    /* height: 75vh; */
    width: 100vw;
  }

  .logo-svg {
    stroke-width: 3px;
    color: rgba(255, 68, 0, 0.308);
    width: 25px;
    height: 25px;
    margin-right: 10px;
    padding-bottom: 20px;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-span {
    font-weight: 700;
  }

  .header > h1 {
    display: inline-block;
    font-weight: 100;
    font-size: 24px;
  }

  #title {
    margin-bottom: 20px;
  }

  #title > h1 {
    font-family: 'SF-Compact-Display-Ultralight';
    color: orangered;
    font-weight: 100;
  }

  #title > h1 > span {
    font-family: 'SF-Compact-Display-Semibold';
  }

  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(1, 1, 1, 0);
    background: linear-gradient(
      0deg,
      rgba(1, 1, 1, 0) 0%,
      rgba(1, 1, 1, 1) 30%
    );
  }

  /* #logo {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }

  #part1 {
    font-weight: 200;
  }

  #part2 {
    font-weight: bolder;
  }

  #pages {
    padding-top: 100px;
  }

  .tab {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.25s ease-in;
    font-weight: 400;
  }

  .link {
    transition: 0.25s ease-in;
    padding: 0.5rem 1rem;
    color: white;
  }

  .tab:hover,
  .link:hover {
    color: orangered;
  }

  .active {
    color: orange;
  } */
</style>


<!-- OLD CODE: -->


<!-- <script lang="ts">
  
  // import Tabs from './lib/Tabs.svelte'
  // import Router from "./lib/Router.svelte";
  import Subscriber from "./lib/Subscriber.svelte";
  import Docs from './lib/Docs.svelte';
  import About from "./lib/About.svelte";
  import Roadmap from './lib/Roadmap.svelte'; -->

	// import Tab1 from "./Tab1.svelte";
	// import Tab2 from "./Tab2.svelte";
	// import Tab3 from "./Tab3.svelte";
//   import Router from "./Router.svelte";

  // List of tab items with labels, values and assigned components
  <!-- let activeTabValue = 0;
  let items = [
    { label: "About",
		 value: 1,
		 id:"#about",
		},
    { label: "Roadmap",
		 value: 2,
		 id: "#roadmap"
		},
    { label: "Subsribe To Newsletter",
		 value: 3,
		 id:"#subscriber"
		}
  ]; -->


  //
<!-- function smoothScroll(target) {
  const element = document.getElementById(target);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: 'smooth',
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
    anchor.addEventListener('click', async () => {

    })
  });
});

  const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);



</script> -->

<!-- <main>

  <div id="navbar">
    <span id="logo"><svg
      class="logo-svg"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 48 48"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m28.072 17.405l7.05-10.424c.584-.864-.168-2.002-1.192-1.805L15.308 8.773L7.993 19.589a2.352 2.352 0 0 0 .63 3.266l10.817 7.314l21.397-4.132l-8.633 12.765l-18.622 3.596c-1.024.198-1.776-.941-1.192-1.805l7.05-10.424l8.632-12.764l12.765 8.632"
      />
    </svg></span>
    <span  id="title" class="header">
      
      <h1><span id="part1">Svelte</span><span id="part2">Scope</span></h1>
      
    </span>
    <span id = "menu" class="header">
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
  </div> -->


    <!-- {#each items as item}
        {#if activeTabValue == item.value}
        <div class="box">
            <svelte:component this={item.component}/>
        </div>
        {/if}
    {/each} -->
  
  <!-- <div id="pages">
  <div id="about">
    <About />
  </div>
  <div id="roadmap">
    <Roadmap />
  </div>
 
  

  <div id="subscriber">
    <Subscriber/>
  </div>
</div>

</main> -->

<!-- <style> -->

<!-- .header{
  display: inline-block;
} -->


<!-- /* #tabs{
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
      /* background: black; */
      /* opacity: 0.90; */
      /* backdrop-filter: blur(10px); */
      /* background-image: linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,1)) */
      
      background: rgba(1, 1, 1, 0.0);
      background: linear-gradient(0deg, rgba(1, 1, 1, 0.0) 0%,  rgba(1, 1, 1, 1.0) 30%);    
    }

    #title{
      color: orangered;
      opacity: 0.99;
    }

    #logo{
      margin-left: 10px;
    }

    #part1{
     font-weight:200;
    }

    #part2{
     font-weight: bolder;
    }

    #pages{
    padding-top:100px;
  }

   .tab{
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: white;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.25s ease-in;
    font-weight: 400;
  }


  .link{ 
   transition: 0.25s ease-in; 
   padding: 0.5rem 1rem;
   color: white;
  }

  .tab:hover, .link:hover {
    color: orangered;
  }

  .active {
    color: orange;
  }



</style> -->
