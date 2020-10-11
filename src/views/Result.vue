<template>
<!-- "attend_person":["宜昌市人民政府副市长周正英"],
      "site":"湖北", -->
      
  <div class="container">
    <div id="custom-bg" style="opacity: 0"></div>
    <div id="custom-bg-preview"></div>
    <!-- Container for the OneGoogleBar HTML. -->
    <div id="one-google" class="show-element"></div>
    <div id="ntp-contents">
      <div id="logo"></div>

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

      <div id="realbox-container" class="realbox-container">
        <div id="realbox-input-wrapper" class="show-matches">
          <div id="realbox-icon">
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
              <use xlink:href="#icon-search-2"></use>
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
          </div>
        </div>
      </div>

      <div id="top_nav" >
        <!-- <div
          jscontroller="qik19b"
          jsdata="Z1JpA;;AA4EF4"
          data-jsdata=""
          jsaction="rcuQ6b:npT2md"
        >
          <h1 class="Uo8X3b">搜索模式</h1>
          <div class="hdtbna notl" id="hdtb" role="navigation">
            <div id="hdtbSum">
              <div id="hdtb-s" style="white-space: nowrap">
                <div id="hdtb-msb">
                  <div>
                    <div id="hdtb-msb-vis">
                      <div
                        class="hdtb-mitem hdtb-msel hdtb-imb"
                        aria-hidden="true"
                      >
                        <span
                          class="HF9Klc iJddsb"
                          style="height: 16px; width: 16px"
                          ><svg focusable="false" viewBox="0 0 24 24">
                            <path
                              fill="#34a853"
                              d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                            ></path>
                            <path
                              fill="#ea4335"
                              d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                            ></path>
                            <path
                              fill="#fbbc04"
                              d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                            ></path>
                            <path
                              fill="#4285f4"
                              d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                            ></path></svg></span
                        >全部
                      </div>
                      <div class="hdtb-mitem hdtb-imb">
                        <a
                          class="q qs"
                          href="https://maps.google.com/maps?rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk031ofpJqqD3s0rCtsD6pzPKjy1yNA:1602395234599&amp;q=hha&amp;gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEENQhbsYWLW9GGD2xBhoAHAAeACAAZ8CiAGcBpIBAzItM5gBAKABAaoBB2d3cy13aXrAAQE&amp;uact=5&amp;um=1&amp;ie=UTF-8&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q_AUoAXoECA4QAw"
                          data-sc="A"
                          ><span
                            class="HF9Klc iJddsb"
                            style="height: 16px; width: 16px"
                            ><svg focusable="false" viewBox="0 0 16 16">
                              <path
                                d="M7.503 0c3.09 0 5.502 2.487 5.502 5.427 0 2.337-1.13 3.694-2.26 5.05-.454.528-.906 1.13-1.358 1.734-.452.603-.754 1.508-.98 1.96-.226.452-.377.829-.904.829-.528 0-.678-.377-.905-.83-.226-.451-.527-1.356-.98-1.959-.452-.603-.904-1.206-1.356-1.734C3.132 9.121 2 7.764 2 5.427 2 2.487 4.412 0 7.503 0zm0 1.364c-2.283 0-4.14 1.822-4.14 4.063 0 1.843.86 2.873 1.946 4.177.468.547.942 1.178 1.4 1.79.34.452.596.99.794 1.444.198-.455.453-.992.793-1.445.459-.61.931-1.242 1.413-1.803 1.074-1.29 1.933-2.32 1.933-4.163 0-2.24-1.858-4.063-4.139-4.063zm0 2.734a1.33 1.33 0 11-.001 2.658 1.33 1.33 0 010-2.658"
                              ></path></svg></span
                          >地图</a
                        >
                      </div>
                      <div class="hdtb-mitem hdtb-imb">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnms&amp;tbm=isch&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q_AUoAnoECA4QBA"
                          data-sc="A"
                          ><span
                            class="HF9Klc iJddsb"
                            style="height: 16px; width: 16px"
                            ><svg focusable="false" viewBox="0 0 24 24">
                              <path
                                d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"
                              ></path></svg></span
                          >图片</a
                        >
                      </div>
                      <div class="hdtb-mitem hdtb-imb">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnms&amp;tbm=vid&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q_AUoA3oECA4QBQ"
                          data-sc="A"
                          ><span
                            class="HF9Klc iJddsb"
                            style="height: 16px; width: 16px"
                            ><svg focusable="false" viewBox="0 0 24 24">
                              <path
                                d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"
                              ></path></svg></span
                          >视频</a
                        >
                      </div>
                      <div class="hdtb-mitem hdtb-imb">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnms&amp;tbm=nws&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q_AUoBHoECA4QBg"
                          data-sc="A"
                          ><span
                            class="HF9Klc iJddsb"
                            style="height: 16px; width: 16px"
                            ><svg focusable="false" viewBox="0 0 24 24">
                              <path
                                d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"
                              ></path></svg></span
                          >新闻</a
                        >
                      </div>
                    </div>
                    <g-header-menu
                      class="hdtb-mitem rwUYcf"
                      jscontroller="aam1T"
                      jsaction="rcuQ6b:npT2md"
                      id="ow17"
                      __is_owner="true"
                      ><a
                        jsname="LgbsSe"
                        class="Cq34nf hdtb-dd-b sqXXR"
                        aria-haspopup="true"
                        role="button"
                        tabindex="0"
                        jsaction="BVg1Q"
                        ><span
                          class="more-vert z1asCe SaPW2b"
                          style="height: 16px; line-height: 16px; width: 16px"
                          ><svg
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path
                              d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                            ></path></svg></span
                        >更多</a
                      >
                      <div
                        jsname="xl07Ob"
                        class="cF4V5c il8Sef"
                        style="display: none"
                        id="_cp-CX7rUE4e6wAPWkar4Dg21"
                        role="menu"
                        tabindex="-1"
                        jsaction="keydown:uYT2Vb"
                        data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q2h8oBXoECA4QBw"
                        jsowner="ow17"
                      >
                        <a
                          class="q qs f9UGee"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnms&amp;tbm=shop&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q_AUoAHoECA4QCA"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          ><span
                            class="HF9Klc iJddsb"
                            style="height: 16px; width: 16px"
                            ><svg focusable="false" viewBox="0 0 24 24">
                              <path
                                d="M21.11 2.89A3.02 3.02 0 0 0 18.95 2h-5.8c-.81 0-1.58.31-2.16.89L7.25 6.63 2.9 10.98a3.06 3.06 0 0 0 0 4.32l5.79 5.8a3.05 3.05 0 0 0 4.32.01l8.09-8.1c.58-.58.9-1.34.9-2.16v-5.8c0-.81-.32-1.59-.89-2.16zM20 10.85c0 .28-.12.54-.32.74l-3.73 3.74-4.36 4.36c-.41.41-1.08.41-1.49 0l-2.89-2.9-2.9-2.9a1.06 1.06 0 0 1 0-1.49l8.1-8.1c.2-.2.46-.3.74-.3l5.8-.01A1.05 1.05 0 0 1 20 5.05v5.8zM16 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2"
                              ></path></svg></span
                          >购物</a
                        ><a
                          class="q qs f9UGee"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnms&amp;tbm=bks&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q_AUoAXoECA4QCQ"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          ><span
                            class="HF9Klc iJddsb"
                            style="height: 16px; width: 16px"
                            ><svg focusable="false" viewBox="0 0 24 24">
                              <path
                                d="M18 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16"
                              ></path></svg></span
                          >图书</a
                        ><a
                          class="q qs f9UGee"
                          href="https://www.google.com/flights?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnms&amp;tbm=flm&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q_AUoAnoECA4QCg"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          ><span
                            class="HF9Klc iJddsb"
                            style="height: 16px; width: 16px"
                            ><svg focusable="false" viewBox="0 0 24 24">
                              <path
                                d="M12.98 12.89l-4.03 4.03.42 2.95L8.24 21l-1.87-3.37L3 15.76l1.12-1.12 2.95.42 4.03-4.03L3 6.77l1.5-1.5 10.04 2.32 4.2-4.2a1.32 1.32 0 0 1 1.87 0c.52.52.52 1.36 0 1.87l-4.2 4.2 2.32 10.04-1.5 1.5-4.25-8.11"
                              ></path></svg></span
                          >航班</a
                        ><a
                          class="q qs f9UGee"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnms&amp;tbm=fin&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q_AUoA3oECA4QCw"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          ><span
                            class="HF9Klc iJddsb"
                            style="height: 16px; width: 16px"
                            ><svg focusable="false" viewBox="0 0 24 24">
                              <path
                                d="M6 15.5l-3 2.94V10h3v5.5zm5-1.84l-1.57-1.34L8 13.64V6h3v7.66zM16 12l-3 3V2h3v10zm2.81-.19L17 10h5v5l-1.79-1.79L13 20.36l-3.47-3.02L5.75 21H3l6.47-6.34L13 17.64l5.81-5.83"
                              ></path></svg></span
                          >财经</a
                        >
                      </div></g-header-menu
                    >
                  </div>
                  <div>
                    <g-header-menu
                      class="hdtb-mitem rwUYcf"
                      jscontroller="aam1T"
                      jsaction="rcuQ6b:npT2md"
                      id="ow18"
                      __is_owner="true"
                      ><a
                        jsname="LgbsSe"
                        class="Cq34nf hdtb-dd-b"
                        aria-haspopup="true"
                        role="button"
                        tabindex="0"
                        jsaction="BVg1Q"
                        href="/preferences"
                        id="abar_button_opt"
                        >设置</a
                      >
                      <div
                        jsname="xl07Ob"
                        class="cF4V5c"
                        style="display: none"
                        id="_cp-CX7rUE4e6wAPWkar4Dg24"
                        role="menu"
                        tabindex="-1"
                        jsaction="keydown:uYT2Vb"
                        data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qn_YBKAB6BAgOEAw"
                        jsowner="ow18"
                      >
                        <a
                          href="/preferences?hl=zh-CN&amp;prev=https://www.google.com/search?rlz%3D1C1CHWL_zh-CNHK917HK917%26sxsrf%3DALeKk031ofpJqqD3s0rCtsD6pzPKjy1yNA:1602395234599%26ei%3DYpyCX46MJIKnoASfiYfACw%26q%3Dhha%26oq%3Dhha%26gs_lcp%3DCgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEENQhbsYWLW9GGD2xBhoAHAAeACAAZ8CiAGcBpIBAzItM5gBAKABAaoBB2d3cy13aXrAAQE%26sclient%3Dpsy-ab%26ved%3D0ahUKEwiOxf2166vsAhWCE4gKHZ_EAbgQ4dUDCA0%26uact%3D5"
                          class="f9UGee"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qo_oBegQIDhAN"
                          >搜索设置</a
                        ><a
                          href="/preferences?hl=zh-CN&amp;prev=https://www.google.com/search?rlz%3D1C1CHWL_zh-CNHK917HK917%26sxsrf%3DALeKk031ofpJqqD3s0rCtsD6pzPKjy1yNA:1602395234599%26ei%3DYpyCX46MJIKnoASfiYfACw%26q%3Dhha%26oq%3Dhha%26gs_lcp%3DCgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEENQhbsYWLW9GGD2xBhoAHAAeACAAZ8CiAGcBpIBAzItM5gBAKABAaoBB2d3cy13aXrAAQE%26sclient%3Dpsy-ab%26ved%3D0ahUKEwiOxf2166vsAhWCE4gKHZ_EAbgQ4dUDCA0%26uact%3D5#languages"
                          class="f9UGee"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qo_oBegQIDhAO"
                          ><span>语言</span
                          ><span style="margin-left: 3px"> (Languages)</span></a
                        ><a
                          href="/setprefs?safeui=on&amp;sig=0_spP9Fdbu9ifTRxQqyUNdmeczHco%3D&amp;prev=https://www.google.com/search?rlz%3D1C1CHWL_zh-CNHK917HK917%26sxsrf%3DALeKk031ofpJqqD3s0rCtsD6pzPKjy1yNA:1602395234599%26ei%3DYpyCX46MJIKnoASfiYfACw%26q%3Dhha%26oq%3Dhha%26gs_lcp%3DCgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEENQhbsYWLW9GGD2xBhoAHAAeACAAZ8CiAGcBpIBAzItM5gBAKABAaoBB2d3cy13aXrAAQE%26sclient%3Dpsy-ab%26ved%3D0ahUKEwiOxf2166vsAhWCE4gKHZ_EAbgQ4dUDCA0%26uact%3D5"
                          jsaction="m.cbbl"
                          id="safesearch"
                          class="f9UGee"
                          role="menuitem"
                          tabindex="-1"
                          data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qo_oBegQIDhAP"
                          ><div>隐藏含有露骨色情内容的搜索结果</div></a
                        ><a
                          href="https://www.google.com/search?rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk031ofpJqqD3s0rCtsD6pzPKjy1yNA:1602395234599&amp;ei=YpyCX46MJIKnoASfiYfACw&amp;q=hha&amp;oq=hha&amp;gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgjECc6BAgAEENQhbsYWLW9GGD2xBhoAHAAeACAAZ8CiAGcBpIBAzItM5gBAKABAaoBB2d3cy13aXrAAQE&amp;sclient=psy-ab&amp;ved=0ahUKEwiOxf2166vsAhWCE4gKHZ_EAbgQ4dUDCA0&amp;uact=5&amp;pws=0"
                          class="f9UGee"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qo_oBegQIDhAQ"
                          >隐藏私人搜索结果</a
                        ><a
                          href="/advanced_search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;hl=zh-CN"
                          class="f9UGee"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qo_oBegQIDhAR"
                          >高级搜索</a
                        ><a
                          href="https://myactivity.google.com/product/search?utm_source=google&amp;hl=zh-CN"
                          class="f9UGee"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qo_oBegQIDhAS"
                          >Google 搜索活动记录</a
                        ><a
                          href="https://myactivity.google.com/privacyadvisor/search?utm_source=googlemenu"
                          class="f9UGee"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qo_oBegQIDhAT"
                          >您在 Google 搜索中的数据</a
                        ><a
                          href="https://support.google.com/websearch/?source=g&amp;hl=zh-CN"
                          class="f9UGee"
                          jsaction="mouseover:sbHm2b"
                          role="menuitem"
                          tabindex="-1"
                          data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Qo_oBegQIDhAU"
                          >搜索帮助</a
                        >
                      </div></g-header-menu
                    ><a
                      style="display: "
                      class="hdtb-tl"
                      aria-controls="hdtbMenus"
                      aria-expanded="false"
                      id="hdtb-tls"
                      role="button"
                      tabindex="0"
                      data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q2x96BAgOEBU"
                      >工具</a
                    >
                  </div>
                </div>
                <ol class="pdswFd"></ol>
              </div>
            </div>
            <div
              class="hdtb-td-c hdtb-td-h"
              id="hdtbMenus"
              data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8Q3B96BAgOEBY"
            >
              <div class="hdtb-mn-cont">
                <div id="XJDHvf"></div>
                <g-popup
                  jscontroller="NZI0Db"
                  jsaction="A05xBd:IYtByb;"
                  jsdata="mVjAjf;;AA4EGA"
                  data-jsdata=""
                  ><div
                    jsname="oYxtQd"
                    class="rIbAWc hide-focus-ring"
                    tabindex="0"
                    aria-expanded="false"
                    aria-haspopup="true"
                    role="button"
                    jsaction="WFrRFb;keydown:uYT2Vb"
                  >
                    <div class="hdtb-mn-hd">
                      <div class="mn-hd-txt">不限语言</div>
                      <span class="mn-dwn-arw"></span>
                    </div>
                    <span class="hQKUmb"></span>
                  </div>
                  <div
                    jsname="V68bde"
                    class="EwsJzb"
                    style="display: none; z-index: 126"
                  >
                    <ul class="tFPnEd YD3ICb">
                      <li class="hdtbItm hdtbSel" id="lr_" tabindex="0">
                        不限语言
                      </li>
                      <li class="hdtbItm" id="lr_lang_1zh-CN|lang_1zh-TW">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnt&amp;tbs=lr:lang_1zh-CN%7Clang_1zh-TW&amp;lr=lang_zh-CN%7Clang_zh-TW&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOEBs"
                          role="presentation"
                          tabindex="-1"
                          >中文网页</a
                        >
                      </li>
                      <li class="hdtbItm" id="lr_lang_1en|lang_1zh-CN">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnt&amp;tbs=lr:lang_1en%7Clang_1zh-CN&amp;lr=lang_en%7Clang_zh-CN&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOEBw"
                          role="presentation"
                          tabindex="-1"
                          >简体中文 和 英语网页</a
                        >
                      </li>
                    </ul>
                  </div></g-popup
                ><g-popup
                  jscontroller="NZI0Db"
                  jsaction="A05xBd:IYtByb;"
                  jsdata="mVjAjf;;AA4EGA"
                  data-jsdata=""
                  ><div
                    jsname="oYxtQd"
                    class="rIbAWc hide-focus-ring"
                    tabindex="0"
                    aria-expanded="false"
                    aria-haspopup="true"
                    role="button"
                    jsaction="WFrRFb;keydown:uYT2Vb"
                  >
                    <div class="hdtb-mn-hd">
                      <div class="mn-hd-txt">时间不限</div>
                      <span class="mn-dwn-arw"></span>
                    </div>
                    <span class="hQKUmb"></span>
                  </div>
                  <div
                    jsname="V68bde"
                    class="EwsJzb"
                    style="display: none; z-index: 126"
                  >
                    <ul class="tFPnEd YD3ICb">
                      <li class="hdtbItm hdtbSel" id="qdr_" tabindex="0">
                        时间不限
                      </li>
                      <li class="hdtbItm" id="qdr_h">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnt&amp;tbs=qdr:h&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOECA"
                          role="presentation"
                          tabindex="-1"
                        >
                          过去 1 小时内</a
                        >
                      </li>
                      <li class="hdtbItm" id="qdr_d">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnt&amp;tbs=qdr:d&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOECE"
                          role="presentation"
                          tabindex="-1"
                        >
                          过去 24 小时内</a
                        >
                      </li>
                      <li class="hdtbItm" id="qdr_w">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnt&amp;tbs=qdr:w&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOECI"
                          role="presentation"
                          tabindex="-1"
                        >
                          过去 1 周内</a
                        >
                      </li>
                      <li class="hdtbItm" id="qdr_m">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnt&amp;tbs=qdr:m&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOECM"
                          role="presentation"
                          tabindex="-1"
                        >
                          过去 1 个月内</a
                        >
                      </li>
                      <li class="hdtbItm" id="qdr_y">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnt&amp;tbs=qdr:y&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOECQ"
                          role="presentation"
                          tabindex="-1"
                        >
                          过去 1 年内</a
                        >
                      </li>
                      <li class="hdtbItm" id="cdr_opt">
                        <div jscontroller="Uuupec" data-m="true">
                          <span
                            class="q"
                            id="cdrlnk"
                            jsaction="EEGHee"
                            data-ved="2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOECU"
                            >自定日期范围...</span
                          >
                          <div class="n5Ug4b" style="display: none">
                            <div class="vOvh1b" jsaction="xp3IKd"></div>
                            <div class="J6UZg" aria-modal="true" role="dialog">
                              <div class="Jy9Ore" role="heading">
                                自定日期范围
                              </div>
                              <label class="Qtsmnf tmDYm" for="OouJcb">从</label
                              ><label class="Qtsmnf iWBKNe" for="rzG2be"
                                >至</label
                              >
                              <div
                                class="Gwgzqd"
                                aria-label="关闭"
                                role="button"
                                tabindex="0"
                                jsaction="xp3IKd"
                              ></div>
                              <div class="NwEGxd">
                                <div class="qomYCd"></div>
                                <form
                                  action="/search"
                                  class="T3kYXe"
                                  id="T3kYXe"
                                  method="get"
                                >
                                  <input
                                    name="q"
                                    value="hha"
                                    type="hidden"
                                  /><input
                                    name="rlz"
                                    value="1C1CHWL_zh-CNHK917HK917"
                                    type="hidden"
                                  /><input
                                    name="sxsrf"
                                    value="ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328"
                                    type="hidden"
                                  /><input
                                    name="source"
                                    type="hidden"
                                    value="lnt"
                                  /><input
                                    value="cdr:1,cd_min:x,cd_max:x"
                                    id="HjtPBb"
                                    name="tbs"
                                    type="hidden"
                                  /><input
                                    value=""
                                    name="tbm"
                                    type="hidden"
                                  /><input
                                    class="OouJcb"
                                    type="text"
                                    value=""
                                    autocomplete="off"
                                    id="OouJcb"
                                    jsaction="focus:daRB0b"
                                  /><input
                                    class="rzG2be"
                                    type="text"
                                    value=""
                                    autocomplete="off"
                                    id="rzG2be"
                                    jsaction="focus:daRB0b"
                                  /><g-button
                                    class="Ru1Ao BwGU8e fE5Rge"
                                    jsaction="hNEEAb"
                                    role="button"
                                    tabindex="0"
                                    >开始搜索</g-button
                                  ><input
                                    type="submit"
                                    jsaction="zbvklb"
                                    style="display: none"
                                  />
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul></div></g-popup
                ><g-popup
                  jscontroller="NZI0Db"
                  jsaction="A05xBd:IYtByb;"
                  jsdata="mVjAjf;;AA4EGA"
                  data-jsdata=""
                  ><div
                    jsname="oYxtQd"
                    class="rIbAWc hide-focus-ring"
                    tabindex="0"
                    aria-expanded="false"
                    aria-haspopup="true"
                    role="button"
                    jsaction="WFrRFb;keydown:uYT2Vb"
                  >
                    <div class="hdtb-mn-hd">
                      <div class="mn-hd-txt">所有结果</div>
                      <span class="mn-dwn-arw"></span>
                    </div>
                    <span class="hQKUmb"></span>
                  </div>
                  <div
                    jsname="V68bde"
                    class="EwsJzb"
                    style="display: none; z-index: 126"
                  >
                    <ul class="tFPnEd YD3ICb">
                      <li class="hdtbItm hdtbSel" id="li_" tabindex="0">
                        所有结果
                      </li>
                      <li class="hdtbItm" id="li_1">
                        <a
                          class="q qs"
                          href="/search?q=hha&amp;rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk02nHvYKrf-chZLxjgXHrfUFGVdlCA:1602396018328&amp;source=lnt&amp;tbs=li:1&amp;sa=X&amp;ved=2ahUKEwi61dir7qvsAhUHHXAKHdaICu8QpwV6BAgOECo"
                          role="presentation"
                          tabindex="-1"
                          >精确匹配</a
                        >
                      </li>
                    </ul>
                  </div></g-popup
                >
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <div class="list" v-if="searchResult.hit">
        <div class="g" v-for="item in searchResult.hit" :key="item.id">
          <!-- <h2 class="Uo8X3b">网络搜索结果</h2> -->
          <!--m-->
          <div
            class="rc"
            data-hveid="CAIQAA"
            data-ved="2ahUKEwib_8m546vsAhWb7WEKHadwA8gQFSgAMAN6BAgCEAA"
          >
            <div class="yuRUbf">
              <a
                :href="item.detail_url"
                ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.hao123.com/&amp;ved=2ahUKEwib_8m546vsAhWb7WEKHadwA8gQFjADegQIAhAC"
                ><br />
                <h3 class="LC20lb DKV0Md">
                  <span>{{ item.title }}</span>
                </h3>
                <div class="TbwUpd NJjxre">
                  <cite class="iUh30 gBIQub tjvcx"
                    >{{ item.detail_url }}<span class="eipWBe"></span
                  ></cite>
                </div>
              </a>
              <!-- <div class="B6fmyf">
                <div class="TbwUpd">
                  <cite class="iUh30 gBIQub tjvcx"
                    >www.hao123.com<span class="eipWBe"></span
                  ></cite>
                </div>
                <div class="eFM0qc">
                  <span
                    ><div class="action-menu">
                      <a
                        class="GHDvEf"
                        href="#"
                        id="am-b3"
                        aria-label="结果选项"
                        aria-expanded="false"
                        aria-haspopup="true"
                        role="button"
                        jsaction="m.tdd;keydown:m.hbke;keypress:m.mskpe"
                        data-ved="2ahUKEwib_8m546vsAhWb7WEKHadwA8gQ7B0wA3oECAIQAw"
                        ><span class="mn-dwn-arw"></span
                      ></a>
                      <ol
                        class="action-menu-panel"
                        role="menu"
                        tabindex="-1"
                        jsaction="keydown:m.hdke;mouseover:m.hdhne;mouseout:m.hdhue"
                        data-ved="2ahUKEwib_8m546vsAhWb7WEKHadwA8gQqR8wA3oECAIQBA"
                      >
                        <li class="action-menu-item" role="menuitem">
                          <a
                            class="fl"
                            href="https://webcache.googleusercontent.com/search?q=cache:sDZXEYT0iTwJ:https://www.hao123.com/+&amp;cd=4&amp;hl=zh-CN&amp;ct=clnk&amp;gl=jp&amp;lr=lang_en%7Clang_zh-CN"
                            ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:sDZXEYT0iTwJ:https://www.hao123.com/%2B%26cd%3D4%26hl%3Dzh-CN%26ct%3Dclnk%26gl%3Djp%26lr%3Dlang_en%257Clang_zh-CN&amp;ved=2ahUKEwib_8m546vsAhWb7WEKHadwA8gQIDADegQIAhAF"
                            ><span>网页快照</span></a
                          >
                        </li>
                        <li class="action-menu-item" role="menuitem">
                          <a
                            class="fl"
                            href="/search?rlz=1C1CHWL_zh-CNHK917HK917&amp;sxsrf=ALeKk01kxGZiAqpVjaIIcIKxrwWHFqD3jA:1602393094658&amp;q=related:https://www.hao123.com/+123&amp;sa=X&amp;ved=2ahUKEwib_8m546vsAhWb7WEKHadwA8gQHzADegQIAhAG"
                            ><span>类似结果</span></a
                          >
                        </li>
                      </ol>
                    </div></span
                  >
                </div>
              </div> -->
            </div>
            <div class="IsZvec">
              <div>
                <span class="aCOpRe">
                  <span>
                    {{item.summary}}
                    <!-- <em>hao123</em>影视. -->
                  </span>
                </span>
                <!-- <div class="jYOxx">
                  <div class="St3GK">
                    &lrm;<a
                      href="https://tuijian.hao123.com/"
                      ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://tuijian.hao123.com/&amp;ved=2ahUKEwib_8m546vsAhWb7WEKHadwA8gQ0gIoADADegQIAhAI"
                      >头条新闻</a
                    >
                    · &lrm;<a
                      href="https://app.hao123.com/app"
                      ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://app.hao123.com/app&amp;ved=2ahUKEwib_8m546vsAhWb7WEKHadwA8gQ0gIoATADegQIAhAJ"
                      >Hao123 App官网</a
                    >
                    · &lrm;<a
                      href="https://www.hao123.com/api/gettop/?t0=4&amp;page=indexnew"
                      ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.hao123.com/api/gettop/%3Ft0%3D4%26page%3Dindexnew&amp;ved=2ahUKEwib_8m546vsAhWb7WEKHadwA8gQ0gIoAjADegQIAhAK"
                      >体育</a
                    >
                    · &lrm;<a
                      href="https://game.hao123.com/"
                      ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://game.hao123.com/&amp;ved=2ahUKEwib_8m546vsAhWb7WEKHadwA8gQ0gIoAzADegQIAhAL"
                      >游戏</a
                    >
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <!--n-->
        </div>

        <!-- <div class="rc">
          <div class="yuRUbf">
            <a
              href="https://www.cnblogs.com/chenyablog/p/6477866.html"
              ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://www.cnblogs.com/chenyablog/p/6477866.html&amp;ved=2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQFjAAegQIBRAC"
              ><br />
              <h3 class="LC20lb DKV0Md">
                <span>javaScript遍历对象、数组总结- 抖音2020 - 博客园</span>
              </h3>
              <div class="TbwUpd NJjxre">
                <cite class="iUh30 gBIQub bc tjvcx"
                  >www.cnblogs.com<span class="eipWBe"
                    ><span> › chenyablog</span></span
                  >
                </cite>
              </div>
            </a>
            <div class="B6fmyf">
              <div class="TbwUpd">
                <cite class="iUh30 gBIQub bc tjvcx"
                  >www.cnblogs.com<span class="eipWBe"
                    ><span> › chenyablog</span></span
                  ></cite
                >
              </div>
              <div class="eFM0qc">
                <span
                  ><div class="action-menu">
                    <a
                      class="GHDvEf"
                      href="#"
                      id="am-b0"
                      aria-label="结果选项"
                      aria-expanded="false"
                      aria-haspopup="true"
                      role="button"
                      jsaction="m.tdd;keydown:m.hbke;keypress:m.mskpe"
                      data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQ7B0wAHoECAUQBQ"
                      ><span class="mn-dwn-arw"></span
                    ></a>
                    <ol
                      class="action-menu-panel"
                      role="menu"
                      tabindex="-1"
                      jsaction="keydown:m.hdke;mouseover:m.hdhne;mouseout:m.hdhue"
                      data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQqR8wAHoECAUQBg"
                    >
                      <li class="action-menu-item" role="menuitem">
                        <a
                          class="fl"
                          href="https://webcache.googleusercontent.com/search?q=cache:aAeF93HY114J:https://www.cnblogs.com/chenyablog/p/6477866.html+&amp;cd=1&amp;hl=zh-CN&amp;ct=clnk&amp;gl=jp&amp;lr=lang_en%7Clang_zh-CN"
                          ping="/url?sa=t&amp;source=web&amp;rct=j&amp;url=https://webcache.googleusercontent.com/search%3Fq%3Dcache:aAeF93HY114J:https://www.cnblogs.com/chenyablog/p/6477866.html%2B%26cd%3D1%26hl%3Dzh-CN%26ct%3Dclnk%26gl%3Djp%26lr%3Dlang_en%257Clang_zh-CN&amp;ved=2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQIDAAegQIBRAH"
                          ><span>网页快照</span></a
                        >
                      </li>
                    </ol>
                  </div></span
                >
              </div>
            </div>
          </div>
          <div class="IsZvec">
            <div>
              <span class="aCOpRe"
                ><span class="f">2017年2月28日 — </span
                ><span
                  >javaScript<em>遍历对象</em>总结. 1、使用Object.keys()遍历
                  返回一个数组,包括对象自身的(<wbr />不含继承的)&nbsp;...</span
                ></span
              >
            </div>
          </div>
          <div
            jscontroller="m6a0l"
            id="eob_17"
            jsdata="fxg5tf;;AodRe0"
            data-jsdata=""
            jsaction="rcuQ6b:npT2md"
            data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQ2Z0BMAB6BAgFEAk"
          >
            <div
              jsname="UTgHCf"
              class="AUiS2"
              data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQx40DegQIDhAA"
            >
              <div jsname="d3PE6e" style="display: none">
                <div
                  data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQsKwBKAB6BAgOEAE"
                >
                  遍历 Object value
                </div>
                <div
                  data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQsKwBKAF6BAgOEAI"
                >
                  object.values
                </div>
                <div
                  data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQsKwBKAJ6BAgOEAM"
                >
                  Js 对象 in
                </div>
                <div
                  data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQsKwBKAN6BAgOEAQ"
                >
                  js深度遍历对象
                </div>
                <div
                  data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQsKwBKAR6BAgOEAU"
                >
                  js遍历对象foreach
                </div>
                <div
                  data-ved="2ahUKEwj98_efuaTsAhUP_GEKHbCxCpEQsKwBKAV6BAgOEAY"
                >
                  js遍历嵌套对象
                </div>
              </div>
              <div>
                <div jsname="l1CLDf" class="d8lLoc">
                  <h4 jsname="IaVMje" class="eJ7tvc">用户还搜索了</h4>
                  <span
                    jsname="ZnuYW"
                    class="XCKyNd"
                    jsaction="ornU0b"
                    aria-label="关闭建议的跟进内容"
                    role="button"
                    tabindex="0"
                  ></span>
                  <div jsname="CeevUc" class="hYkSRb"></div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
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

    let { q: queryword } = route.query;
    let inputValue = ref(queryword);

    let searchResult = ref({});

    let search = async () => {
      let queryword = inputValue.value;
      if (!queryword.replace(/\s*/g, "")) return;
      searchResult.value = await fetchHandler("api/search/complex", {
        q: queryword,
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
      search
    };
  },
};
</script>

