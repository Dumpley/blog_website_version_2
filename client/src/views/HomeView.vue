<template>
        <div class="starting_page">
            <div class="sider">
                <Profile></Profile>
                <Quicklinks></Quicklinks>
            </div>
            <div class="post_list">
                <Post_Overview></Post_Overview>
            </div>
        </div>
</template>

<script>
// @ is an alias to /src
import Post_Overview from "@/components/Post_Overview.vue";
import Profile from "@/components/Profile.vue";
import Quicklinks from "@/components/Quicklinks.vue";

export default {
    name: "HomeView",
    components: {
        Profile,
        Quicklinks,
        Post_Overview,
    },
};
</script>

<style lang="css">
.starting_page {
    display: flex;
    flex-direction: row;
}
.post_list {
    width: 100%;
}
</style>
