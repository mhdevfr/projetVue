<template>
    <div class="mb-10 p-10 d-flex flex-row align-items-center">
        <strong class="mr-10">{{product.title}}</strong>
        <span class="flex-fill mr-10">x {{ product.quantiy }}</span>
        <span class="mr-10">Prix: {{product.price}}€</span>
        <button class="btn btn-danger" @click="emit('removeProductFromCart', product.id)" >Supprimer</button>
    </div>
</template>
    
<script setup lang="ts">
import type { ProductCartInterface } from '@/interfaces';

const emit = defineEmits<{
    (e: 'removeProductFromCart', productId:number): void
}>()

defineProps<{
    product: ProductCartInterface
}>()


</script>
    
<style lang="scss" scoped>
    .product{
        border: var(--border);
        border-radius: var(--border-radius);
        background-color: var(--gray-1);
    }
</style>