// Ten plik tworzy formularz kontaktowy i nadaje mu style. 

<template>
  <section class="contact-section">
    <h2>Skontaktuj się ze mną</h2>
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Imię</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div class="form-group">
        <label for="surname">Nazwisko</label>
        <input type="text" id="surname" name="surname" required />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div class="form-group">
        <label for="phone">Numer telefonu</label>
        <input type="tel" id="phone" name="phone" />
      </div>
      <div class="form-group">
        <label for="message">Wiadomość</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Wyślij wiadomość</button>
    </form>
  </section>

</template>

<script setup>

</script>
<style scoped>
.contact-section {
  max-width: 800px;
  margin: 50px auto;
  padding: 60px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.contact-section h2 {
  text-align: center;
  color: #333;
  margin-bottom: 25px;
  font-size: 28px;
}

.contact-form .form-group {
  margin-bottom: 20px;
}

.contact-form label {
  display: block;
  margin-bottom: 6px;
  color: #555;
  font-weight: 500;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  background-color: #fff;
  transition: border-color 0.3s;
  resize: none;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #8ab4f8;
  outline: none;
}

.contact-form button {
  background-color: #ffffff;
  color: #000000;
  padding: 12px 24px;
  border: solid 1px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: block;
  margin: 0 auto;
}

.contact-form button:hover {
  background-color: #3a998d;
}
</style>
