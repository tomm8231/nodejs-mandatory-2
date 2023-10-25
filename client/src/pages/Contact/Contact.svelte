<form action="/send-email" method="post">
  <label for="email">Email</label>
  <input type="email" name="email" placeholder="Din emailadresse" value="mail@mail.dk" required />
  <br />
  <label for="subject">Emne</label>
  <input type="text" name="subject" placeholder="Emne..." value="Et emne" required />
  <br />
  <label for="message"></label>
  <textarea name="message" placeholder="Din besked..." value="En besked..." required style="width:400px; height:200px"/>
  <br />
  <button>Send besked</button>
</form>
