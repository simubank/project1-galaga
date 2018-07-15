<!--<template>
  <div class="app-container">
  <el-table :data="list" style="width: 70%;padding-top: 15px;">

    <el-table-column label="Investment Name" align="center">
      <template slot-scope="scope">
        <span>{{scope.row.Name}}</span>
      </template>
    </el-table-column>

    <el-table-column label="Investment Data" align="center">
      <template slot-scope="scope">
        <span>{{scope.row.Nav}}</span>
      </template>
    </el-table-column>

  </el-table>
</div>
</template>

<script>

import { fetchList } from '@/api/fundInfo'

export default {
  name: 'FundCard',
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  created() {
    this.fetchData()
  },
  //  fetchInvestmentName() {
  //    return 'MutualFund'
  //  },
  //  fetchInvestmentData(){
  //    return 'n.a'
  //  },
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
-->
<template>
  <div class="app-container">
    <el-table :data="list" v-loading="listLoading" border fit highlight-current-row style="width: 100%">

      <el-table-column label="Investment Name" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.Name}}</span>
        </template>
      </el-table-column>

      <el-table-column label="Investment Data" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.Nav}}</span>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import { fetchList } from '@/api/FundInfo'

export default {
  name: 'FundOptions',
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
