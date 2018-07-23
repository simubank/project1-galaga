<template>
  <div class="dashboard-container" v-if="dataReady">
    <admin-dashboard />
  </div>
  <div class="dashboard-container" v-else><loader></loader></div>
</template>

<script>
import adminDashboard from './admin'
import { mapGetters } from 'vuex'
import axios from 'axios'
import loader from '@/components/Loader'
export default {
  name: 'dashboard',
  components: { adminDashboard, loader },
  data() {
    return {
      netBalance: null,
      netIncome: null,
      netSpending: null,
      incomeCategory: {},
      expenseCategory: {},
      dataReady: false
    }
  },
  mounted() {
    this.fetchData()
    this.fetchRisk()
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:3000/customer/' + this.customerID + '/transaction').then(response => {
        this.netIncome = Math.round(response.data.netIncome * 100) / 100
        this.netSpending = response.data.netSpending
        this.netBalance = response.data.netBalance
        this.incomeCategory = response.data.incomeCategory
        this.expenseCategory = response.data.expenseCategory
        this.dataReady = true

        this.$store.dispatch('initalizeBalance', response.data)
      })
    },
    fetchRisk() {
      axios.get('http://localhost:3000/customer/' + this.customerID + '/risk').then(response => {
        this.$store.dispatch('clearFundList')
        this.$store.dispatch('setFundList', response.data.risk)
      })
    }
  },
  computed: {
    ...mapGetters([
      'customerID'
    ])
  }
}
</script>
