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

<div class="subscription-container">
  <div class="subscription-text">
    <h2>Subscribe to our newsletter for future updates!</h2>
  </div>
  <div class="subscription-form">
    {#if !submitted}
      <form on:submit={handleSubmit}>
        <div class="email-input">
          <input
            type="email"
            placeholder="Email"
            id="email"
            bind:value={email}
            required
          />
        </div>
        <button type="submit" class="subscribe-btn">Subscribe</button>
        {#if errorMessage}
          <p class="error-message">{errorMessage}</p>
        {/if}
      </form>
    {:else}
      <p class="success-message">
        Thank you for subscribing! You will receive updates at {email}.
      </p>
    {/if}
  </div>
</div>

<style>
  /* Existing styles */

  form {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }

  .email-input {
    align-items: flex-end;
  }

  .subscribe-btn {
    font-family: 'SF-Compact-Display-Semibold', sans-serif !important;
    font-size: 20px;
  }

  label {
    margin-right: 20px;
    font-size: 20px;
  }

  input {
    background: none;
    color: white;
    font-family: 'SF-Compact-Display-Thin', sans-serif;
    font-size: 18px;
    outline: none;
  }

  input::placeholder {
    color: white;
  }

  .success-message {
    color: white;
    font-size: 24px;
    text-align: center;
  }

  .subscription-container {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
    padding: 20px;
    border-radius: 40px;
    border-color: white;
  }

  .subscription-form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 75%;
  }

  #email {
    width: 250px;
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0;
  }

  .subscription-text h2 {
    font-family: 'SF-Compact-Display-Semibold';
    /* font-family: 'SF-Compact-Display-Thin', sans-serif; */
    color: orangered;
    font-size: 24px;
  }

  .subscription-form label {
    /* font-family: 'SF-Compact-Display-Bold'; */
    font-family: 'SF-Compact-Display-Semibold', sans-serif;
    color: white;
    margin-bottom: 10px;
  }

  .subscription-form input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-top: 20px;
  }
  .subscription-form button {
    color: white;
    background-color: orangered;
    font-family: 'SF-Compact-Display-Bold';

    padding: 10px 20px;
    border-radius: 10px;
  }

  .subscription-container {
    margin-bottom: 200px;
  }
</style>
