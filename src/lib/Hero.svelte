

<div class="hero-container">
  <div class="hero-text">
    <h1 class="hero-header-text">
      X-Ray vision for debugging Svelte applications.
    </h1>
    <p class="hero-p-text">
      SvelteScope empowers developers to ship confident Svelte code by
      pinpointing unexpected behaviors. Experiment with components
      non-destructively - all within the browser.
    </p>
  </div>

  <div class="hero-image-container">
    <img src="static/assets/propchanges.gif" class="hero-gif" />
  </div>
</div>

<style>
  @font-face {
    font-family: SF-Compact-Display-Regular;
    src: url('src/assets/fonts/SF-Compact-Display-Regular.otf')
      format('truetype');
  }

  .hero-container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 600px;
  }

  .hero-header-text {
    font-family: 'SF-Compact-Display-Bold', system-ui, sans-serif;
    color: white;
    text-align: center;
    font-size: 50px;
    /* max-width: 650px; */
    line-height: normal;
  }

  .hero-p-text {
    font-family: 'SF-Compact-Display-Regular', system-ui, sans-serif;
    color: white;
    text-align: center;
    /* max-width: 650px; */
  }

  img {
    margin-top: 26px;
    max-width: 75vw;
    height: auto;
    border-radius: 25px;
    background-position: center;
    filter: drop-shadow(0px 0px 10pxrgba (255, 89, 0, 0.165) a);
  }
</style>
