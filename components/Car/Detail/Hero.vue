<script setup>
const props = defineProps({ car: Object });
const { milesToKilometer } = useUtilities();
const { dolarsToReais } = useUtilities();
</script>

<template>
  <div class="mt-10">
    <img
      :src="car.url"
      class="w-full"
      alt="volvo_xc40_t5_plug-in_hybrid_r-design_41-e1606940243985"
    />
    <h1 class="mt-1 text-4xl">{{ car.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ car.seats }} lugares</p>
        <p class="mr-2">|</p>
        <p class="mr-2">
          {{ milesToKilometer(car.miles).toString() }}
        </p>
      </div>
      <div>
        <p class="font-bold text-2xl">R$ {{ dolarsToReais(car.price) }}</p>
      </div>
    </div>
  </div>
</template>
