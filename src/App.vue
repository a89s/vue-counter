<template>
  <button @click="increaseCounter(20)">
    Increase counter
  </button>
  <button @click="decreaseCounter(0)">
    Decrease counter
  </button>
  <button @click="resetValue">
    Reset
  </button>
  <div class="counter"><span>Count {{ count }}</span> {{ message }}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      message: "Vue counter!"
    }
  },
  methods: {
    increaseCounter(increaseLimit) {
      if(this.count < increaseLimit)
        this.count++
    },
    decreaseCounter(decreaseLimit) {
      if(this.count > decreaseLimit)
        this.count--
    },
    resetValue() {
      this.count = 0;
    }
  }
}
</script>

<style scoped>
button {
  padding: 20px;
  border-radius: 10px;
  border: 0px solid white;
  margin-left: 10px;
}
span {
  font-weight: bold;
  font-size: 28px;
}
.counter {
  padding: 20px;
  text-transform: uppercase;
}
</style>
