<template>
    <div class="product d-flex flex-column">
        <div class="product-image" :style="{ backgroundImage:`url(${product.image})`}">

        </div>
        <h4>{{ product.title }}</h4>
        <div class="p-10 d-flex flex-column">
            <p>{{ product.description }}</p>
            <div class="d-flex flex-row align-items-center">
                <strong class="flex-fill">{{ product.price }}€</strong>
                <button class="btn btn-primary" @click="emit('addProductToCart',product.id)">Add to Cart</button>
            </div>
        </div>
    </div>

</template>
    





<script setup lang="ts">


import type { ProductInterface } from '@/interfaces';


defineProps<{
    product: ProductInterface
}>()



const emit = defineEmits<{
        (e: 'addProductToCart', productId: number): void
}>()


</script>
    













<style lang="scss" scoped>
    
    .product{
        background-color: #ffffff;
        border: var(--border);
        border-radius: var(--border-radius);
        &-image{
            border-top-right-radius: var(--border-radius);
            border-top-left-radius: var(--border-radius);
            background-image: url(src/assets/images/MacBook.webp);
            background-size: cover;
            background-position: center;
            height: 400px;
        }
    }
</style>