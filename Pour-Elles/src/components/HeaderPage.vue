<template>
  <!-- Page's header -->
  <header>
    <!-- Logo et navigation avec des ancres -->
    <div class="logo">
      <img src="./assets/logo.webp" alt="Logo du site Ecoute et Soutien" />
    </div>
    <div class="nom">
      <h1>Ecoute et Soutien</h1>
    </div>
    <div class="upheader">
      <nav>
        <ul>
          <li><a href="#vss" class="linknav">Qu'est-ce que les VSS ?</a></li>
          <li><a href="#signaler" class="linknav">Que faire ?</a></li>
        </ul>
      </nav>
      <!-- Lien vers la page récapitulative des contacts utiles -->
      <div class="contact">
        <a href="contact.html">Signaler un cas</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>