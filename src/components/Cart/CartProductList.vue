<template>
    <div class="d-flex flex-column"> 
        <CartProduct 
        v-for="product in cart" :key="product.id" :product="product" 
        @remove-product-from-cart="emit('removeProductFromCart', $event)"
        />
    </div>
</template>
    
<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces';
import CartProduct from './CartProduct.vue';


const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number): void
}>()   


defineProps<{
    cart: ProductCartInterface[]
}>()
</script>
    
<style lang="scss" scoped>
</style>
