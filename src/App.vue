<template>
  <div class="app-wrapper">
    <header>
      <h1>🍽️ FoodOrder - Aplikasi Pemesanan Makanan</h1>
      <nav>
        <router-link to="/">Beranda</router-link>
        <router-link to="/cart">Keranjang</router-link>
        <router-link to="/admin">Admin</router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  background: #f3f4f6;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.app-wrapper {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background: #007bff;
  color: white;
  padding: 20px;
  border-radius: 8px;
}

header h1 {
  margin: 0 0 10px 0;
}

nav a {
  margin-right: 15px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

main {
  margin-top: 20px;
}
</style>
