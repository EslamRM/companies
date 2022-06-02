<template>
  <div id="app">
    <!-- Login section -->
    <!-- <div class="login mt-5" v-if="!name">..................</div> -->

    <!-- Chat section -->
    <div class="message-body mt-3">
      <h3>Chat</h3>
      <h5>Welcome {{ name }}!</h5>
      <div class="card">
        <div class="card-body">
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
      <button class="py-2 px-3 bg-green-500" @click="sendMessage">Send</button>
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
      userName: "",
      showMessage: "",
      messages: [],
      to: "test",
    };
  },
  computed: {
    ...mapState({
      access: (state) => state.auth.accesstoken,
      name: (state) => state.auth.name,
      userImg: (state) => state.auth.user_img,
      userId: (state) => state.auth.council_id,
    }),
  },
  methods: {
    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
    },
    sendMessage() {
      const message = {
        text: this.showMessage,
        from: this.name,
        to: this.to,
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
          username: data[key].from
            ? data[key].from
            : data[key].username || "test",
          to: data[key].to,
          text: data[key].text,
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
</style>
