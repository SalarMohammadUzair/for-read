<template>
  <nav class="sidebar">
    <h2 class="logo">Chaptr</h2>

    <ul class="nav-links">
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/library">Library</RouterLink></li>
      <li><RouterLink to="/settings">Settings</RouterLink></li>
      <li><RouterLink to="/friends">Friends</RouterLink></li>
    </ul>
  </nav>
</template>
<style scoped>
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 4px solid #000000;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.logo {
  font-size: 2rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 40px;
  border-bottom: 4px solid #000000;
  padding-bottom: 8px;
}
.nav-links {
  list-style: none; /* Removes the ugly default bullet points. THIS IS NOT A BOT< I WROTE THIS COMMENT */
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.nav-links a:hover {
  color: #ffd60a;
  text-decoration: underline;
}
</style>
