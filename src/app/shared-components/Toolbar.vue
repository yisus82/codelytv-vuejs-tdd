<template>
  <q-toolbar>
    <q-btn flat @click="clickDrawer()" big>
      <q-icon name="menu" />
    </q-btn>
    <q-toolbar-title>
      <q-btn flat @click="goHome()" big>
        Jotas JS
      </q-btn>
    </q-toolbar-title>
    <q-btn color='secondary'>
      <q-icon name="search"/>
      SEARCH
    </q-btn>
  </q-toolbar>
</template>

<script>
  export default {
    methods: {
      clickDrawer() {
        this.$emit('drawerClick')
      },
      goHome() {
        this.jotaRouter.navigateToAllGigs()
      }
    }
  }
</script>

<style scoped>
  img { max-width: 60px; }
</style>
