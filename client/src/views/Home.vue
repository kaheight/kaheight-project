<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <section id="add-product" class="row">
      <div class="col-6 d-flex align-items-center" id="home-page">
            <img src="../assets/home.svg" alt="" class="w-100">
      <div class="col-12">
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="name" placeholder="Insert name">
                </div>
                <button type="submit" class="btn btn-block btn-info">Go</button>
            </form>
        </div>
        </div>
    </section>
  </div>
</template>

<script>


export default {
  name: 'Home'
}
</script>
