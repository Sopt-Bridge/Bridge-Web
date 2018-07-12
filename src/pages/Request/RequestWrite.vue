<template>
  <div class="req-write">
  
    <v-container>
      <v-layout row wrap class="req-write-title">
        <h1>
          Request
        </h1>
      </v-layout>
      <div class="req-write-contents">
        <v-layout row wrap class="req-write-user-section req-write-user-title">
          <v-flex xs12 sm12 md12 lg12>
            <input type="text" class="req-write-user-content" :placeholder="title" v-model="requestTitle">
          </v-flex>
  
        </v-layout>
        <v-layout row wrap class="req-write-user-section">
          <v-flex xs12 sm12 md12 lg12>
            <input type="text" class="req-write-user-content" :placeholder="link" v-model="requestLink">
          </v-flex>
        </v-layout>
        <v-layout row wrap class="req-write-user-content-section">
          <v-flex xs12 sm12 md12 lg12>
            <!-- <input type="text" class="req-write-user-content" :placeholder="link"> -->
            <textarea class="req-write-user-content" :placeholder="content" v-model="requestContent"></textarea>
          </v-flex>
        </v-layout>
      </div>
      <div class="text-xs-center req-final-btn">
        <button class="req-write-cancel req-write-btn" onclick="history.go(-1);return false">Cancel</button>
        <button class="req-write-submit req-write-btn" @click="requestWriteFunc">Submit</button>
      </div>
    </v-container>
  </div>
</template>

<script>
  import axios from 'axios'
  const api = 'http://13.124.201.59'
  export default {
    data() {
      return {
        title: "Please input title...",
        link: "Please input link you want to translate...",
        content: "Please input content of request...",
        requestTitle: "",
        requestLink: "",
        requestContent: ""
      };
    },
    methods: {
      requestWriteFunc() {
        if (!(this.requestTitle == "" || this.requestContent == "")) {
          let data = {
            userIdx: 1,
            iboardTitle: this.requestTitle,
            iboardUrl: this.requestLink,
            iboardContent: this.requestContent
          }
          axios.post(api + '/trequest/trequest_write', data).then(res => {
            console.log(res);
          })
          this.requestTitle = "";
          this.requestLink = "";
          this.requestContent = "";
          alert("Writing complete");
          this.$router.go(-1);
        } else {
          this.requestTitle = "";
          this.requestLink = "";
          this.requestContent = "";
          alert("Fill in the blank");
        }
        
  
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "styles/common.scss";
  .req-write-title {
    margin-top: 44px;
    max-width: 1360px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    @include media("(max-width : 510px)") {
      margin-top: 20px;
    }
  }
  
  .req-write-contents {
    margin-top: 54px;
    @include media("(max-width : 510px)") {
      margin-top: 20px;
    }
  }
  
  .req-write-user {
    &-section {
      margin-top: 24px;
      max-width: 1177px;
      height: 55px;
      border: 1px solid $grey-text;
      border-radius: 5px;
      margin-left: auto;
      margin-right: auto;
      padding: 10px 10px 10px 10px;
    }
    &-content {
      width: 100%;
      height: 100%;
      &-section {
        margin-top: 24px;
        height: 430px;
        border: 1px solid $grey-text;
        border-radius: 5px;
        margin-left: auto;
        margin-right: auto;
        padding: 10px 10px 10px 10px;
        @include media("(max-width : 510px)") {
          height: 300px;
        }
      }
    }
  }
  
  .req-write-btn {
    border: 1px solid $grey-text;
    border-radius: 5px;
    width: 93px;
    height: 44px;
  }
  
  .req-write-cancel {
    margin-right: 15px;
  }
  
  .req-write-submit {
    margin-left: 15px;
    background-color: $main-color;
    color: white;
  }
  
  .req-final-btn {
    margin-top: 40px;
  }
</style>
