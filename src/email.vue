<template>
  <div class="join-program content">
    <div class="content-pad">
      <div class="head">
        <img width="400" svg-inline src='./static/Logo_blue.svg' alt="example" />
        <br/>
        <br/>
        <h2 class="title">Want to know when I post something new?</h2>
        <h3 class="sub-title">Sign up to recieve an email when I do!</h3>
      </div>
      <div
        class="text"
      >I promise to only use your email for good 😇</div>
      <div class="action">
        <factor-email-list list-id="default" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { factorEmailList } from "@factor/plugin-email-list"
export default {
  components: { factorEmailList }
}
</script>

<style lang="less">
.join-program {
  text-align: center;
  padding: 6rem 0;
  .content-pad {
    max-width: 700px;
    margin: 0 auto;
  }
  figure.icon {
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 3.5em;
    border-radius: 50%;
    margin: 1rem auto;
  }
  line-height: 1.1;
  .title {
    font-size: 3em;
    font-weight: 700;
  }
  .sub-title {
    font-size: 2em;
    opacity: 0.8;
    margin-top: 1rem;
  }
  .text,
  .action {
    font-size: 1.3em;
  }
  .text {
    line-height: 1.5;
    margin: 2rem 0;
  }
  .action {
    font-weight: 500;
  }
  .email-list-form .add-email {
    grid-template-columns: 1fr;
  }
  @media (max-width: 900px) {
    text-align: left;
    padding: 7rem 0;
    .title {
      font-size: 2em;
    }
    .glyph {
      margin: 0;
    }
  }
}
</style>