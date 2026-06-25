<template>
  <div class="brutalist-card">
    <slot> </slot>
  </div>
</template>
<style scoped>
.brutalist-card {
  background-color: #ffffff;
  border: 4px solid #000000;
  padding: 24px;
  width: 400px;
  box-shadow: 8px 8px 0px 0px #000000;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
