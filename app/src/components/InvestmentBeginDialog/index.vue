<template>
  <el-dialog
    title="Your investment"
    :visible.sync="invenstmentBeginDialogOpen"
    width="60%"
    :before-close="handleClose"
    center>
    <p>Based on our model, you have been determined as a <b>{{capitalizeFirstLetter(userRisk)}} Risk</b> investor, we have suggested you some funds.</p>
    <p>However, if you wish to have all fund options, please click here: <el-button type="success" @click="setAllFund">All Options</el-button></p>
    <p>If you wish to only view suggested options, please click here: <el-button type="success"  @click="closeDialog">{{capitalizeFirstLetter(userRisk)}} Risk Options</el-button></p>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InvestmentBeginDialog',
  data() {
    return {
      isAllSelected: false
    }
  },
  computed: {
    ...mapGetters([
      'userRisk',
      'invenstmentBeginDialogOpen'
    ])
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    closeDialog() {
      this.$store.dispatch('setInvestmentBeginDialog', false)
      this.$store.dispatch('setFundList', this.userRisk)
    },
    handleClose(done) {
      this.$store.dispatch('setInvestmentBeginDialog', false)
      this.$store.dispatch('setFundList', this.userRisk)
      done()
    },
    setAllFund() {
      this.$store.dispatch('setFundList', 'all')
      this.$store.dispatch('setInvestmentBeginDialog', false)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>
