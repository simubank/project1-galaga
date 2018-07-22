<template>
    <el-row :gutter="20">
        <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 24}" v-for="(fundID, index) in fundList" :key="index">
          <learning></learning>
        </el-col>
        <el-button type="success" style="width:200px; margin:5px 30px; float:right" @click.native.prevent="simulate">Simulate</el-button>
    </el-row>
</template>

<script>
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
