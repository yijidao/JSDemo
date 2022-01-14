<template >
    <div id="counter">Counter: {{ couter }}</div>
    <div>
        <p>{{message}}</p>
        <input v-model="message" />
        
    </div>
</template>
<script>

export default {
    data() {
        return {
            couter: 0,
            message: "1"
        }
    },
    mounted() {
        setInterval(() => {
            this.couter++;
        }, 1000);
    },
}



</script>
<style lang="css">
</style>