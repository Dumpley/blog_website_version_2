<template>
    <div class="wrapper">
        <h1>Registration</h1>

        <div class="register">
            <input
                class="username"
                v-model="username"
                type="text"
                name="username"
                placeholder="user name"
            />
            <br />
            <input
                class="userpassword"
                v-model="userpassword"
                type="password"
                name="userpassword"
                placeholder="password"
            />
            <br />
            <button @click="register">
                <img
                        style="height: 20px; margin-right: 10px"
                        src="@\assets\green-checkmark-line-icon.svg"
                        alt="comment"
                    />
                <div>accept</div>
            </button>
        <div class="error" v-html="error"></div>
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
        };
    },
    methods: {
        async register() {
            try {
                await AuthenticationService.register({
                    username: this.username,
                    userpassword: this.userpassword
                })
            } catch (error) {
                this.error = error.response.data.error
            }
        },
    },
};
</script>

<style scoped>
.register {
    border: 2px solid #838b8e;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 5%;
    align-items: center;
    justify-content: center;
    padding: 10px 10px 10px 10px;
}

.register input {
    margin-top: 10px;
    background-color: #195474;
    border: 2px solid #838b8e;
    border-radius: 25px;
    font-size: large;
    padding: 10px;
    caret-color: #fff;
    color: inherit;
}

.register button {
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
.register :hover {
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
</style>
