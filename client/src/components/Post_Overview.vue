<template>
    <PostPop v-if="store.showPopUp"></PostPop>
    <div class="wrapper_all" @click="store.toggle_pop_up()">
        <div class="post_overview_wrapper">
            <div class="tag">Tag</div>
            <div class="title">This is a title of a post</div>
            <div class="description">
                <p>a desciption</p>
            </div>
            <div class="likes_and_comment_wrapper">
                <div class="likes_counter">
                    <img
                        style="height: 20px; margin-right: 20px"
                        src="@\assets\speaking-bubbles-line-icon.svg"
                        alt="heart"
                    />
                    <div>0</div>
                </div>
                <div class="comment_counter_link">
                    <img
                        style="height: 20px; margin-right: 20px"
                        src="@\assets\heart-thin-icon.svg"
                        alt="comment"
                    />
                    <div>0</div>
                </div>
            </div>
        </div>
        <div class="picture_wrapper">
            <div class="picture"></div>
        </div>
    </div>
</template>

<script>
import PostPop from "@/components/PostPOP.vue";
import { usePostStore } from "@/pinia_store/post_store";

export default {
  components: {
    PostPop,
  },
  setup() {
    const store = usePostStore()

    return {
        store
    }
  },
};
</script>

<style lang="css" scoped>
.description {
    height: 60%;
    text-align: center;
}
.tag {
    height: 10%;
}
.title {
    height: 20%;
}
.wrapper_all {
    margin: 10px;
    margin-right: 0px;
    margin-top: 0;
    border: 2px solid #838b8e;
    display: flex;
    height: 180px;
    padding: 10px;
    cursor: pointer;
}
.picture_wrapper {
    width: 30%;
    background-color: green;
}
.post_overview_wrapper {
    width: 70%;
    display: flex;
    flex-direction: column;
    padding-right: 10px;
}
.likes_and_comment_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: left;
}
.likes_counter {
    margin-left: 5px;
    display: flex;
    flex-direction: row;
}
.comment_counter_link {
    margin-left: 100px;
    display: flex;
    flex-direction: row;
}
</style>
