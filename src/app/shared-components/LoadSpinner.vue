<template>
  <span v-if="isLoading" class="spinner">
    <q-spinner-mat data-testid="loading" size="20"/>
    <p>Loading...</p>
  </span>
</template>

<script>
  export default {
    props: ['isLoading']
  }
</script>

<style>
.spinner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>
