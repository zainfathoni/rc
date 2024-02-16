<template>
    <p>{{ title }}: Formerly <code>{{ oldFileName }}</code></p>
    <slot />
</template>

<script setup>
import { provide } from 'vue'
import { formatDate } from '../../shared/DateUtils.js'

const title = 'Provider'
const oldFileName = 'SettingsProvider.js'

provide('message', 'Provided by Provider.vue')
provide('today', formatDate(new Date()))
</script>

<style scoped>
/* Add your component styles here */
</style>
