<template>
  <div class="page" :style="`height:${screenHeight}px`">
    <img class="bindcard" src="@/../images/bindcard.jpg" alt />
  </div>
</template>

<script>
import Vue from "vue";

export default {
  components: {},
  data() {
    return {
      
    };
  },
  computed: {},
  created() {
    
  },
  mounted() {
    
  },
  destroyed() {
    
  },
  methods: {
    
  },
};
</script>

<style scoped>
.page {
  width: 100%;
  background-color: white;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bindcard {
    width: 60%;
    height: 60%;
}
</style>
