<template>
    <div class="p-20 d-flex flex-column">
        <section class="mb-20">
            <h3 class="mb-10">Rechercher</h3>
            <input :value="filters.search" @input="emit('updateFilter',{ search: ($event.target as HTMLInputElement).value})" type="text" placeholder="Rechercher">
        </section>
        <section class="mb-20">
            <h3 class="mb-10">Trier par Prix :</h3>
            <div 
                class="mb-5" 
                v-for="priceRange of ([[0,10000],[800,1000],[1000,1500],[1500,2000],[2000,10000]] as [number, number][])"
                :key="priceRange">
                <input 
                :checked="filters.priceRange[0] === priceRange[0]"
                type="radio"
                @input="emit('updateFilter',{ priceRange })"
                name="priceRange" 
                :id="priceRange[0] + '' "
                />

                <label :for="priceRange[0] + ''">
                    {{ priceRange[0] === 0 ? 'Tout les prix' : priceRange[0] === 2000 ? 'Plus de 2000€' : `Entre ${priceRange[0]} € et ${priceRange[1]} €`   }}
                </label>
            </div>
        </section>
        <section class="mb-20 flex-fill">
            <h3 class="mb-10">Trier par Catégorie : </h3>
            <p v-for="categorie in (['all','bureau','mac','gamer'] as categorie[])" 
            class="categorie" 
            :class="{ selected: filters.categorie === categorie }"
            :key="categorie"
            @click="emit('updateFilter',{categorie})">
                {{ categorie }}
            </p>
        </section>
        <small class="mb-20">Nombre de résultats: {{ nbreOfProducts }}</small>
        <button class="btn btn-danger" @click="emit('updateFilter', {})">Supprimer les filtres</button>
    </div>
</template>

<script setup lang="ts">


import type { FilterUpdate, categorie, filtersInterface } from '@/interfaces';

const emit = defineEmits<{
    (e: 'updateFilter', filterUpdate: FilterUpdate): void
}>()

defineProps<{
    filters: filtersInterface,
    nbreOfProducts: number
}>()

</script>

<style scoped lang="scss">

.categorie{
    font-size: 15px;
    line-height: 18px;
    cursor: pointer;
    &:hover{
        color: var(--primary-1);
}

.selected{
    text-decoration: underline;
}

}

</style>