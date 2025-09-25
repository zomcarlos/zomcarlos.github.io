<template>
  <div class="page">
    <h1>Projects</h1>

    <p>
      Whenever I can, I like to build projects to experiment with technologies that I find interesting.
      Most of the time I code locally without the intention of publishing them on
      <a href="https://github.com/zomcarlos" target="_blank" rel="noreferrer noopener">GitHub</a> (space constantly being updated).
    </p>

    <ul class="projects-list">
      <li>
        <h2>
          <a href="https://github.com/zomcarlos/ereno-go" target="_blank" rel="noopener noreferrer">
            ERENO-GO
          </a>
        </h2>
        <p>
          A simulator of communication in industrial networks (IEC-61850), built in
          <strong>Go</strong>. It makes use of concepts such as
          <strong>concurrency</strong> and
          <strong>communication protocols</strong>.
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
  font-weight: bold; /* ✅ ensures bold text */
}
</style>
