<template>
    <div class="contador">
        <span>{{contador}}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrai">-</button>
    </div>
</template>

<script>
    export default {
        name: "contador",
        data(){
            return {
                contador: 0
            }
        },
        methods:{
            adicionar(){
                this.contador++
            },
            subtrai(){
                this.contador--
            }
        }
    }
</script>

<style scoped>
    .contador span {
        border-bottom: 1px solid #CCCCCC;
        height: 30px;
        padding: 5px 25px;
    }

    .contador button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background-color: coral;
        color: #ffffff;
        margin-left: 10px;
        outline: none;
    }
</style>