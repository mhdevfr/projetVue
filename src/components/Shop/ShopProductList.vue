<template>
    <div class="grid p-20" >
        <ShopProduct
            v-for="product of products"
            :key="product.id"
            :product="product"
            @add-product-to-cart="addToCart"
        />
    </div>
</template>

<script setup lang="ts">
import ShopProduct from './ShopProduct.vue';
import { defineProps, defineEmits } from 'vue';
import { ProductInterface } from '@/interfaces';

const props = defineProps<{
    products: ProductInterface[];
}>();

const emit = defineEmits(['addProductToCart']);

const addToCart = (productId: number) => {
    emit('addProductToCart', productId);
};
</script>

<style lang="scss" scoped>
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 400px;
    gap: 20px;
}
</style>
