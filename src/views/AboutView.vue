<template>
  <div class="about"></div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dd: "22",
    };
  },
  created() {
    console.log();
  },
  mounted() {
    this.getAccountInfo();
  },
  methods: {
    getAccountInfo() {
      axios
        .get("https://openapi.openbanking.or.kr/oauth/2.0/authorize", {
          hearders: {
            "Access-Control-Allow-Origin": "http://localhost:8080/",
          },
          response_type: "code",
          client_id: "f9187864-bcf8-4cfe-a1c6-d1060be387e3",
          redirect_uri: "http://localhost:8080/account",
          scope: "login inquiry transfer",
          state: "231312983190481241842",
          auth_type: "0",
        })
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
