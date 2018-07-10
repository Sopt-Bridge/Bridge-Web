<template>
<v-menu offset-x :close-on-content-click="false" left>
  <v-btn flat slot="activator">EDIT</v-btn>
  <v-list>
    <v-menu id="menu-in-rename" offset-overflow :close-on-content-click="false">
      <v-list-tile class="menu-list-item" slot="activator">
        <v-list-tile-title>
          Rename
        </v-list-tile-title>
      </v-list-tile>
      <v-card>
        <form class="menu-form">
          <input type="text" placeholder="Folder name">
          <div class="btnGroup">
            <div class="menu-btn Cancle">
              <div>
                Cancle
              </div>
            </div>
            <div class="menu-btn Rename">
              <div>
                Rename
              </div>
            </div>
          </div>
        </form>
      </v-card>
    </v-menu>
    <v-list-tile class="menu-list-item">
      <v-list-tile-title>
        Delete
      </v-list-tile-title>
    </v-list-tile>
  </v-list>
</v-menu>
</template>
<script>
export default {

}
</script>
<style lang='scss' scoped>
.menu {
  &-form {
    width: 250px;
    text-align: center;
    padding: 20px;
    input {
      width: 100%;
      border: 2px solid #C3C3C3;
    }
    .Cancle {
      color: white;
      background-color: #C3C3C3;
      margin-right: 5px;
    }
    .Rename {
      color: white;
      background-color: #E31C9E;
      margin-left: 5px;
    }
    .btnGroup {
      margin-top: 13px;
      display: flex;
    }
  }
  &-btn {
    flex-grow: 1;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.menu-list-item {
  border-radius: 2px;
}

.menu-list-item:hover {
  transition: 0.3s;
  background-color: rgba(141, 141, 141, 0.5);
}

#menu-in-rename {
  top: -7px;
}
</style>
