<template>
  <div>
    <h2>🔧 Admin: Tambah Menu Baru</h2>
    <form @submit.prevent="addMenu" class="admin-form">
      <input v-model="newItem.name" placeholder="Nama Makanan" required />
      <input v-model="newItem.price" type="number" placeholder="Harga (Rp)" required />
      <button type="submit">Tambah Menu</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newItem = ref({ name: '', price: '' })

const addMenu = async () => {
  await fetch('http://localhost:3000/menus', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: newItem.value.name,
      price: Number(newItem.value.price)
    })
  })
  alert('Menu berhasil ditambahkan!')
  newItem.value = { name: '', price: '' }
}
</script>

<style>
.admin-form { display: flex; flex-direction: column; max-width: 400px; }
.admin-form input { margin-bottom: 10px; padding: 10px; border: 1px solid #ddd; border-radius: 6px; }
.admin-form button { background: #007bff; border: none; color: white; padding: 10px; border-radius: 6px; cursor: pointer; }
.admin-form button:hover { background: #0069d9; }
</style>
