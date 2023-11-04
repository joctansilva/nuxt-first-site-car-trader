<script setup>
const route = useRoute();

definePageMeta({
  layout: "custom",
});

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  });
}
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
