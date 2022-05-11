<template>
  <div>
    <!-- Project heading and meta info -->
    <div class="flex items-center">
      <div
        class="w-7 h-7 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl flex items-center justify-center Clogo cursor-pointer shadow-lg font-general-medium text-left text-md sm:text-3xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7 mr-2 sm:mr-5"
      >
        R
      </div>
      <p
        class="font-general-medium text-left xl-text-4xl lg:text-3xl md:text-xl sm:text-md font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
      >
        {{ singleProjectHeader.singleProjectTitle }}
      </p>
      <div class="verified mt-9 sm:mt-16 ml-1 sm:ml-3">
        <span>✔</span>
      </div>
    </div>

    <div class="flex">
      <div class="flex items-center mr-10">
        <i
          data-feather="clock"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-1 sm:ml-2 text-xs sm:text-md txt-mobile2 leading-none text-primary-dark dark:text-primary-light"
          >{{ singleProjectHeader.singleProjectDate }}</span
        >
      </div>
      <div class="flex items-center">
        <i
          data-feather="tag"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-1 sm:ml-2 text-xs sm:text-md txt-mobile2 leading-none text-primary-dark dark:text-primary-light"
          >{{ singleProjectHeader.singleProjectTag }}</span
        >
      </div>
      <div class="ml-10 flex items-center" role="button">
        <router-link to="/settings" class="flex items-center">
          <i
            data-feather="settings"
            class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
          ></i>
          <span
            class="font-general-medium ml-1 sm:ml-2 text-xs sm:text-md txt-mobile2 leading-none text-primary-dark dark:text-primary-light"
            >Settings</span
          >
        </router-link>
      </div>
      <div
        class="flex items-center ml-10 chat-box rounded-xl"
        @click="openChat()"
      >
        <i
          data-feather="message-circle"
          class="w-4 h-4 text-ternary-dark dark:text-ternary-light"
        ></i>
        <span
          class="font-general-medium ml-1 sm:ml-2 text-xs sm:text-md txt-mobile2 leading-none text-primary-dark dark:text-primary-light"
          >Chat</span
        >
      </div>
    </div>
    <Chat ref="open" />
  </div>
</template>
<script>
import Chat from "../shared/ChatModal";
export default {
  props: ["singleProjectHeader"],
  data() {
    return {
      open: false,
    };
  },
  components: {
    Chat,
  },
  methods: {
    openChat() {
      this.$refs.open.openChat();
    },
  },
};
</script>
<style>
.Clogo {
  border: 3px solid #6366f1;
}
.verified {
  width: 20px;
  height: 20px;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  background: #6366f1;
  border-radius: 50%;
  color: #fff;
}
.chat-box {
  padding: 5px;
  border: 3px solid #6366f1;
  cursor: pointer;
}
.chat {
  width: 400px;
  margin: auto;
  border: 2px solid #6467f1;
  border-radius: 10px;
  position: fixed;
  right: 5%;
  bottom: 5%;
  background: #fff;
}
.one-logo img,
.two-logo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.one-logo {
  align-items: center;
  justify-content: end;
}

.one-message,
.two-message {
  background: #eee;
  border-radius: 10px;
  width: 80%;
}
.close {
  color: #888;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  margin-right: 10px;
  border-radius: 50%;
  cursor: pointer;
}
@media screen and (max-width: 300px) {
  .verified {
    width: 15px;
    height: 15px;
    display: flex;
    font-size: 10px;
  }
}
</style>
