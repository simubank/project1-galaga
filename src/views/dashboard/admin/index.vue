<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <h2>Hi Angela</h2>
        <p>You net income is: {{netIncome}}</p>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart></pie-chart>
        </div>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table></transaction-table>
      </el-col>
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="24">
        <p>Do you know how much you could have saved if you inverst with TD 5 years ago with your saving?   <el-button type="success">Click to checkout!</el-button></p>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import PieChart from './components/PieChart'
import TransactionTable from './components/TransactionTable'
//  import FundOptions from './components/FundOptions'
import FundCard from './components/FundCard'

export default {
  name: 'dashboard-admin',
  components: {
    PieChart,
    TransactionTable,
    FundCard
  },
  data() {
    return {
      netIncome: 1000
    }
  },
  created() {
    // will need to call something for getting net balance
    this.netIncome = 1000
    var balance = {
      netIncome: this.netIncome,
      netSaving: 100,
      netSpending: 0
    }
    this.$store.dispatch('setNetBalance', balance)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 0 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
