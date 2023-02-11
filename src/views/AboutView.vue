<template>
  <div class="about">
    <h3>계좌조회</h3>
    {{ ddd }}

    <button @click="bohye">클릭</button>
    {{ dd }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      dd: 1,
    };
  },
  computed: {
    ddd() {
      return 3;
    },
  },
  created() {
    // const url = "https://openapi.openbanking.or.kr/oauth/2.0/";
    // const proxy = "https://cors-anywhere.herokuapp.com/";
    // axios
    //   .get(
    //     url +
    //       `authorize?response_type=code&client_id=f9187864-bcf8-4cfe-a1c6-d1060be387e3&redirect_uri=http://localhost:8880/account&scope=login inquiry transfer&state=b80BLsfigm9OokPTjy03elbJqRHOfGSY&auth_type=0`,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(process.env);
  },
  mounted() {
    this.getAccountInfo();
  },
  methods: {
    bohye() {
      this.dd += 1;
      //  response_type: "code",
      //   client_id: "f9187864-bcf8-4cfe-a1c6-d1060be387e3",
      //   redirect_uri: "http://localhost:8880/account",
      //   scope: "login inquiry transfer",
      //   state: "b80BLsfigm9OokPTjy03elbJqRHOfGSY",
      //   auth_type: 0,
    },
    getAccountInfo() {
      const url = "https://openapi.openbanking.or.kr/oauth/2.0/";
      const proxy = "https://cors-anywhere.herokuapp.com/";

      axios
        .get(
          `/api/oauth/2.0/authorize?response_type=code&client_id=f9187864-bcf8-4cfe-a1c6-d1060be387e3&redirect_uri=http://localhost:8880/account&scope=login inquiry transfer&state=b80BLsfigm9OokPTjy03elbJqRHOfGSY&auth_type=0`,
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
