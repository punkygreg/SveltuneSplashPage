<div class="meet-the-team-container">
  <h1 class="section-h1-text">Meet the team 🚀</h1>

  <div class="teammates-container">
    <!-- branden -->
    <div class="teammate">
      <img src="src/assets/fake-headshot.jpg" class="headshot-img" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">Branden Basche</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>

    <!-- binh -->
    <div class="teammate">
      <img src="src/assets/fake-headshot.jpg" class="headshot-img" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">Binh Nguyen</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>

    <!-- donald -->
    <div class="teammate">
      <img src="src/assets/fake-headshot.jpg" class="headshot-img" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">Donald Wong</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>

    <!-- james -->
    <div class="teammate">
      <img src="src/assets/fake-headshot.jpg" class="headshot-img" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">James Lee</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>

    <!-- greg -->
    <div class="teammate">
      <img src="src/assets/fake-headshot.jpg" class="headshot-img" />
      <div class="teammate-content">
        <h3 class="section-subheader-text">Gregory Valentin</h3>
        <a class="body-text-link" href="linkedin.com">LinkedIn</a>
        <a class="body-text-link" href="github.com">GitHub</a>
      </div>
    </div>
  </div>
</div>

<style>
  @media only screen and (max-width: 650px) {
    .meet-the-team-container {
      margin-top: 100px;
    }
  }

  h1 {
    text-align: center;
  }

  .teammates-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-content: center;
    justify-content: center;
  }

  .teammate {
    padding: 20px;
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
    width: 150px;
    border-radius: 25px;
  }
</style>
