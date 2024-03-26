<script lang="ts">
    export let items: [] = [];
    export let activeTabValue = 0;
  
    const handleClick = tabValue => () => (activeTabValue = tabValue);
  </script>




<div >

  <ul>
    
  {#each items as item}
      <span  class={activeTabValue === item.value ? 'active' : ''}   on:click={handleClick(item.value)}>
          {item.label}
      </span>
  {/each}
      <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Medium</a></span>
      <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Github</a></span>
      <span><a class="link" href="https://github.com/oslabs-beta/Sveltune" target="_blank" rel="noreferrer">Download</a></span>
  </ul>
</div>

<!-- <div>
  {#each items as item}
      {#if activeTabValue == item.value}
      <div class="box">
          <svelte:component this={item.component}/>
      </div>
      {/if}
  {/each}
</div> -->


  <style>
        .link{
        color: white;
        transition: 0.25s ease-in;
    }

   span {
    color: white;
    border: 1px solid transparent;
    /* border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem; */
    /* display: block; */
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.25s ease-in;
    font-weight: 400;
    /* display: flex;
    position: flex-end; */
    
  }

  span:hover, .link:hover {
    /* border-color: #e9ecef #e9ecef #dee2e6;  */
     /* background-color: orangered;  */
    color: orangered;
  }

  #title{
    color: white;
  }

  .active {
    color: orange;
  }



  .header{
  display: inline-block;
 /* padding: 1rem 1rem; */
  }
  </style>