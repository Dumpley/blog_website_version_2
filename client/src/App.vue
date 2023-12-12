<template>
    <div class="NavBar">
        <router-link
            :class="{ link: true, active: activeLink === 'home' }"
            to="/"
            @click="setActiveLink('home')"
        >
            <div class="selection">Home</div>
        </router-link>

        <router-link
            :class="{ link: true, active: activeLink === 'register_user' }"
            to="/register_user"
            @click="setActiveLink('register_user')"
        >
            <div class="selection">Log In</div>
        </router-link>

        <router-link
            :class="{ link: true, active: activeLink === 'about' }"
            to="/about"
            @click="setActiveLink('about')"
        >
            <div class="selection">About</div>
        </router-link>
    </div>
    <router-view />
</template>

<script>
export default {
    data() {
        return {
            activeLink: "home",
        };
    },
    mounted() {
        this.activeLink = localStorage.getItem("activeLink") || this.activeLink;
    },
    methods: {
        setActiveLink(link) {
            this.activeLink = link;
            localStorage.setItem("activeLink", link);
        },
    },
};
</script>

<style>
#app {
    --primary-color: #195474;
    --secondary-color: #55b9c9;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #ffffff;
    background-color: #171c22;
    margin: 0px;
    padding: 5%;
}

.link:first-child {
    margin-left: 10px;
}

.link {
    text-decoration: none;
    color: inherit;
    font-size: larger;
    margin: 10px;
    margin-left: 5%;
    border: 2px solid #838b8e;
    padding: 10px 50px 10px 50px;
    transition: background-color 0.5s;
}

.link:hover {
    background-color: #000000;
}

.selection {
    transition: background-color 0.5s;
}

.selection:hover {
    background-color: inherit;
}

.NavBar {
    border: 2px solid #838b8e;
    margin-bottom: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.link.active {
    border: 2px solid #55b9c9;
    background-color: #1d5272;
}
</style>
