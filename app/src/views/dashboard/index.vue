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
        var list = []
        for (var key in this.expenseCategory) {
          var expenseObject = {}
          expenseObject['category'] = key
          expenseObject['amount'] = Math.round(this.expenseCategory[key] * 100) / 100
          list.push(expenseObject)
        }
        this.$store.dispatch('setNetIncome', this.netIncome)
        this.$store.dispatch('setOriginalSpendingList', list)
        this.$store.dispatch('updateNetBalance', list)
        this.$store.dispatch('setFundList', 'low')
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
