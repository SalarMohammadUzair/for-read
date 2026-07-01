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
  background-color: #f7e9c8;
  border: 3px solid #000000;
  box-shadow: 4px 4px 0px 0px #000000;
  overflow: hidden;
}
</style>
