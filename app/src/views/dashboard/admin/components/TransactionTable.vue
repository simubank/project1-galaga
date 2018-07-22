<template>
  <div>
    <el-table :data="netSpendingList" v-loading="listLoading" border fit style="width: 100%">

      <el-table-column align="center" label="Category">
        <template slot-scope="scope">
          <span>{{scope.row.category}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Spending" align="center">
        <template slot-scope="scope">
            <el-input class="edit-input" size="small" v-on:change="updateBalance" v-model.number="scope.row.amount" type="number"></el-input>
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
            Your net saving will be: {{ netSaving }}
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
    }
  },
  computed: {
    ...mapGetters([
      'netSpendingList',
      'netSaving',
      'listLoading'
    ])
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.card-wrapper{
  margin-top: 15px;
}
</style>