<style lang="scss">
.realbox-container {
  margin-left: 160px !important;
}
.list {
  margin-left: 138px;

  margin-top: 28px;
}
.g,
input,
.std {
  font-size: 14px;
}
.g,
html,
input,
.std {
  font-family: arial, sans-serif;
}
.g {
  line-height: 1.2;
  text-align: left;
  width: 600px;
  margin-top: 0;
  margin-bottom: 28px;
  margin-left: 42px;
}
.rc {
  position: relative;
}
.yuRUbf {
  font-weight: normal;
  font-size: small;
  line-height: 1.2;
  a,
  a.feGi6e {
    color: #1a0dab;
    // text-decoration: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
  }
  // a:visited {
  //   color: #609;
  // }
  a:link {
    cursor: pointer;
  }
  a {
    h3 {
      display: inline-block;
      font-size: 20px;
      line-height: 1.3;
      padding-top: 9px;
      margin-bottom: 3px;
    }
    .NJjxre {
      position: absolute;
      left: 0;
      top: 0;
    }
    .TbwUpd {
      padding-bottom: 1px;
      padding-top: 1px;
      -webkit-text-size-adjust: none;

      display: inline-block;
      .iUh30 {
        font-size: 14px;
        padding-top: 1px;
        line-height: 1.3;
        span {
          .eipWBe {
            color: #5f6368;
          }
        }
      }
    }
  }
}
.IsZvec {
  max-width: 48em;
  color: #4d5156;
  line-height: 1.58;
  .aCOpRe {
    line-height: 1.58;
    word-wrap: break-word;
    em {
      color: #dd4b39;
      font-weight: normal;
      font-style: normal;
    }
  }
  .jYOxx {
    margin-top: 0px;
    .St3GK {
      color: #70757a;
      a,
      a.feGi6e {
        color: #1a0dab;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
      }
      a:visited {
        color: #609;
      }
      a:link {
        cursor: pointer;
      }
    }
  }
}
</style>