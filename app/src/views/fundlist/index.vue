<template>
    <el-row :gutter="20">
        <el-col :xs="{span: 24}" :sm="{span: 24}" :lg="{span: 24}">
          <fund-card></fund-card>
        </el-col>
    </el-row> 
</template>

<script>
import fundCard from '@/components/FundCard'

export default {
  name: 'Fundlist',
  components: { fundCard }
}
</script>
