<template>
  <!-- Contenu du site avec les parties en lien avec les ancres -->
  <div id="container">
    <!-- Partie de présentation des formes de VSS -->
    <section id="vss2">
      <!-- Section numéro d'urgence -->
      <h2>Qui contacter en cas de danger ?</h2>
      <p>
        Un homme vous veut du mal ? Vous a fait du mal ? <br />
        Vous pouvez flasher le QR Code ci-dessous, ou appeller les numéros
        d'urgences ci-dessous.
        <img
          src="./assets/qrcodevss.png"
          alt="QR Code Tchat Gendarmerie Anonyme"
        />
      </p>
    </section>
    <!-- Partie sur les partenariats -->
    <section id="signaler">
      <h2>Me contacter</h2>
      <p>
        Si vous avez besoin de me contacter pour quoi que ce soit (pourquoi
        cette initiative ? A qui m'adresser au niveau juridique ?),<br />
        vous pouvez remplir ce formulaire.
      </p>
      <form action="https://formspree.io/f/xjkvvbay" method="POST">
        <label>
          Your email:
          <input type="email" name="email" placeholder="Votre adresse mail" />
        </label>
        <label>
          Your message:
          <textarea
            name="message"
            placeholder="votre nom ou le nom de votre organisation"
          ></textarea>
        </label>
        <!-- your other form fields go here -->
        <button type="submit">Envoyer</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>