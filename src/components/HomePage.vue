<template>
  <div>
    <h2>🍴 Menu Makanan Warnet</h2>
    <div class="menu-grid">
      <div v-for="item in menu" :key="item.id" class="menu-card">
        <img :src="item.image" alt="Gambar Makanan" />
        <h3>{{ item.name }}</h3>
        <p>Harga: Rp {{ item.price }}</p>
        <button @click="addToCart(item)">Tambah ke Keranjang</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '../stores/cartStore'

const menu = ref([])
const cart = useCartStore()

const fetchMenu = async () => {
  const res = await fetch('http://localhost:3000/menus')
  menu.value = await res.json()
}

const addToCart = (item) => {
  cart.addToCart(item)
  alert(`${item.name} ditambahkan ke keranjang!`)
}

onMounted(fetchMenu)
</script>

<style>
h2 {
  margin-bottom: 20px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.menu-card {
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  text-align: center;
}

.menu-card img {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.menu-card h3 {
  margin: 0 0 10px 0;
}

.menu-card p {
  margin: 0 0 10px 0;
}

.menu-card button {
  background: #28a745;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.menu-card button:hover {
  background: #218838;
}
</style>
