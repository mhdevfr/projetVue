<template>
    <div class="p-20 d-flex flex-column">
        <h1>Panier</h1>
        <CartProductList
                class="flex-fill" 
                :cart="cart" 
                @remove-product-from-cart="emit('removeProductFromCart', $event)"
                />
        <button class="btn btn-sucess">Commander {{ totalPrice }} €</button>
    </div>
</template>
    
<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces';
import CartProductList from './CartProductList.vue';
import { computed } from 'vue';

const totalPrice = computed(() => props.cart.reduce((acc, product) => {
    return acc + product.price * product.quantiy;
}, 0))


const props = defineProps<{
    cart: ProductCartInterface[]
    }>()



const emit = defineEmits<{
    (e: 'removeProductFromCart', productId: number): void
}>()   


</script>
    
    <style lang="scss" scoped>
    </style>