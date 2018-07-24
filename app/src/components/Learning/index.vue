<template>

  <!--Want to know more about mutual funds? click here -->
  <div>
  <h2> Want to book a meeting with a financial advisor?? </h2>
  <el-button type="success" style="width:200px; margin:5px 30px; float:left" @click.native.prevent="simulate">Book an appointment</el-button>
  </div>


</template>

<script>
export default {
  name: 'Learning',
  data() {
    return {
      message: 'test'
    }
  },

  methods: {
    simulate() {
      console.log('try simulate')
    }
  }

}
</script>
