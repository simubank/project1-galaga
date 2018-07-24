<template>

  <!--Want to know more about mutual funds? click here -->
  <div>
    <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="24">
        <p style="width:200px; margin:50px 100px; float:left"> Mutual Fund 101
          <el-button v-on:click.prevent="getInfo" type="success">Click here</el-button></p>
        </el-col>

        <el-col :xs="24" :sm="24" :lg="24">
        <p style="width:200px; margin:50px 100px; float:left"> More Investment Options
          <br>
          <el-button v-on:click.prevent="getInvestmentOptions" type="success">Click here</el-button></p>
        </el-col>

        <el-col :xs="24" :sm="24" :lg="24">
        <p style="width:200px; margin:50px 100px; float:left"> How to start saving
          <br>
          <el-button v-on:click.prevent="getTDHowTos" type="success">Click here</el-button></p>
        </el-col>
    </el-row>
  </div>


</template>

<script>

// add information about about how to book a phone call
// add information page to link to be able to get mutual funds
// add information to help ppl learn more about mutual funds

import { mapGetters } from 'vuex'

export default {
  name: 'learning',
  methods: {
    simulate() {
      console.log('try simulate')
    },
    getInfo() {
      const url = 'https://www.td.com/ca/en/personal-banking/how-to/saving-investing/invest-gics-term-deposits-mutual-funds/?tdtab=2'
      window.open(url, '_blank')
    },
    getInvestmentOptions() {
      const url = 'https://www.td.com/ca/en/personal-banking/products/saving-investing/'
      window.open(url, '_blank')
    },

    getTDHowTos() {
      const url = 'https://www.td.com/ca/en/personal-banking/how-to/'
      window.open(url, '_blank')
    }
  },
  computed: {
    ...mapGetters([
      'learning'
    ])
  }
}
</script>
