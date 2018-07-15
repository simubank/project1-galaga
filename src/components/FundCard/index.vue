<template>
    <el-card class = "fundCard">
        <el-container>
            <el-header>
                <el-row :gutter="20">
                  <el-col :span="20">
                      <h4 style="margin-bottom:0px;">TDB903</h4>
                      <h4>TD Dow Jones Industrial Avg Index - e</h4>
                  </el-col>
                  <el-col :span="4">
                      MER:0.01%</br>
                      NAV:$30
                  </el-col>
                </el-row>
            </el-header>
                <!-- Include Info Bar and Return Table -->
            <el-row :gutter="20">
                <el-col :span="20">
                    <el-main>
                        <!-- Info Bar -->
                        <el-row :gutter="20">
                          <el-col :span="5">Category:Sector</el-col>
                          <el-col :span="5">Min Invest:100</el-col>
                          <el-col :span="5">Invest Style:Large Blend</el-col>
                          <el-col :span="5">Risk:Abv Avg</el-col>
                        </el-row>
                        <!-- Return Table -->
                        <el-table
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column
                              prop="Mo1"
                              label="1 Mo">
                            </el-table-column>
                            <el-table-column
                              prop="Mo3"
                              label="3 Mo">
                            </el-table-column>
                            <el-table-column
                              prop="Mo6"
                              label="6 Mo">
                            </el-table-column>
                            <el-table-column
                              prop="Yr1"
                              label="1 YR">
                            </el-table-column>
                            <el-table-column
                              prop="Yr2"
                              label="2 YR">
                            </el-table-column>
                            <el-table-column
                              prop="Yr3"
                              label="3 YR">
                            </el-table-column>
                            <el-table-column
                              prop="Yr5"
                              label="5 YR">
                            </el-table-column>
                            <el-table-column
                              prop="Yr10"
                              label="10 YR">
                            </el-table-column>
                        </el-table>
                    </el-main>
                </el-col>
                <!-- User Invest Input -->
                <el-col :span="4">
                    Try to Simulate invest
                    <el-input v-model="input" size="small" style="width:50px"></el-input>%
                    of your net saving!
                </el-col>
            </el-row>
        </el-container>
    </el-card>
</template>

<script>
export default {
  name: 'FundCard',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
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

</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.fundCard {
    font-style: normal;
    font-weight: 400;
}
</style>
