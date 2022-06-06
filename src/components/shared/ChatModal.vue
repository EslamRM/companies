<template>
  <div>
    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :icons="icons"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showEdition="true"
      :showDeletion="true"
      :showTypingIndicator="showTypingIndicator"
      :showLauncher="false"
      :showCloseButton="true"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :disableUserListToggle="false"
      :messageStyling="messageStyling"
      @onType="handleOnType"
      @edit="editMessage"
    />
  </div>
</template>
<script>
import fire from "./firbase/fire";
export default {
  name: "chat",
  data() {
    return {
      userName: "",
      showMessage: "",
      to: null,
      participants: [
        {
          id: "user1",
          name: "Matteo",
          imageUrl:
            "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4",
        },
        {
          id: "user2",
          name: "Support",
          imageUrl:
            "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4",
        },
        {
          id: "user2",
          name: "eslam",
          imageUrl:
            "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4",
        },
      ], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl:
        "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [
        { type: "text", author: `me`, data: { text: `Say yes!` } },
        { type: "text", author: `user1`, data: { text: `No.` } },
        { type: "text", author: `user2`, data: { text: `Wow.` } },
      ], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#6366f1",
          text: "#ffffff",
        },
        launcher: {
          bg: "#6366f1",
        },
        messageList: {
          bg: "#ffffff",
        },
        sentMessage: {
          bg: "#6366f1",
          text: "#ffffff",
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222",
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867",
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  methods: {
    updateUsername() {
      this.name = this.userName;
      console.log(this.userName);
      this.userName = "";
    },
    sendMessage2() {
      const message = {
        text: this.showMessage,
        from: this.name,
        to: this.to,
      };
      fire.database().ref("messages").push(message);
      this.showMessage = "";
    },
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen
          ? this.newMessagesCount
          : this.newMessagesCount + 1;
        this.onMessageWasSent({
          author: "support",
          type: "text",
          data: { text },
        });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      // const message = {
      //   text: this.showMessage,
      //   from: this.name,
      //   to: this.to,
      // };
      fire.database().ref("messages").push(message);
      this.showMessage = "";
      this.messageList = [...this.messageList, message];
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat
      this.isChatOpen = false;
    },
    handleScrollToTop() {
      // called when the user scrolls message list to top
      // leverage pagination for loading another page of messages
    },
    handleOnType() {
      console.log("Emit typing event");
    },
    editMessage(message) {
      const m = this.messageList.find((m) => m.id === message.id);
      m.isEdited = true;
      m.data.text = message.data.text;
    },
  },
  created() {
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
      this.messageList = [...this.messageList, messages];
    });
  },
};
</script>
<style>
.sc-chat-window.opened {
  bottom: 50px;
}
@media screen and (max-width: 450px) {
  .sc-chat-window.opened {
    bottom: 0;
  }
}
</style>
