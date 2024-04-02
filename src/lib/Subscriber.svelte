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

  async function handleSubmit(event) {
    event.preventDefault()

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
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
</script>

<h1>Subscriber</h1>

{#if !submitted}
  <form on:submit={handleSubmit}>
 
    <label>Email:</label>
    <input type="email" id="email" bind:value={email} required />
    <button type="submit">Submit</button>
  </form>
{:else}
  <p>Thank you for subscribing! You will receive updates at {email}.</p>
{/if}
