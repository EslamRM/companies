<template>
  <div id="app">
    <div
      class="max-w-md h-full w-1/3 fixed bottom-3 right-3 z-50 min-h-screen shadow-lg bg-white"
    >
      <!-- header -->
      <div
        class="p-4 rounded-lg dark:bg-gray-700 absolute top-3 right-3 w-full overflow-hidden"
        style="height: 15%"
      >
        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <div class="flex justify-between items-center">
            <svg
              v-if="to"
              @click="to = null"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
              {{ to ? to : "Contacts" }}
            </h3>
          </div>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <!-- Modal body -->
      <div
        v-if="!to"
        class="p-4 absolute top-24 w-full overflow-auto"
        style="height: 80%"
      >
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          role="button"
          @click="to = contact"
          class="my-2 text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <div
            rol="button"
            class="relative flex items-center w-full px-4 py-2 text-base font-medium rounded-t-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            <img
              class="w-8 h-8 mr-2 fill-curren p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500t"
              src="../../assets/logo.jpg"
              alt="currentColor"
            />
            <div class="flex-row text-left items-center">
              <h4>{{ contact }}</h4>
              <p class="text-sm text-gray-500">hi how are you</p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        class="p-4 absolute top-24 w-full overflow-auto"
        style="height: 80%"
      >
        <div class="">
          <ul class="" v-if="filtermessages">
            <li
              class="pl-2 pt-1 ml-2 message-text mb-2"
              v-for="message in filtermessages"
              :key="message"
            >
              <!-- <span class="mg-text mr-2">{{ message.username + " >>" }}</span> -->
              <!-- <span class="text-green-500">{{ message.to }}</span> -->
              <div
                class="bg-indigo-500 text-gray-100 py-1 px-2 rounded-lg ml-auto w-fit"
                v-if="message.sent.to == name"
              >
                <p class="message pt-1 text-right">
                  {{ message.sent.message }}
                </p>
              </div>
              <div
                class="text-gray-500 bg-gray-100 py-1 px-2 rounded-lg mr-auto w-fit"
                v-if="message.recieve.from == to"
              >
                <p class="message pt-1 text-left">
                  {{ message.recieve.message }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Modal footer -->
      <div class="absolute bottom-0 w-full overflow-hidden" style="height: 15%">
        <div
          v-if="to"
          class="flex items-center justify-between bg-gray-100 rounded-b border-t border-gray-200 dark:border-gray-600 p-3 absolute bottom-0 w-full"
        >
          <input
            type="text"
            v-model="showMessage"
            class="text-gray-900 text-sm rounded-lg block w-full p-2.5 border-0"
          />
          <div class="mx-2" role="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
              />
            </svg>
          </div>
          <div class="mx-2" role="button" @click="sendMessage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 18 18"
              aria-labelledby="Send"
              role="role"
              color="#565867"
            >
              <title id="Send" lang="en">Send</title>
              <g fill="currentColor">
                <path
                  d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="message-body mt-3">
      <h3>Chat</h3>
      <h5>Welcome {{ name }}!</h5>
      <div class="card2">
        <div class="card-body2">
          <div
            class="border pl-2 pt-1 ml-2 message-text mb-2"
            v-for="message in messages"
            :key="message"
          >
            <span class="mg-text mr-2">{{ message.username + " >>" }}</span>
            <span class="text-green-500">{{ message.to }}</span>
            <p class="message pt-1">{{ message.text }}</p>
          </div>
        </div>
      </div>
      <input v-model="showMessage" type="text" class="mt-3 mr-2 pl-2 pr-2" />
      <button class="py-2 px-3 bg-green-500" @click="sendMessage()">
        Send
      </button>
    </div>
  </div>
</template>
<script>
import fire from "./firbase/fire";
import { mapState } from "vuex";
export default {
  name: "test-chate",
  data() {
    return {
      contacts: [
        "Sulaiman",
        "Admin",
        "UAE Business Council",
        "Full Package Company",
      ],
      userName: "",
      showMessage: "",
      messages: [],
      to: null,
    };
  },
  computed: {
    ...mapState({
      access: (state) => state.auth.accesstoken,
      name: (state) => state.auth.name,
      userImg: (state) => state.auth.user_img,
      userId: (state) => state.auth.council_id,
    }),
    filtermessages() {
      return this.messages.filter((message) => message.username == this.name);
    },
  },
  methods: {
    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
    },
    sendMessage() {
      const message = {
        username: this.name,
        sent: {
          to: this.to,
          message: this.showMessage,
        },
        recieve: {
          from: this.name,
          message: this.showMessage,
        },
      };
      fire.database().ref("messages").push(message);
      this.showMessage = "";
    },
  },
  created() {
    // let viewMessage = this;
    const itemsRef = fire.database().ref("messages");
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach((key) => {
        messages.push({
          id: key,
          username: data[key].username,
          sent: { to: data[key].sent.to, message: data[key].sent.message },
          recieve: {
            from: data[key].recieve.from,
            message: data[key].recieve.message,
          },
        });
      });
      this.messages = messages;
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");
#app {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
.login {
  background: #fff;
  width: 40%;
  height: 50vh;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}
h3 {
  font-size: 30px;
  text-align: center;
}
input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  padding-left: 2px;
  padding-right: 2px;
}
.message-body {
  width: 40%;
  height: 80vh;
  margin: auto;
}
.message-text {
  min-width: 10%;
  border-radius: 4px;
}
.message {
  font-size: 14px;
}
.mg-text {
  color: rgb(0, 195, 255);
  font-weight: bolder;
}
.message-body input {
  width: 80%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  height: 6vh;
  padding-left: 2px;
  padding-right: 2px;
}
.card {
  width: 100%;
  height: 75vh;
  margin: auto;
}
.card-body {
  min-height: 50vh;
  overflow-x: scroll;
}
.chat {
  position: fixed;
  right: 10px;
  bottom: 10px;
  background: #fff;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
}
</style>
