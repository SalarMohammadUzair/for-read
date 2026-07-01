<template>
  <div class="topbar">
    <h1 class="top-bar-title">DISCLAIMER, THIS ONLY WORKS FOR EPUBS SO FAR, PLEASE DO NOT USE PDFS OR ANY OTHER DOCUMENTS</h1>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 4px solid #000000;
  background-color: #ffffff;
  grid-column: 2;
  grid-row: 1;
}
.top-bar-title {
  font-size: 0.7rem;
  font-weight: 900;
  text-transform: uppercase;
}
.top-bar-button {
  background-color: #000000;
  border: 3px solid #000000;
  padding: 8px 16px;
  font-weight: 900;
  font-size: 0.9rem;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 3px 3px 0px 0px #000000;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.top-bar-button:hover {
  transform: scale(1.1);
  box-shadow: 5px 5px 0px 0px #000000;
}
.top-bar-button:active {
  transform: scale(0.9);
  box-shadow: 1px 1px 0px 0px #000000;
}
</style>

