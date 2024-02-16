<template>
  <main>
    <h3>Settings Dashboard: Formerly <code>SettingsDashboardPageView.vue</code></h3>
    <p>It renders these widgets under a Provider:
      <Provider>
        <ul>
          <li><Email /></li>
          <li><Billing /></li>
        </ul>
      </Provider>
    </p>
  </main>
</template>

<script setup>
import Provider from './Provider.vue';
import Billing from './Billing.vue';
import Email from './Email.vue';
</script>

<style scoped>
/* Styles from SettingsSharedStyles.css file goes here */
main {
  border: 1px solid #ccc;
  line-height: 0.75rem;
  padding: 1rem;
  text-align: left;
}
</style>
