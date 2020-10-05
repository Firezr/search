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
        <img alt="Vue logo" src="../assets/logo.png" />
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
          <input
            id="realbox"
            type="search"
            autocomplete="off"
            spellcheck="false"
            aria-live="polite"
            autofocus=""
            placeholder="在 Google 上搜索，或者输入一个网址"
          />
          <!-- <button
            id="realbox-microphone"
            class="microphone-icon"
            title="语音搜索"
          ></button> -->
          <div role="listbox" id="realbox-matches">
            <a
              href=""
              role="option"
              aria-label="dsrtg trtry hjjhjhgjghjggh - Google 搜索"
              class="selected"
              aria-selected="true"
              >
              <!-- <div class="match-icon" style="-webkit-mask-image: url('search.svg')"></div> -->
              <span>dsrtg trtry hjjhjhgjghjggh</span> -
              <span class="description"><span class="dim">Google 搜索</span></span>
            </a>
            <a
              href=""
              role="option"
              aria-label="dsrtg trtry hjjhjhgjghjggh - Google 搜索"
              >
              <!-- <div class="match-icon" style="-webkit-mask-image: url('search.svg')"></div> -->
              <span>dsrtg trtry hjjhjhgjghjggh</span> -
              <span class="description"><span class="dim">Google 搜索</span></span>
            </a>
            <a
              href=""
              role="option"
              aria-label="dsrtg trtry hjjhjhgjghjggh - Google 搜索"
              >
              <!-- <div class="match-icon" style="-webkit-mask-image: url('search.svg')"></div> -->
              <span>dsrtg trtry hjjhjhgjghjggh</span> -
              <span class="description"><span class="dim">Google 搜索</span></span>
            </a>
          </div>
        </div>
      </div>

      <!-- Notification shown when the tiles are modified. -->
      <div id="mv-notice-container">
        <div id="mv-notice" class="notice-hide" role="alert">
          <span id="mv-msg">已移除快捷方式</span>
          <!-- Links in the notification. -->
          <span id="mv-notice-links">
            <span id="mv-undo" class="ripple" tabindex="0" role="button"
              >撤消</span
            >
            <span
              id="mv-restore"
              class="ripple"
              tabindex="0"
              role="button"
            ></span>
          </span>
        </div>
      </div>

      <div id="attribution" style="display: none">
        <div id="attribution-text">主题背景创建者：</div>
      </div>

      <div id="error-notice-container">
        <div id="error-notice" class="notice-hide" role="alert">
          <span id="error-notice-icon"></span>
          <span id="error-notice-msg"></span>
          <span
            id="error-notice-link"
            class="ripple"
            tabindex="0"
            role="button"
          ></span>
        </div>
      </div>

      <div
        id="edit-bg"
        tabindex="0"
        role="button"
        class="ep-enhanced"
        aria-label="自定义此页"
        title="自定义此页"
      >
        <div id="edit-bg-icon"></div>
        <span id="edit-bg-text">自定义</span>
      </div>

      <div id="custom-bg-attr"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss" scoped>
#realbox-matches a {
  text-align: left;
}
</style>
