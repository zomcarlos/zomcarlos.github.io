<template>
  <div class="ascii-container">
    <pre>{{ art1 }}</pre>
    <pre>{{ art2 }}</pre>
  </div>
</template>

<script setup>
const art1 = `
                            ,,
  .g8"""bgd               \`7MM
.dP'     \`M                 MM
dM'       \` ,6"Yb. \`7Mb,od8 MM  ,pW"Wq.  ,pP"Ybd
MM         8)   MM   MM' "' MM 6W'   \`Wb 8I   \`"
MM.         ,pm9MM   MM     MM 8M     M8 \`YMMMa.
\`Mb.     ,'8M   MM   MM     MM YA.   ,A9 L.   I8
  \`"bmmmd' \`Moo9^Yo.JMML. .JMML.\`Ybmd9'  M9mmmP'

`

const art2 = `
MMM"""AMV
M'   AMV
'   AMV    ,pW"Wq.\`7MMpMMMb.pMMMb.  .gP"Ya \`7Mb,od8
   AMV    6W'   \`Wb MM    MM    MM ,M'   Yb  MM' "'
  AMV   , 8M     M8 MM    MM    MM 8M""""""  MM
 AMV   ,M YA.   ,A9 MM    MM    MM YM.    ,  MM
AMVmmmmMM  \`Ybmd9'.JMML  JMML  JMML.\`Mbmmd'.JMML.

`
</script>

<style>
.ascii-container {
  font-family: monospace;
  white-space: pre;
  font-size: 8px;
  line-height: 1.2;
}
</style>
