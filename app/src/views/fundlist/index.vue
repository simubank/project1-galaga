<template>
  <div>
    <div v-if="!invenstmentBeginDialogOpen">
      <el-row :gutter="20">
          <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 24}" v-for="(fundID, index) in fundList" :key="index">
            <fund-card v-bind:fund-id="fundID"></fund-card>
          </el-col>
          <el-button type="success" style="width:200px; margin:20px 50px 50px 50px; float:right" @click.native.prevent="simulate">Simulate</el-button>
      </el-row>
      <investment-dialog></investment-dialog>
      <investment-error-dialog></investment-error-dialog>
    </div>
    <investment-begin-dialog v-else></investment-begin-dialog>
  </div>
</template>

<script>
import fundCard from '@/components/FundCard'
import { mapGetters } from 'vuex'
import InvestmentDialog from '@/components/InvestmentDialog'
import InvestmentErrorDialog from '@/components/InvestmentErrorDialog'
import InvestmentBeginDialog from '@/components/InvestmentBeginDialog'
export default {
  name: 'Fundlist',
  components: {
    fundCard,
    InvestmentDialog,
    InvestmentErrorDialog,
    InvestmentBeginDialog
  },
  mounted() {
    this.$store.dispatch('closeInvestmentDialog')
    this.$store.dispatch('setInvestmentBeginDialog', true)
    this.$store.dispatch('clearInvestment')
  },
  methods: {
    simulate() {
      this.$store.dispatch('openInvestmentDialog')
    }
  },
  computed: {
    ...mapGetters([
      'fundList',
      'isInvestmentValid',
      'invenstmentBeginDialogOpen'
    ])
  }
}
</script>
