<!--<template>
  <div class="test">
    <input type="text" v-model="title">

    <h1>{{title}}</h1>
  </div>

</template>

<script>

export default {
  name: 'FundCard',
  data() {
    return {
      title: "hello"
    }
  }

}
</script>-->


<!-- component template -->
<template>
  <div class="app-container">
  <table class="fundcardentry" align="center">
    <thead>
      <tr>
        <th>Id</th>
        <th>Select</th>
        <th>Details</th>
        <th>% of Saving</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows">
        <td>{{row.id}}</td>
        <td><input type="checkbox" id="proceed"></td>
        <td>{{row.details}}</td>
        <td><input type="text" v-model="percent"></td>
      </tr>
    </tbody>
  </table>
</div>
  </template>


  <script>
  export default {
    name: 'FundCard',

    data() {
      return {
        listLoading: true,
        list: null,
        rows: [
          { id: 1, select: 'Yes', details: 'Mutual Fund', percentage: '20' }
        ],
        percent: '30'
      }
    }
  }
  </script>



<style>
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

.fundcardentry table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

.fundcardentry th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.fundcardentry td {
  background-color: #f9f9f9;
}

.fundcardentry th, .fundcardentry td {
  min-width: 120px;
  padding: 10px 20px;
}

.fundcardentry th.active {
  color: #fff;
}
</style>
