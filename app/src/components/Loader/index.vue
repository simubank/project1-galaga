<template>
  <div class="loader-wrapper">
    <p>Loading...Please be patient...</p>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.loader-wrapper {
  width: 100%;
  text-align: center;
}
.loader {
  margin: auto;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid green;
  width: 60px;
  height: 60px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
