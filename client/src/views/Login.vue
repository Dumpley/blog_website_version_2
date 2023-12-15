<template>
    <div class="wrapper">
        <h1>Log in</h1>
        <div class="error" v-html="error"></div>
        <div class="success" v-html="successmessage"></div>
        <div class="login">
            <input
                class="username"
                v-model="username"
                type="text"
                name="username"
                placeholder="user name"
                @keyup.enter="nextInput('passwordInput')"
            />
            <input
                class="userpassword"
                v-model="userpassword"
                type="password"
                name="userpassword"
                placeholder="password"
                ref="passwordInput"
                @keyup.enter="login"
            />
            <br />
            <button @click="login">
                <img
                    style="height: 20px; margin-right: 10px"
                    src="@\assets\green-checkmark-line-icon.svg"
                    alt="comment"
                />
                <div>Confirm</div>
            </button>
        </div>
    </div>
</template>

<script>
import AuthenticationService from "@/services/Services/AuthenticationService.js";

export default {
    data() {
        return {
            username: "",
            userpassword: "",
            error: null,
            successmessage: null,
        };
    },
    methods: {
        async login() {
            try {
                await AuthenticationService.login({
                    username: this.username,
                    userpassword: this.userpassword,
                });
                this.successmessage = "<b>You are logged in</b>";
                this.error = null;
            } catch (error) {
                this.error = error.response.data.error;
                this.successmessage = null;
            }
        },
        nextInput(inputRef) {
            this.$refs[inputRef].focus();
        },
    },
};
</script>

<style scoped>
.login {
    border: 2px solid #838b8e;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 10px 10px;
}

.login input {
    margin: 10px 0px;
    background-color: #195474;
    border: 2px solid #838b8e;
    border-radius: 25px;
    font-size: large;
    padding: 10px;
    caret-color: #fff;
    color: inherit;
}
.login button {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    background-color: #195474;
    border-radius: 25px;
    border: 2px solid #838b8e;
    border-radius: 25px;
    font-size: large;
    color: inherit;
    width: 100%;
    padding: 10px 10px 10px 0px;
}
.login :hover {
    cursor: pointer;
}
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.error {
    color: red;
}
.success {
    color: green;
}
</style>
