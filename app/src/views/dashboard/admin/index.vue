<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="32">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 12}">
        <div class="card-wrapper">
          <el-row :gutter="12">
            <el-col :span="16">
              <h3>Hi {{username}}</h3>
              <el-card shadow="always">
                Your <b> Net Saving </b> is <b>${{ netSaving }}</b>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-button type="success" style="width:80%; margin-top:75px;" @click.native.prevent="clear">Reset</el-button>
            </el-col>
          </el-row>
        </div>
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
        <p>Do you know how much you could have saved if you inverst with TD 5 years ago with your saving?   <el-button type="success" @click="goToFund">Click to checkout!</el-button></p>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import PieChart from './components/PieChart'
import TransactionTable from './components/TransactionTable'
// import FundOptions from './components/FundOptions'
// import FundCard from './components/FundCard'
import FundCard from '../../../components/FundCard'
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard-admin',
  components: {
    PieChart,
    TransactionTable,
    FundCard
  },
  methods: {
    clear() {
      this.$store.dispatch('resetNetBalance')
    },
    goToFund() {
      this.$router.push('fundlist')
    }
  },
  computed: {
    ...mapGetters([
      'netIncome',
      'username',
      'netSaving'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 0 32px;
  background-color: rgb(240, 242, 245);
  min-height: 100%;
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
.card-wrapper{
  margin-top: 15px;
  margin-bottom: 20px;
}
</style>
