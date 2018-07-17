<template>
  <el-card class = "fundCard">
    <el-container>
      <el-header>
        <el-row class="green-border" :gutter="20">
          <el-col :span="20">
            <div class="header-title-wrap code-wrap">{{fund.code}}</div>
            <div class="header-title-wrap title-wrap">{{fund.title}}</div>
          </el-col>
          <el-col :span="4">
            <div class="header-side-wrap nav-wrap">NAV: ${{fund.nav}}</div>
            <div class="header-side-wrap mer-wrap">MER: {{fund.mer}}</div>
          </el-col>
        </el-row>
      </el-header>
      <!-- Include Info Bar and Return Table -->
      <el-main style="padding-top:0px">
        <el-row :gutter="20">
          <el-col :span="18">
            <div class="fund-info-wrapper">
              <div class="fund-info"><b>Category:</b> {{fund.category}}</div>
              <div class="fund-info"><b>Min Invest:</b> {{fund.minInvest}}</div>
            </div>
            <div class="fund-info-wrapper">
              <div class="fund-info"><b>Invest Style:</b> {{fund.style}}</div>
              <div class="fund-info"><b>Risk:</b> {{fund.risk}}</div>
            </div>
            <!-- Return Table -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column v-for="(header,index) of tableHeader" :prop="header.prop" :label="header.label" :key="index">
              </el-table-column>
            </el-table>
          </el-col>
          <!-- User Invest Input -->
          <el-col :span="6">
            <div class="block">
              <span class="demonstration">Drag to invest your saving (%)</span>
              <el-slider v-model="input"></el-slider>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-card>
</template>

<script>
export default {
  name: 'FundCard',
  props: ['fundId'],
  data() {
    return {
      input: 0,
      fund: {
        mer: '0.2%',
        nav: '30',
        code: 'TDB903',
        title: 'TD NASDAQ Index - e',
        category: 'sector',
        minInvest: '100',
        style: 'large blend',
        risk: 'high',
        change: '-0.09 (-0.40%)'
      },
      tableHeader: [
        { prop: 'Mo1', label: '1 Mo' },
        { prop: 'Mo3', label: '3 Mo' },
        { prop: 'Mo6', label: '6 Mo' },
        { prop: 'Yr1', label: '1 Yr' },
        { prop: 'Yr2', label: '2 Yr' },
        { prop: 'Yr3', label: '3 Yr' },
        { prop: 'Yr5', label: '5 Yr' },
        { prop: 'Yr10', label: '10 Yr' }
      ],
      tableData: [{
        Mo1: '1%',
        Mo3: '3%',
        Mo6: '4%',
        Yr1: '5%',
        Yr2: '6%',
        Yr3: '7%',
        Yr5: '8%',
        Yr10: '9%'
      }]
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.fundCard {
  font-style: normal;
  font-weight: 400;
}
.header-side-wrap {
  margin: 5px auto;
  text-align: center;
  color: green;
}
.header-title-wrap {
  color: green;
  margin: 5px auto;
  font-weight: bold;
}
.nav-wrap, .code-wrap{
  font-weight: bold;
  font-size: large;
}
.mer-wrap, .title-wrap {
  font-size: small;
}
.green-border {
  border-bottom: 1px solid green;
}
.fund-info-wrapper {
  margin: 0px 25px 0px 0px;
  display: inline-block;
  float: left;
}
.fund-info {
  margin: 5px 0px;
}
</style>
