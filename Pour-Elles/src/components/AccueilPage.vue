<template>
  <!-- Contenu du site avec les parties en lien avec les ancres -->
  <div id="container">
    <!-- Partie de présentation des formes de VSS -->
    <section id="vss">
      <h2>Les Violences Sexistes et Sexuelles (vss) : qu'est-ce que c'est ?</h2>
      <p>
        Les violences sexistes et sexuelles regroupent un ensemble d'actes et de
        comportements qui visent à
        <br />
        humilier ou agresser des personnes en raison de leur sexe ou de leur
        genre. <br />
        Elles se manifestent de différentes manières : <br />
      </p>

      <ul>
        <li>
          Violences physiques : Cela inclut les agressions physiques, comme les
          coups ou les viols.
        </li>
        <li>
          Violences psychologiques : Cela peut être de l'intimidation, du
          harcèlement moral ou des menaces, visant à dévaloriser une personne.
        </li>
        <li>
          Harcèlement sexuel : Cela englobe des comportements ou des remarques à
          connotation sexuelle qui créent un environnement hostile ou dégradant.
        </li>
        <li>
          Violences économiques : Cela concerne le contrôle des ressources
          financières d'une personne pour la soumettre.
        </li>
      </ul>
      <h2>L'échelle de la violence</h2>
      <p>
        Ci-dessous l'échelle de la violence physique et psychologique. La partie
        verte étant une relation respectueuse, la partie rouge, quant à elle,
        vous montre ce qu'il faut fuir.
      </p>
      <img
        src="./assets/violences.png"
        alt="Violentomètre avec des informations sur quand fuir un homme lors de comportements violents de sa part."
      />
    </section>
    <!-- Partie sur comment et où les signaler -->
    <section id="signaler">
      <h2>Comment signaler un fait de violence sexiste et sexuelle ?</h2>
      <p>
        Un homme vous a fait du mal récemment ? Cette violence rentre-t'elle
        dans l'échelle ? <br />
        Toutes les informations à ce sujet se trouve sur la page "signaler un
        cas".
      </p>
      <a href="./ContactPage.vue">
        <button class="bouton-sos">Signalez un cas</button>
      </a>
    </section>
  </div>
</template>

<script>
export default {
  name: "AccueilPage",
};
</script>