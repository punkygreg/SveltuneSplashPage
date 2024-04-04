<div class="meet-the-team-container">
  <h1 class="section-h1-text">Meet the team 🚀</h1>

  <div class="teammates-container">
    <!-- branden -->
    <div class="teammate">
      <img
        src="src/assets/branden-headshot.jpeg"
        class="headshot-img branden"
      />
      <div class="teammate-content">
        <h3 class="section-subheader-text">Branden Basche</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>

    <!-- binh -->
    <div class="teammate">
      <img src="src/assets/binh-headshot.jpg" class="headshot-img binh" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">Binh Nguyen</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>

    <!-- donald -->
    <div class="teammate">
      <img src="src/assets/donald-headshot.jpg" class="headshot-img donald" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">Donald Wong</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>

    <!-- james -->
    <div class="teammate">
      <img src="src/assets/james-headshot.png" class="headshot-img james" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">James Lee</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>

    <!-- greg -->
    <div class="teammate">
      <img src="src/assets/greg-headshot.jpg" class="headshot-img greg" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">Gregory Valentin</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    text-align: center;
  }

  .teammates-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-content: center;
    justify-content: center;
  }

  .teammate {
    padding: 20px;
  }

  .branden {
    object-position: 0px -40px;
  }

  .donald {
    object-position: 0px -60px;
  }

  .james {
    object-position: 0px -15px;
  }

  .greg {
    object-position: 0px -60px;
  }

  a {
    margin-right: 7px;
  }

  h3 {
    color: white;
    margin: 0;
  }
  .meet-the-team-container {
    margin-top: 100px;
  }

  .headshot-img {
    width: 200px;
    height: 200px;
    border-radius: 25px;
    object-fit: cover;
  }

  @media only screen and (max-width: 700px) {
    .meet-the-team-container {
      margin-top: 100px;
    }

    .teammates-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
