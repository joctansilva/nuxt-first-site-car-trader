<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

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
