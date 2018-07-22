<template>
  <el-dialog
    title="Tips"
    :visible.sync="investmentDialogVisible"
    width="30%"
    :before-close="handleClose">
    <span>Your Gain is: <b>{{investmentGain}}</b>, your net saving will be: <b>{{investmentGain + netSaving}}</b> if you have invested with TD 5 years ago</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeDialog">Done</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'InvestmentDialog',
  computed: {
    ...mapGetters([
      'investmentGain',
      'investmentDialogVisible',
      'netSaving'
    ])
  },
  methods: {
    closeDialog() {
      this.$store.dispatch('closeInvestmentDialog')
    },
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>
