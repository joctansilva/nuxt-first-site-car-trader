<script setup>
const route = useRoute();

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

definePageMeta({
  layout: "custom",
});

useHead({
  title: toTitleCase(route.params.name),
});
</script>

<template>
  <div>
    <CarDetailPage />
  </div>
</template>
