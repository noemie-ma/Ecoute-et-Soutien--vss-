<script setup>
import AccueilPage from "./components/AccueilPage.vue";
import ContactPage from "./components/ContactPage.vue";
</script>

<template>
  <!-- Page's header -->
  <header>
    <!-- Logo et navigation avec des ancres -->
    <div class="logo">
      <img src="./assets/logo.png" alt="Logo du site Pour Elles" />
    </div>
    <div class="title">
      <h1>Pour Elles</h1>
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
        <a href="./components/ContactPage.vue">Signaler un cas</a>
      </div>
    </div>
  </header>

  <main>
    <AccueilPage />
  </main>

  <footer>
    <!-- Page's footer -->
    <div class="copyright">
      <h3>2024 - Projet LC</h3>
    </div>
  </footer>
</template>

