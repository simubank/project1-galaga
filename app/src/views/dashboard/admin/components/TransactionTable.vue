<template>
  <div>
    <el-table :data="netIncomeList" v-loading="listLoading" border fit style="width: 100%" header-row-class-name="green-table-header">

      <el-table-column align="center" label="Category">
        <template slot-scope="scope">
          <span>{{scope.row.category}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Income" align="center">
        <template slot-scope="scope">
            <el-input class="edit-input" size="small" v-on:change="updateIncome" v-model.number="scope.row.amount" type="number">
              <template slot="prepend"> + </template>
            </el-input>
        </template>
      </el-table-column>
    </el-table>

    <el-table :data="netSpendingList" v-loading="listLoading" border fit style="width: 100%" header-row-class-name="green-table-header">
      <el-table-column align="center" label="Category">
        <template slot-scope="scope">
          <span>{{scope.row.category}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Spending" align="center">
        <template slot-scope="scope">
          <el-input class="edit-input" size="small" v-on:change="updateBalance" v-model.number="scope.row.amount" type="number">
            <template slot="prepend"> - </template>
          </el-input>
        </template>
      </el-table-column>
    </el-table>
    <div class="card-wrapper">
      <el-row :gutter="12">
        <el-col :span="8">
          <el-button type="success" style="width:80%; margin-top:5px;" @click.native.prevent="clear">Reset</el-button>
        </el-col>
        <el-col :span="16">
          <el-card shadow="always">
            Your net saving will be: ${{ netSaving }}
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'transactionTable',
  methods: {
    clear() {
      console.log('clearing')
      this.$store.dispatch('resetNetBalance')
    },
    updateBalance() {
      // saves goal balance to store
      this.$store.dispatch('updateNetBalance', this.netSpendingList)
    },
    updateIncome() {
      this.$store.dispatch('updateIncome', this.netIncomeList)
    }
  },
  computed: {
    ...mapGetters([
      'netSpendingList',
      'netIncomeList',
      'netSaving',
      'listLoading'
    ])
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.card-wrapper{
  margin-top: 15px;
}
.green-table-header th {
  background-color: green;
  color: white
}
</style>
