<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

definePageMeta({
  layout: "custom",
});

useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.make) : "Cars"
  } In ${toTitleCase(route.params.city)}`,
});

</script>

<template>
  <div class="mt-32 flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>
