<template>
<div class="Toolbar-container">
  <div class="Toobar">
    <div class="Toobar-wrap">
      <div class="Toobar-upBox">
        <div class="Toobar-logo">
          <router-link :to="home">
            <img src="../../assets/img/short logo.svg" class="main_logo">
          </router-link>
        </div>
        <div class="Toobar-search">
          <search-bar @addItem="addOneItem" class="Toolbar-search-bar" :styleObj="searchStyle" :propsSearchItems="searchItemList"></search-bar>
        </div>
      </div>
      <div class="Toobar-items">
        <router-link class="Toobar-items-item" :to="{ name : 'Subscribe' }">
          Subscriptions
        </router-link>
        <router-link class="Toobar-items-item Toobar_Btn" :to="{ name : 'Request' }">
          Request
        </router-link>
        <div class="Toobar-items-myinfo">
          <v-menu offset-y min-width="250">
            <v-btn icon slot="activator">
              <v-icon>perm_identity</v-icon>
            </v-btn>
            <v-list class="Toolbar-items-myinfo-contents">
              <v-list-tile>
                <v-list-tile-title>
                  <div class="Toolbar-items-myinfo-content">
                    {{ name }}
                  </div>
                </v-list-tile-title>
              </v-list-tile>
              <v-list-tile>
                <div class="Toolbar-items-myinfo-content">
                  {{ email }}
                </div>
              </v-list-tile>
              <v-divider/>
              <v-list-tile>
                <div class="Toolbar-items-myinfo-content">
                  <v-icon class="Toolbar-items-myinfo-content-icon">list</v-icon>
                  <span class="Toolbar-items-myinfo-content-text">내가 쓴 글</span>
                </div>
              </v-list-tile>
              <v-list-tile>

                <router-link class="menu-item" :to="{name:'myPage'}">
                  <div class="Toolbar-items-myinfo-content">
                    <v-icon class="Toolbar-items-myinfo-content-icon">folder</v-icon>
                    <div class="Toolbar-items-myinfo-content-text">Library</div>
                  </div>
                </router-link>

              </v-list-tile>
              <v-list-tile avatar class="Toolbar-items-myinfo-content-signout-section">
                <div class="Toolbar-items-myinfo-content Toolbar-items-myinfo-content-signout">
                  Sign out
                </div>
              </v-list-tile>
            </v-list>
          </v-menu>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      request: "/request",
      home: "/",
      name: "beenzino",
      email: "bridge@gmail.com",
      items: {},
      searchStyle: {
        width: "100%"
      },
      searchItemList: []
    };
  },
  components: {
    SearchBar
  },
  methods: {
    addOneItem(searchItem) {
      localStorage.setItem(searchItem, searchItem);
      this.searchItemList.push(searchItem);
      // this.searchItemList.
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.getItem(localStorage.key(i)) != "WARN")
          this.searchItemList.push(localStorage.getItem(localStorage.key(i)));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "styles/common.scss";
.Toobar {
  border-top: 3px solid $main-color;
  box-shadow: 0px 2px 6px 1px gray;
  z-index: 1;
  position: fixed;
  width: 100%;
  background-color: white;
  &-wrap {
    padding-top: 8px;
    padding-bottom: 8px;
    display: flex;
    @media screen and (max-width: 510px) {
      flex-wrap: wrap;
      padding-bottom: 4px;
    }
  }
  &-upBox {
    display: flex;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 3;
    margin-right: auto;
  }
  &-upBox {
    display: flex;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 3;
    margin-right: auto;
  }
  &-logo {
    margin-left: 3.5%;
    margin-right: 3.5%;
  }
  &-search {
    flex-grow: 1;
    margin-left: 7%;
  }
  &-items {
    display: inline-flex;
    flex-grow: 1;
    justify-content: flex-end;
    user-select: none;
    padding-right: 3%;
    @include media("(max-width: 510px)") {
      justify-content: space-around;
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 7px;
      font-size: 17px;
      flex-shrink: 1;
      margin: {
        left: 5px;
        right: 7%;
      }
      padding: 5px;
      @include media("(max-width: 860px)") {
        font-size: 12px;
        margin: {
          right: 3%;
        }
      }
      @include media("(max-width: 510px)") {
        font-size: 17px;
        margin: {
          left: 0px;
          right: 0px;
        }
      }
      &:hover {
        transition: 0.5s;
        background-color: rgba(151, 150, 150, 0.596);
      }
      color: black;
      text-decoration: none;
      &:visited {
        color: black;
        text-decoration: none;
      }
    }
  }
}

.menu-item {
  text-decoration: none;
  color: black;
  width: 100%;
  height: 90%;
  display: flex;
  .Toolbar-items-myinfo-content {
    display: flex;
    align-items: center;

  }
  &:hover {
    transition: 0.5s;
    background-color: rgba(151, 150, 150, 0.596);
  }
}

.main_logo {
  width: 60px;
  margin-top: 8px;
}

.nav-search-btn {
  height: 45px;
  width: 45px;
  background-color: $main-color;
  margin-right: auto;
  @include media("(max-width : 510px)") {
    margin-right: 8px;
  }
}

.Toolbar-items-myinfo {
  &-content {
    width: 100%;
    padding: 0px 10px 0px 10px;
    &-text {
      padding-left: 15px;
    }
    &-signout {
      //   height : 130%;
      width: 90%;
      height: 70%;
      line-height: 40px;
      text-align: center;
      background-color: $main-color;
      color: white;
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>