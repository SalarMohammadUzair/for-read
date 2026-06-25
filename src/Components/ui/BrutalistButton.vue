<template>
  <button class="brutalist-button">
    <slot></slot>
  </button>
</template>
<style scoped>
.brutalist-button {
  background-color: #ffd60a;
  border: 3px solid #000000;
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  padding: 12px 24px;
  cursor: pointer;
  box-shadow: 4px 4px 0px 0px #000000;
  /* transition:
    transform 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out; */
  margin-left: 8px;
}
.brutalist-button:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px 0px #000000;
}
.brutalist-button:active {
  transform: translate(4px, 4px);
  box-shadow: 0px 0px 0px 0px #000000;
}
</style>
