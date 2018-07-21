<template>
  <div class="dashboard-container">
    <admin-dashboard />
  </div>
</template>

<script>
import adminDashboard from './admin'
import { fetchList } from '@/api/transaction'
export default {
  name: 'dashboard',
  components: { adminDashboard },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchList().then(response => {
        var list = response.data.items
        this.$store.dispatch('setNetIncome', 1000)
        this.$store.dispatch('setOriginalSpendingList', list)
        this.$store.dispatch('updateNetBalance', list)
      })
    }
  }
}
</script>
