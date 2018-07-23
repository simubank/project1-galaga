<template>
  <el-card class = "fundCard" v-if="dataReady">
    <el-container>
      <el-header>
        <el-row class="green-border" :gutter="20">
          <el-col :xs="{span: 24}" :sm="{span: 16}" :lg="{span: 16}">
            <div class="header-title-wrap code-wrap">{{fund.attribution.symbol}}</div>
            <div class="header-title-wrap title-wrap">{{fund.attribution.description}}</div>
          </el-col>
          <el-col :xs="{span: 24}" :sm="{span: 8}" :lg="{span: 8}">
            <div class="header-side-wrap nav-wrap">
              <el-tooltip content="Net asset value (NAV) is value per share of a mutual fund" placement="top">
                <el-button>NAV: </el-button>
              </el-tooltip>
              {{fund.attribution.nav}}
            </div>
            <div class="header-side-wrap mer-wrap">
              <div class="header-side-wrap mer-wrap">
                  <span :class="fund.attribution.change[0] === '-' ? 'negative-change': 'positive-change'">{{fund.attribution.change}}</span> as {{fund.attribution.date}}
              </div>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <!-- Include Info Bar and Return Table -->
      <el-main style="padding-top:0px">
        <el-row :gutter="20">
          <el-col :xs="{span: 24}" :sm="{span: 18}" :lg="{span: 18}">
            <div class="fund-info-wrapper">
              <div class="fund-info"><b>Category:</b> {{fund.attribution.category}}</div>
            </div>
            <div class="fund-info-wrapper">
              <div class="fund-info"><b>Min Invest:</b> {{fund.attribution.minInvest}}</div>
              <!--<div class="fund-info"><b>Risk:</b> {{fund.risk}}</div> -->
            </div>
            <div class="fund-info-wrapper">
              <div class="fund-info">
                <el-tooltip content="Includes the management fee plus the fund's day-to-day operating expenses" placement="top">
                  <el-button>MER:</el-button>
                </el-tooltip>
                {{fund.attribution.mer}}
              </div>
            </div>
            <!-- Return Table -->
            <el-table :data="tableData" style="width: 100%">
              <el-table-column v-for="(header,index) of tableHeader" :prop="header.prop" :label="header.label" :key="index" align="center" :min-width="index < 7 ? '65px' : '120px'">
              </el-table-column>
            </el-table>
          </el-col>
          <!-- User Invest Input -->
          <el-col :xs="{span: 24}" :sm="{span: 6}" :lg="{span: 6}">
            <div class="block">
              <span class="demonstration">Drag to invest your saving (%)</span>
              <el-slider v-model="inputPercentage" v-on:change="updateInvestment"></el-slider>
            </div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </el-card>
  <el-card class="fundCard" v-else>
    <loader></loader>
  </el-card>
</template>

<script>
import axios from 'axios'
import loader from '@/components/Loader'
export default {
  name: 'FundCard',
  props: ['fundId'],
  components: { loader },
  data() {
    return {
      tableHeader: [
        { prop: 'Mo1', label: '1 Mo' },
        { prop: 'Mo3', label: '3 Mo' },
        { prop: 'Mo6', label: '6 Mo' },
        { prop: 'YR1', label: '1 Yr' },
        { prop: 'YR2', label: '2 Yr' },
        { prop: 'YR3', label: '3 Yr' },
        { prop: 'YR5', label: '5 Yr' },
        { prop: 'Inception', label: 'Inception' },
        { prop: 'InceptionDate', label: 'InceptionDate' }
      ],
      tableData: [],
      fund: null,
      dataReady: false,
      symbol: '',
      inputPercentage: 0
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      // GET /someUrl
      axios.get('http://localhost:3000/fundInfo/' + this.fundId).then(response => {
        this.fund = response.data
        this.tableData.push(response.data.performanceList)
        this.symbol = this.fund.attribution.symbol
        var investmentOption = {
          rate: {
            Yr1: Number(response.data.performanceList.YR1),
            Yr5: Number(response.data.performanceList.YR5)
          },
          id: this.symbol
        }
        this.$store.dispatch('initalizeInvestment', investmentOption)
        this.dataReady = true
      })
    },
    updateInvestment() {
      var load = {
        id: this.symbol,
        percentage: this.inputPercentage
      }
      this.$store.dispatch('setInvestment', load)
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
.mer-wrap button, .nav-wrap button{
  border: 0px;
  background-color: white;
  color: green;
  padding: 0px;
}
.nav-wrap button {
  font-weight: bold;
  font-size: large;
}
.fund-info button {
  border: 0px;
  background-color: white;
  padding: 0px;
  font-size: medium;
  color: black;
  font-weight: bolder;
}
.nav-wrap button:hover, .mer-wrap button:hover {
  background-color: white;
  color: green;
}
.fund-info button:hover {
  background-color: white;
  color: black;
}
.fund-table>th:last-child {
  min-width: 200px;
  background-color: red
}
.negative-change {
  color: red;
  font-size: small;
}
.positive-change {
  color: green;
  font-size: small;
}
</style>
