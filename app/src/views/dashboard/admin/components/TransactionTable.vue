<template>
  <div>
    <el-table :data="list" v-loading="listLoading" border fit style="width: 100%">

      <el-table-column align="center" label="category">
        <template slot-scope="scope">
          <span>{{scope.row.category}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="Your Spending">
        <template slot-scope="scope">
          <span>{{scope.row.amount}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Goal">
        <template slot-scope="scope">
            <el-input class="edit-input" size="small" v-on:change="calculateSaving" v-model.number="scope.row.customAmount" type="number"></el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="card-wrapper">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-button type="success" style="width:80%; margin-top:5px;" @click.native.prevent="clearGoal">Reset</el-button>
        </el-col>
        <el-col :span="16">
          <el-card shadow="always">
            Your net saving will be: {{ totalSaving }}
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { fetchList } from '@/api/transaction'
import { mapGetters } from 'vuex'

export default {
  name: 'transactionTable',
  data() {
    return {
      list: null,
      originalList: null,
      listLoading: true,
      totalSaving: 0
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchList().then(response => {
        this.list = response.data.items.map(item => {
          return {
            category: item.category,
            amount: item.amount,
            customAmount: item.amount
          }
        })
        this.calculateSaving()
        this.listLoading = false
      })
    },
    calculateSaving() {
      var saving = this.list.reduce((accumulator, currentValue) => {
        return accumulator - currentValue.customAmount
      }, this.netIncome)
      this.totalSaving = Math.round(saving * 100) / 100
      this.setGoalBalance()
    },
    clearGoal() {
      this.list = this.list.map(item => {
        return {
          category: item.category,
          amount: item.amount,
          customAmount: item.amount
        }
      })
      this.calculateSaving()
    },
    setGoalBalance() {
      var balance = {
        goalSaving: this.totalSaving,
        goalSpending: this.netIncome - this.totalSaving
      }
      // saves goal balance to store
      this.$store.dispatch('setGoalBalance', balance)
    }
  },
  computed: {
    ...mapGetters([
      'netIncome',
      'netSaving'
    ])
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.card-wrapper{
  margin-top: 15px;
}
</style>
