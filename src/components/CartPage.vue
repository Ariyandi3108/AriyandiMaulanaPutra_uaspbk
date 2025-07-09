<template>
  <div>
    <h2>🛒 Keranjang Belanja</h2>

    <div v-if="cart.items.length === 0" class="empty">
      Keranjang masih kosong.
    </div>

    <ul v-else class="cart-list">
      <li v-for="item in cart.items" :key="item.id">
        <span>{{ item.name }}</span>
        <span>Rp {{ item.price }}</span>
      </li>
    </ul>

    <div v-if="cart.items.length" class="cart-actions">
      <strong>Total: Rp {{ total }}</strong>
      <button @click="cart.clearCart">Kosongkan Keranjang</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cartStore'
import { computed } from 'vue'

const cart = useCartStore()

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price, 0)
)
</script>

<style>
.cart-list { list-style: none; padding: 0; margin: 15px 0; }
.cart-list li { display: flex; justify-content: space-between; background: #fff; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 10px; padding: 10px 15px; }
.cart-actions { margin-top: 15px; }
.cart-actions strong { margin-right: 20px; font-size: 1.1em; }
.cart-actions button { background: #dc3545; color: white; border: none; padding: 8px 12px; border-radius: 5px; cursor: pointer; }
.cart-actions button:hover { background: #c82333; }
.empty { background: #fff; border: 1px solid #ddd; border-radius: 6px; padding: 15px; }
</style>
