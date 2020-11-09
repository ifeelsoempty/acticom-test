<template>
  <div class="popup_wrapper" ref="popup_wrapper">
    <div class="v-popup">
      <div class="v-popup__header">
        <span>Form</span>
        <span @click="closePopup">
          x
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
    background: rgba(64,64,64, .4);
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
  }
  .v-popup {
    padding: 16px;
    position: fixed;
    top: 50px;
    width: 400px;
    background: #ffffff;
    box-shadow: 0 0 17px 0 #e7e7e7;
    &__header, &__footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .submit-btn {
      padding: 8px;
      color: #ffffff;
      background: #26ae68;
    }
  }
</style>