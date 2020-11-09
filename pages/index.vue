<template>
  <div>
    <transition name="fade">
      <Popup v-if="isFormPopupVisible" @closePopup="closeFormPopup">
        <form @submit.prevent="submitForm" class="subscribe-form">
          <input required v-model="name" class="form-name" placeholder="Enter your name" type="name">
          <input required v-model="email" class="form-email" placeholder="Enter your email" type="email">
          <input required v-model="phone" class="form-phone" placeholder="Enter your phone" type="phone">
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
      font-size: 5rem;
      opacity: 0.5;
    }
    &-info{
      max-width: 600px;
      text-align: center;
      font-size: 1.2rem;
    }
    &-button{
      font-size: 1.2rem;
      border-radius: 10px;
    }
    &-form{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
</style>