<template>
  <div>
    <div>
      <p class="center">Based on our model, you have been determined as a <b>{{capitalizeFirstLetter(userRisk)}} Risk</b> investor, we have suggested you some funds.</p>
      <investment-dialog></investment-dialog>
      <investment-error-dialog></investment-error-dialog>
      <el-row :gutter="20">
          <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 24}" v-for="(fundID, index) in fundList" :key="index">
            <fund-card v-bind:fund-id="fundID"></fund-card>
          </el-col>
          <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 24}" class="center">
            <p>However, if you wish to have all fund options, please click here: <el-button type="success" @click="setAllFund">All Funds</el-button></p>
          </el-col>
          <el-button type="success" style="width:200px; margin:20px 50px 50px 50px; float:right" v-on:click.stop.prevent="simulate">Simulate</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import fundCard from '@/components/FundCard'
import { mapGetters } from 'vuex'
import InvestmentDialog from '@/components/InvestmentDialog'
import InvestmentErrorDialog from '@/components/InvestmentErrorDialog'
export default {
  name: 'Fundlist',
  components: {
    fundCard,
    InvestmentDialog,
    InvestmentErrorDialog
  },
  created() {
    this.$store.dispatch('clearInvestment')
    this.$store.dispatch('resetFundList')
    this.$store.dispatch('setFundList', this.userRisk)
  },
  methods: {
    simulate() {
      this.$store.dispatch('openInvestmentDialog')
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    setAllFund() {
      this.$store.dispatch('resetFundList')
      this.$store.dispatch('setFundList', 'all')
    }
  },
  computed: {
    ...mapGetters([
      'fundList',
      'isInvestmentValid',
      'userRisk'
    ])
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.center {
  text-align: center;
}
</style>
