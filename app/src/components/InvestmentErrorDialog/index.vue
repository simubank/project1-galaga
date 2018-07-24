<template>
  <el-dialog
    title="Warnning"
    :visible.sync="investmentErrorDialogVisible"
    width="30%"
    :before-close="handleClose"
    center>
    <span>You total contribution has exceed 100%, please make sure the sum of your contribution is less than 100% of your saving.</span>
    <span slot="footer" class="dialog-footer">
      <el-button v-on:click.prevent="closeDialog" type="warning">Done</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InvestmentErrorDialog',
  computed: {
    ...mapGetters([
      'investmentErrorDialogVisible'
    ])
  },
  methods: {
    closeDialog() {
      this.$store.dispatch('closeInvestmentDialog')
    },
    handleClose(done) {
      this.$store.dispatch('closeInvestmentDialog')
      done()
    }
  }
}
</script>
