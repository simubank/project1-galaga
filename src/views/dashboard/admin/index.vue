<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <pie-chart></pie-chart>
        </div>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table></transaction-table>
      </el-col>

      <el-row :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
          <fund-card></fund-card>
        </el-row>
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
    return {}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
