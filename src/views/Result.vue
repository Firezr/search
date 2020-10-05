<template>
  <div>
    <ul v-if="searchResult.hit">
      <li v-for="item in searchResult.hit" :key="item.id">
        <span>title:</span>
        <h2>{{ item.title }}</h2>
        <span>summary:</span>
        <p>{{ item.summary }}</p>
        <a :href="item.detail_url">详情</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { fetchHandler } from "../service/index.js";

export default {
  components: {},
  setup() {
    const route = useRoute();
    const router = useRouter();

    let { queryword } = route.query;
    let inputValue = ref(queryword);

    let searchResult = ref({});

    let search = async () => {
      let queryword = inputValue.value;
      if (!queryword.replace(/\s*/g, "")) return;
      searchResult.value = await fetchHandler("api/search/complex", {
        queryword,
      });
      console.log(searchResult.value);
    };
    onMounted(() => {
      console.log({ ...route });
      if (Object.keys(searchResult.value).length) return;
      search();
    });
    return {
      searchResult,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
