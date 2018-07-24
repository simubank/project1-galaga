<template>

  <!--Want to know more about mutual funds? click here -->
  <div>
    <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="24">
        <p style="width:200px; margin:10px 100px; float:left"> Mutual funds 101
          <el-button v-bind:href='https://www.td.com/ca/en/personal-banking/how-to/saving-investing/invest-gics-term-deposits-mutual-funds/?tdtab=2' type="success" style="width:200px; margin:5px 30px; float:right">Learn More</el-button> </p>

      </el-col>
    </el-row>
  </div>


</template>

<script>

// add information about about how to book a phone call
// add information page to link to be able to get mutual funds
// add information to help ppl learn more about mutual funds

import learning from '@/components/Learning'
import { mapGetters } from 'vuex'

export default {
  name: 'learning',
  components: { learning },
  methods: {
    simulate() {
      console.log('try simulate')
    }
  },
  computed: {
    ...mapGetters([
      'learning'
    ])
  }
}
</script>
