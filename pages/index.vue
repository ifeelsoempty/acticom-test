<template>
  <div>
    <transition name="fade">
      <Popup v-if="isFormPopupVisible" @closePopup="closeFormPopup">
        <form @submit.prevent="submitForm" class="subscribe-form">
          <label>Your name:
            <input required v-model="name" class="subscribe-form-name" placeholder="Name" type="name">
          </label>
          <label>Your email:
            <input required v-model="email" class="subscribe-form-email" placeholder="Email" type="email">
          </label>
          <label>Your phone:
            <input required v-model="phone" class="subscribe-form-phone" placeholder="Phone" type="phone">
          </label>
          <button class="submit_btn">Submit</button>
        </form>
      </Popup>
    </transition>
    <div class="subscribe">
      <h1 class="subscribe-title">
        Subscribe us
      </h1>
      <p class="subscribe-info">
        We are collecting the best technologies news and emailing them, 
        subscribe us to keep up with the most relevant tech news
      </p>
      <button class="subscribe-button" @click.prevent="showFormPopup">Subscribe</button>
    </div>
  </div>
</template>

<script>
  import Popup from '../components/Popup'

  export default {
    components: {
      Popup
    },
    data() {
      return {
        isFormPopupVisible: false,
        name: '',
        email: '',
        phone: '',
      }
    },
    methods: {
      showFormPopup() {
        this.isFormPopupVisible = true;
      },
      closeFormPopup() {
        this.isFormPopupVisible = false;
      },
      submitForm(){
        this.closeFormPopup();
        const formData = {
          name: this.name,
          email: this.email,
          phone: this.phone,
          //*Открытие страницы статей я тоже считаю как взаимодействие с пагинацией
          paginationCount: this.$store.getters['paginationCount/counter']
        }
        //*Данные из формы готовые к отправке по API
        alert(JSON.stringify(formData, null, 2));
      }
    }
  }
</script>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .subscribe{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &-title{
      font-size: 8rem;
      font-weight: 100;
      color: $light-color; 
      letter-spacing: $letter-spacing;
    }
    &-info{
      max-width: 600px;
      text-align: center;
      letter-spacing: $letter-spacing;
      color: $grey;
      font-size: 1.2rem;
    }
    &-button{
      display: flex;
      margin-top: 20px;
      border: none;
      justify-content: center;
      align-items: center;
      color: #fff;
      text-decoration: none;
      width: 200px;
      text-transform: uppercase;
      letter-spacing: $letter-spacing;
      height: 50px;
      border-radius: 50px;
      background: $base-color;
      box-shadow: $block-shadow;
      transition: 0.3s;
      &:hover{
        border: 0;
        background: $light-color;
      }
      &:focus{
        outline: 0;
        background: $dark-color;
      }
    }
    &-form{
      display: flex;
      justify-content: center;
      flex-direction: column;
      input{
        width: 100%;
        border: 0;
        padding: 5px;
        border-bottom: 1px solid rgba(0, 0, 0, .3);
        &:focus{
          outline: 0;
          border-bottom: 1px solid $base-color;
        }
      }
      button{
          display: flex;
          margin-top: 20px;
          border: none;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          margin-top: 25px;
          color: #fff;
          text-decoration: none;
          width: 150px;
          text-transform: uppercase;
          letter-spacing: $letter-spacing;
          height: 45px;
          border-radius: 25px;
          background: $green;
          transition: 0.3s;
          &:hover{
            border: 0;
            background: lighten($green, 5%);
          }
          &:focus{
            outline: 0;
            background: darken($green, 5%);
          }
      }
    }
  }
</style>