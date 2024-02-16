<template>
  <li>
    <p>
      {{ title }}: Formerly <code>{{ oldFileName }}</code>.
    </p>
    <p>
      Message from Provider: {{ message }}
    </p>
    <p>
      Today is {{ today }}
    </p>
  </li>
</template>

<script setup>
import { inject } from 'vue'

const title = 'Billing Widget'
const oldFileName = 'BillingSettingsWidget.vue'

const message = inject('message')
const today = inject('today')
</script>

<style scoped>
/* Add your component styles here */
</style>
