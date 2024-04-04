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

    <!-- VISUALLY DISECT COMPONENT HIERARCHIES -->
    <div class="how-it-works-container">
      <div class="how-it-works-textbox">
        <h4 class="section-subheader-text">
          Visually disect component hierarchies.
        </h4>
        <p class="body-text">
          Gain a better understanding of your application’s component hierarchy
          from a tree diagram that dynamically renders when the DOM is updated.
        </p>
      </div>
      <div class="how-it-works-img">
        <img src="src/assets/component-tree-example.png" />
      </div>
    </div>
  </div>

  <!-- TRACK REACTIVE STATE CHANGES IN REAL-TIME -->
  <div class="how-it-works-container reactive-changes-container">
    <div class="how-it-works-textbox">
      <h4 class="section-subheader-text">
        Track reactive state changes in real-time.
      </h4>
      <p class="body-text">
        Gain a better understanding of your application’s component hierarchy
        from a tree diagram that dynamically renders when the DOM is updated.
      </p>
    </div>
    <div class="how-it-works-img">
      <img src="src/assets/props-example.png" alt="Image of component tree" />
    </div>
  </div>

  <!-- Create as many snapshots as you’d like (and easily switch between them!) -->
  <div class="how-it-works-container">
    <div class="how-it-works-textbox">
      <h4 class="section-subheader-text">
        Create as many snapshots as you’d like (and easily switch between them!)
      </h4>
      <p class="body-text about-body-text">
        Sometimes front-end testing can involve layers of setup - perhaps you
        need to test your application in multiple languages, or multiple themes
        (light vs. dark mode), and the like. With SvelteScope, you can create
        multiple snapshots of state and easily switch between them to pinpoint
        their differences.
      </p>
    </div>
    <div class="how-it-works-img">
      <img
        src="src/assets/snapshots-example.png"
        alt="Image of component tree"
      />
    </div>
  </div>
</div>

<style>
  .about-body-text {
    margin-bottom: 200px !important;
  }

  .about-container {
    margin-top: 100px;
  }

  .reactive-changes-container {
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
    height: 50vh;
  }

  @media only screen and (max-width: 650px) {
    .how-it-works-container {
      flex-direction: column;
      text-align: center;
      margin-top: 50px;
    }

    .how-it-works-textbox {
      width: 100% !important;
    }

    .how-it-works-img > img {
      width: 100%;
    }

    .about-body-text {
      margin-bottom: 25px !important;
    }
  }

  .section-subheader-text {
    align-items: flex-start;
    justify-content: flex-start;
    line-height: normal;
  }

  .how-it-works-container > div {
    width: 50%;
  }

  .how-it-works-img {
    display: flex;
    justify-content: flex-end;
  }

  img {
    width: 80%;
    height: auto;
    border-radius: 25px;
  }
</style>
