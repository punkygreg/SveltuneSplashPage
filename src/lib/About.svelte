<div class="about-container section-container">
  <h1 class="section-h1-text">What is SvelteScope?</h1>

  <div class="about-content">
    <p class="body-text">
      Traditional debugging tools weren't built for the dynamic nature of
      Svelte's state management, and the Svelte community lacks diverse
      debugging/testing applications opposed to other popular JS frameworks like
      React. That's why we created SvelteScope: a Svelte debugging and testing
      application designed to untangle the complexities of state and make
      testing a breeze.
    </p>
    <h3 class="section-subheader-text">Here's how it works:</h3>

    <div class="how-it-works-container">
      <div class="how-it-works-textbox">
        <h4 class="section-subheader-text">
          Visually disect component hierarchies.
        </h4>
        <p class="body-text">
          Gain a better understanding of your application’s component hierarchy
          from a tree diagram that dynamically renders when the DOM is updated
        </p>
      </div>
      <div class="how-it-works-img">
        <img src="src/assets/component-tree-example.png" />
      </div>
    </div>
  </div>
</div>

<style>
  .about-container {
    margin-top: 100px;
  }

  h1 {
    color: white;
    font-size: 50px;
  }

  .how-it-works-container {
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .how-it-works-header {
    font-size: 18px;
    color: white;
  }

  .how-it-works-container > div {
    width: 50%;
  }

  img {
    width: 100%;
    height: auto;
  }
</style>
