<template>
    <div>
        <div class="quicklink_list">
            <div class="item">
                <img
                        style="height: 20px; margin-right: 20px"
                        src="@\assets\writing-icon.svg"
                        alt="comment"
                    />
                <div class="text">All Posts</div>
            </div>
            <div class="item">
                <img
                        style="height: 20px; margin-right: 20px"
                        src="@\assets\talking-icon.svg"
                        alt="comment"
                    />
                <div class="text">Storys</div>
            </div>
            <div class="item">
                <img
                        style="height: 20px; margin-right: 20px"
                        src="@\assets\hashtag-sign-round-outline-icon.svg"
                        alt="comment"
                    />
                <div class="text">Tags</div>
            </div>
            <div class="item">
                <img
                        style="height: 20px; margin-right: 20px"
                        src="@\assets\archive-line-icon.svg"
                        alt="comment"
                    />
                <div class="text">Archive</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Quicklinks",
        setup() {
            return {};
        }
    }
</script>

<style lang="css" scoped>
.item {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    align-items: center;
    border: 2px solid #838b8e;
    transition: background-color 0.5s;
    height: 40px;
}
.item :hover {
    cursor: pointer;
    transition: inherit;
    background-color: #000000;
}
.quicklink_list :hover {
    cursor: pointer;
    background-color: #000000;
}
</style>