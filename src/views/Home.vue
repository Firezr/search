<template>
  <div class="container">
    <div id="custom-bg" style="opacity: 0"></div>
    <div id="custom-bg-preview"></div>
    <!-- Container for the OneGoogleBar HTML. -->
    <div id="one-google" class="show-element"></div>
    <div id="ntp-contents">
      <div id="logo">
        <!-- The logo that is displayed in the absence of a doodle. -->
        <!-- <div id="logo-default" title="Google" class="show-logo"></div> -->
        <!-- Logo displayed when theme prevents doodles. Doesn't fade. -->
        <!-- <div id="logo-non-white" title="Google"></div> -->
        <!-- A doodle, if any: its link and image. -->
        <!-- <div id="logo-doodle">
          <div id="logo-doodle-container">
            <div id="logo-doodle-wrapper">
              <button id="logo-doodle-button">
                <img id="logo-doodle-image" tabindex="-1" />
              </button>
            </div>
          </div>
          <iframe id="logo-doodle-iframe" scrolling="no"></iframe>
        </div> -->
      </div>

      <div>
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      </div>

      <div id="fakebox-container" hidden="">
        <div id="fakebox">
          <div class="search-icon"></div>
          <div id="fakebox-text"></div>
          <input
            id="fakebox-input"
            autocomplete="off"
            tabindex="-1"
            type="url"
            aria-hidden="true"
          />
          <div id="fakebox-cursor"></div>
          <button
            id="fakebox-microphone"
            class="microphone-icon"
            hidden=""
          ></button>
        </div>
      </div>

      <div id="realbox-container">
        <div id="realbox-input-wrapper" class="show-matches">
          <!-- <div
            id="realbox-icon"
            data-default-icon="search.svg"
            data-icon="search.svg"
            style="-webkit-mask-image: url('search.svg')"
          ></div> -->
          <div id="realbox-icon">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-search-1"></use>
            </svg>
          </div>
          <input
            v-model="inputValue"
            @keyup.enter="search"
            id="realbox"
            type="search"
            autocomplete="off"
            spellcheck="false"
            aria-live="polite"
            autofocus=""
            placeholder="在 Google 上搜索，或者输入一个网址"
          />
          <button
            id="realbox-microphone"
            class="microphone-icon"
            title="搜索"
            @click="search"
          >
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-arrow"></use>
            </svg>
          </button>
          <div role="listbox" id="realbox-matches">
            <a
              href=""
              role="option"
              aria-label="dsrtg trtry hjjhjhgjghjggh - Google 搜索"
              class="selected"
              aria-selected="true"
              v-if="false"
            >
              <!-- <div class="match-icon" style="-webkit-mask-image: url('search.svg')"></div> -->
              <span>dsrtg trtry hjjhjhgjghjggh</span> -
              <span class="description"
                ><span class="dim">Google 搜索</span></span
              >
            </a>
            <!-- <a
              href=""
              role="option"
              aria-label="dsrtg trtry hjjhjhgjghjggh - Google 搜索"
              >
              <span>dsrtg trtry hjjhjhgjghjggh</span> -
              <span class="description"><span class="dim">Google 搜索</span></span>
            </a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import router from "../router";
import { fetchHandler } from "../service/index.js";
export default {
  components: {},
  setup() {
    let inputValue = ref("");
    let showList = computed(() => !!inputValue.value);

    let search = () => {
      let queryword = inputValue.value;
      // if(!queryword.replace(/\s*/g,"")) return
      // window.result = await fetchHandler('api/search/complex', {
      //   queryword,
      // })
      router.push({
        path: "/result",
        query: {
          q: queryword,
        },
      });
    };
    return {
      inputValue,
      showList,

      search,
    };
  },
};
</script>

<style lang="scss">
#realbox-matches {
  padding-bottom: 0;
  a {
    text-align: left;
  }
}
#realbox-container {
  #realbox-icon {
    background: white;
    top: 50%;
    transform: translate(0, -35%);
  }
  #realbox-microphone {
    background: url("") no-repeat center;
    outline:none;
    .icon {
      top: 50%;
      transform: translate(0px, -50%);
      font-size: 20px;
    }
  }
}
</style>
