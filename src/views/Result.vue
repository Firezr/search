<template>
  <div>
    <ul v-if="searchResult.hit">
      <li v-for="item in searchResult.hit" :key="item.id">
        <span>title:</span><h2>{{item.title}}</h2>
        <span>summary:</span><p>{{item.summary}}</p>
        <a :href="item.detail_url">详情</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  components: {
    
  },
  setup() {
    let searchResult = window.result
    
    return {
      searchResult
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
