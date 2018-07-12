

<template>
    <div>
        <p>{{a}}</p>
        <p>{{c.a}}</p>
        <button @click="click">点击</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            a: '235e56r5',
            b : "12343453",
            c : {a:1222}
        }
    },
    methods: {
        click () {
            this.a = 1181;
        }
    },
    watch: {
        a (val,oldVal) {
            val == 111 ? this.a = 222 : this.a = 333
            console.log(val+"---"+oldVal)
        }
    }
    
}
</script>

<style>

</style>

