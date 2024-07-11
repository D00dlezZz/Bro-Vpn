<script setup>
import Logo from '@/components/Logo.vue';
</script>

<template>
<footer>
  <div class="footer-wrap">
    <Logo/>
   <div class="footer-wrap__menu">
     <div class="menu-list">
       <h4>About Bro! VPN</h4>
       <router-link :to="{name: 'privacy-policy'}">Privacy Policy</router-link>
     </div>
     <div class="menu-list">
       <h4>For mobile</h4>
       <ul>
         <li><a href="">Android</a></li>
         <li><a href="">iPhone</a></li>
       </ul>
     </div>
     <div class="menu-list">
       <h4>For tablet</h4>
       <ul>
         <li><a href="">Android Tablet</a></li>
         <li><a href="">iPad</a></li>
       </ul>
     </div>
     <div class="menu-list">
       <h4>For computer</h4>
       <ul>
         <li><a href="">Windows</a></li>
         <li><a href="">macOS</a></li>
         <li><a href="">Linux</a></li>
         <li><a href="">Chrome</a></li>
       </ul>
     </div>
   </div>
  </div>
  <div class="info">© 2024. Bro! VPN. All rights reserved.</div>
</footer>
</template>

<style scoped lang="scss">
footer {
  width: 100%;
  border-top: 2px solid rgb(118 118 128 / 20%);
  padding-top: 36px;
  margin-top: 120px;
  .footer-wrap {
    @include flex-container(row, space-between, flex-start);

    &__menu {
      @include flex-container(row, flex-start, flex-start);
      gap: 44px;

      a {
        text-decoration: none;
        @include text-property(20px, 24px, 400);
        color: #1B1B21;
      }
      .menu-list {
        @include flex-container(column, flex-start, flex-start);
        gap: 20px;
        h4 {
          @include text-property(26px, 32px, 600)
        }
        ul {
          padding: 0;
          list-style-type: none;
          @include flex-container(column, center, flex-start);
          gap: 12px;
        }
      }
    }
  }
  .info {
    text-align: center;
    margin-top: 32px;
    @include text-property(18px, 20px, 400);
  }
}
</style>