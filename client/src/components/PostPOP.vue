<template>
    <div class="popup-overlay">
        <div class="popup">
            <span class="close-btn">&times;</span>
            <h2>Welcome to the Popup!</h2>
            <p>This is the content of the popup.</p>
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    text-align: center;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
}
</style>
