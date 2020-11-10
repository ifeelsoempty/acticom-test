<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span class="v-popup-close" @click="closePopup">
          &#10006;
        </span>
      </div>
      <div class="v-popup__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "v-popup",
    props: {},
    data() {
      return {}
    },
    methods: {
      closePopup(){
        this.$emit('closePopup');
      }
    },
    mounted() {
      let vm = this;
      document.addEventListener('click', (e) => {
        if(e.target === vm.$refs['popup_wrapper']){
          vm.closePopup();
        }
      })
    }
}
</script>

<style lang="scss">
  .popup_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background: rgba(64,64,64, .4);
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
  }
  .v-popup {
    padding: 35px;
    border-radius: $border-radius;
    position: fixed;
    width: 400px;
    top: 100px;
    background: #ffffff;
    box-shadow: $block-shadow;
    &-close{
      position: absolute;
      right: 15px;
      top: 10px;
      color: $red;
      cursor: pointer;
      &:hover{
        color: darken($red, 15%);
      }
    }
    &__header, &__footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>