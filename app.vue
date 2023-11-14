<script setup>
const supabase = supabaseClient()
const allproducts = ref([])
async function getProducts (){
  let { data: products, error } = await supabase.from('products').select('*')
  allproducts.value = products
}
onMounted(()=>{
  getProducts()
})
</script>
<template>
  <div>
    <ul>
      <li v-for="product in allproducts" :key="product.id">
        {{ product.title }} -- {{ product.price }}
      </li>
    </ul>
  </div>
</template>
