<!-- <main>
<h1>Subscriber</h1>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<div>
    text
</div>
<form>

</form>
</main> -->

<!-- EmailForm.svelte -->
<script>
  let email = '';
  let submitted = false;
  let errorMessage = '';

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        console.log('Email saved successfully');

        submitted = true;
      } else {
        console.error('Error saving email');
        errorMessage = 'the email already is in use';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<!-- <h1>Subscriber</h1>

<p>To receive future updates, please provide your email address below.</p>

{#if !submitted}
  <form on:submit={handleSubmit}>
    <label>Email:</label>
    <input type="email" id="email" bind:value={email} required />
    <button type="submit">Enter</button>
    {#if errorMessage}
      <p style="color: red;">{errorMessage}</p>
    {/if}
  </form>
{:else}
  <p>Thank you for subscribing! You will receive updates at {email}.</p>
{/if} -->

<div class="subscription-container">
  <div class="subscription-text">
    <h2>Subscribe To Our Newsletter for Future Updates</h2>
  </div>
  <div class="subscription-form">
    <form on:submit={handleSubmit}>
      <label for="email">Email:</label>
      <input type="email" id="email" bind:value={email} required />
      <button type="submit">Subscribe</button>
      {#if errorMessage}
        <p class="error-message">{errorMessage}</p>
      {/if}
    </form>
  </div>
</div>

<style>
  /* Existing styles */

  .subscription-container {
    margin-top: 50px;
    display: flex;

    flex-direction: column;
    padding: 20px;
    background-color: black;
    border-radius: 40px;
    border-color: white;
  }

  .subscription-form {
    display: flex;
    align-items: center;
  }

  .subscription-text h2 {
    font-family: 'SF-Compact-Display-Bold';
    color: orangered;
    font-size: 24px;
  }



  .subscription-form label {
    font-family: 'SF-Compact-Display-Bold';
    color: white;
    margin-bottom: 10px;
  }

  .subscription-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  .subscription-form button {
    color: white;
    background-color: orangered;
    font-family: 'SF-Compact-Display-Bold';

    padding: 10px 20px;
    border-radius: 10px;
  }

  
</style>
