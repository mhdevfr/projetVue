<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="d-flex flex-row">
        <ShopFilters :filters="filters" :nbre-of-products="products.length" class="shop-filter" @update-filter="emit('updateFilter', $event)"/>
        <ShopProductList 
        @add-product-to-cart="emit('addProductToCart', $event)" 
        :products="products"
        class="flex-fill"
        />
    </div>
</template>
    
<script setup lang="ts">
import type { FilterUpdate, ProductInterface, filtersInterface } from '@/interfaces'
import ShopProductList from './ShopProductList.vue';
import ShopFilters from './ShopFilters.vue';

    defineProps<{
        products: ProductInterface[]
        filters: filtersInterface
    }>()


    const emit = defineEmits<{
        (e: 'addProductToCart', productId: number): void
        (e: 'updateFilter', updateFilter: FilterUpdate): void
    }>()

</script>
    
<style lang="scss" scoped>

.shop-filter{
    flex: 0 0 200px;
}
</style>