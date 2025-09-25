<template>
  <div class="page">
    <h1>Projetos</h1>

    <p>
      Quando posso procuro fazer projetos para testar tecnologias que acho interessantes.
      Em geral codo localmente sem pretensão de subir no
      <a href="https://github.com/zomcarlos" target="_blank" rel="noreferrer noopener">GitHub</a> (espaço em constante atualização).
    </p>

    <ul class="projects-list">
      <li>
        <h2>
          <a href="https://github.com/zomcarlos/ereno-go" target="_blank" rel="noopener noreferrer">
            ERENO-GO
          </a>
        </h2>
        <p>
          Simulador de comunicação em redes industriais (IEC-61850) construído em
          <strong>Go</strong> utilizando conceitos como
          <strong>concorrência</strong> e
          <strong>protocolos de comunicação</strong>.
        </p>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style scoped>
p {
  font-size: 18px;
  line-height: 1.6;
}

h1 {
  font-size: 32px;
}

h2 {
  font-size: 24px;
  margin-top: 1rem;
}

.projects-list {
  list-style-type: disc;
  margin: 1rem 0 0 1.5rem;
  padding: 0;
}

.projects-list li {
  margin-bottom: 1.5rem;
}

strong {
  font-weight: bold; /* ✅ restore bold text */
}
</style>
