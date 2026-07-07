<template>
  <div class="book-cover">
    <slot> </slot>
  </div>
</template>


<style scoped>
.book-cover {
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  background-color: #f5e4c3;
  border: 1.5px solid #1a1a1a;
  border-radius: 2px;
  overflow: hidden;
}

</style>

