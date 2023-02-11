<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import axios from "axios";
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  mounted() {
    this.getAccountInfo();
  },
  methods: {
    getAccountInfo() {
      const url = "https://openapi.openbanking.or.kr/oauth/2.0/";
      const proxy = "https://cors-anywhere.herokuapp.com/";

      axios
        .get(
          `/api?response_type=code&client_id=f9187864-bcf8-4cfe-a1c6-d1060be387e3&redirect_uri=http://localhost:8880/account&scope=login inquiry transfer&state=b80BLsfigm9OokPTjy03elbJqRHOfGSY&auth_type=0`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
