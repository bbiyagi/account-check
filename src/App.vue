<template>
  <div class="about">
    <h3>계좌조회</h3>
    <!-- <form
      method="get"
      action="https://testapi.openbanking.or.kr/oauth/2.0/authorize"
    >
      <input name="response_type" value="code" />
      <input
        type="hidden"
        name="client_id"
        value="f9187864-bcf8-4cfe-a1c6-d1060be387e3"
      />
      <input type="hidden" name="redirect_uri" value="http://localhost:8880/" />
      <input type="hidden" name="scope" value="login inquiry transfer" />
      <input
        type="hidden"
        name="state"
        value="b80BLsfigm9OokPTjy03elbJqRHOfGSY"
      />
      <input type="hidden" name="auth_type" value="0" />
      <input type="submit" value="requestAuth" />
    </form> -->

    <form
      method="post"
      action="https://testapi.openbanking.or.kr/oauth/2.0/token"
      target="_blank"
    >
      <input
        type="hidden"
        name="client_id"
        value="f9187864-bcf8-4cfe-a1c6-d1060be387e3"
      />
      <input
        type="hidden"
        name="client_secret"
        value="a8718ccf-5b47-408c-bb73-23f912d87820"
      />
      <input type="hidden" name="scope" value="oob" />
      <input type="hidden" name="grant_type" value="client_credentials" />
      <input type="submit" value="tokenAuth" />
    </form>

    <div @click="getToken">토큰발급</div>

    {{ err }}

    <div @click="getInfo">조회</div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";

export default {
  data() {
    return {
      err: "",
      token: "",
    };
  },
  created() {
    console.log(process.env);
  },

  mounted() {
    //  this.getToken();
  },
  methods: {
    getTokenPlease() {
      $.ajax({
        methods: "POST",
        url: "https://testapi.openbanking.or.kr/v2.0/oauth/2.0/token",
      }).done(function (msg) {
        console.log(msg);
      });
    },
    getToken() {
      axios
        .post(
          `http://testapi.openbanking.or.kr/v2.0/oauth/2.0/token/oauth/2.0/token`,
          {
            client_id: "f9187864-bcf8-4cfe-a1c6-d1060be387e3",
            client_secret: "a8718ccf-5b47-408c-bb73-23f912d87820",
            scope: "oob",
            grant_type: "client_credentials",
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          this.err = err;
        });
    },
    getInfo() {
      axios
        .post(`${process.env.VUE_APP_BASE_API}/inquiry/real_name`, {
          headers: { Authorization: "Bearer " + this.token },
          bank_tran_id: "",
          bank_code_std: "004",
          account_num: "60600201343847",
          account_holder_info_type: "",
          account_holder_info: "940803",
          tran_dtime: "",
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          this.err = err;
        });
    },
  },
};
</script>
