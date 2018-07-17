<template>
    <el-row :gutter="20">
        <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 24}" v-for="fundID in fundList">
          <fund-card v-bind:fund-id="fundID"></fund-card>
        </el-col>
    </el-row>
</template>

<script>
import fundCard from '@/components/FundCard'
import { mapGetters } from 'vuex'


export default {
  name: 'Fundlist',
  components: { fundCard },
  computed: {
    ...mapGetters([
      'fundList'
    ])
  }
}
</script>
