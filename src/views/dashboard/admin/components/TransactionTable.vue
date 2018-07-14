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
      <el-row :gutter="32">
        <el-col :span="16" :offset="8">
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

export default {
  name: 'transactionTable',
  props: {
    income: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      list: null,
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
      }, this.income)
      this.totalSaving = Math.round(saving * 100) / 100
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.card-wrapper{
  margin-top: 15px;
}
</style>
