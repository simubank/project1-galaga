<template>
  <div class="app-container">
    <el-table :data="list" v-loading="listLoading" border fit highlight-current-row style="width: 100%">

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
            <el-input class="edit-input" size="small" v-model="scope.row.customAmount"></el-input>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/transaction'

export default {
  name: 'transactionTable',
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      fetchList().then(response => {
        this.list = response.data.items.slice(0, 8)
        this.listLoading = false
      })
    }
  }
}
</script>
