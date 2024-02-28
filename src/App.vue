<script setup lang="ts">
import TheHeader  from './components/Header.vue'
import TheFooter from './components/Footer.vue'
import Shop from './components/Shop/Shop.vue'
import Cart from './components/Cart/Cart.vue'
import data from './data/product'
import { computed, reactive } from 'vue';
import type { ProductInterface, ProductCartInterface, filtersInterface, FilterUpdate } from '@/interfaces';
import product from './data/product'
import { DEFAULT_FILTERS } from './data/filters';





const state = reactive<{
    products: ProductInterface[],
    cart: ProductCartInterface[],
    filters: filtersInterface
}>({
    products: data,
    cart: [],
    filters: { ...DEFAULT_FILTERS}
})

function addProductToCart(productId: number): void{
    const product = state.products.find(product => product.id === productId);
    if(product){
        const productInCart = state.cart.find(product => product.id === productId)
        if(productInCart) {
            productInCart.quantiy++
        } else {
        state.cart.push({ ...product, quantiy: 1})
        }
    }
}

function removeProductFromCart(productId: number): void{
    const productFromCart = state.cart.find(product => product.id === productId)
    if (productFromCart){
        if (productFromCart?. quantiy === 1){
            state.cart = state.cart.filter(product => product.id !== productId)
        } else {
            productFromCart.quantiy--;
        }
    }
}

const cartEmpty = computed(() => state.cart.length === 0)


const filteredProducts = computed(() => {
    return state.products.filter((product) => {
        if(
            product.title.toLocaleLowerCase().startsWith(state.filters.search.toLocaleLowerCase()) &&
            product.price >= state.filters.priceRange[0] &&
            product.price <= state.filters.priceRange[1] &&
            (product.categorie === state.filters.categorie || state.filters.categorie === 'all')
        ) {
            return true
        } else {
            return false
        }
    })
})

function updateFilter(filterUpdate: FilterUpdate) {
    if(filterUpdate.search !== undefined){
        state.filters.search = filterUpdate.search
    } else if (filterUpdate.priceRange) {
        state.filters.priceRange = filterUpdate.priceRange
    } else if (filterUpdate.categorie) {
        state.filters.categorie = filterUpdate.categorie;
    } else {
        state.filters = { ...DEFAULT_FILTERS};
    }
}

</script>


<template>
    <div class="app-container" :class="{
        gridEmpty: cartEmpty
    }">
        <TheHeader class="header"/>
        <Shop :filters="state.filters" @update-filter="updateFilter" :products="filteredProducts" @add-product-to-cart="addProductToCart" class="shop"/>
        <Cart v-if="!cartEmpty" :cart="state.cart" class="cart" @remove-product-from-cart="removeProductFromCart" />
        <TheFooter class="footer"/>
    </div>
</template>

<style lang="scss">
@import './assets/main.scss';
@import './assets/debug.scss';


.app-container{
    min-height: 100vh;
    display: grid;
    grid-template-areas: 'header header' 'shop cart' "footer footer";
    grid-template-columns: 75% 25%;
    grid-template-rows: 48px auto 48px;
}

.gridEmpty{
    grid-template-areas: 'header' 'shop'  "footer";
    grid-template-columns: 100%;
}

.header{
    grid-area: header;
}

.shop{
    grid-area: shop;
}

.cart{
    grid-area: cart;
    border-left: var(--border);
    background-color: white;
}

.footer{
    grid-area: footer;
}

</style>