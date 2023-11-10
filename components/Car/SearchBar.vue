<script setup>
const city = ref("");
const cityError = ref(false);
const handleSearch = () => {
  if (!city.value) {
    return (cityError.value = true);
  }
  navigateTo(`/city/${city.value}/car`);
};

const handlerEnterKey = (event) => {
  if (event.key === 'Enter') {
    handleSearch()
  }
}
</script>

<template>
  <div
    class="font-sans w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-2xl mx-auto"
    :class="cityError ? 'border-red-500 border' : ''"
  >
    <input
      type="text"
      name="search-bar"
      id="searchBar"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      placeholder="Procure pela cidade..."
      v-model="city"
      @keyup="handlerEnterKey"
    />
    <button
      class="bg-black px-10 text-white hover:bg-zinc-900"
      @click="handleSearch"
    >
      PROCURAR
    </button>
  </div>
</template>
