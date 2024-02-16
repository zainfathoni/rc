<template>
  <li>
    <p>
      {{ title }}: Formerly <code>{{ oldFileName }}</code>.
    </p>
    <p>
      Message from Provider: {{ message }}
    </p>
  </li>
</template>

<script setup>
import { inject } from 'vue'

const title = 'Email Widget'
const oldFileName = 'EmailSettingsWidget.vue'

const message = inject('message')
</script>

<style scoped>
/* Add your component styles here */
</style>
