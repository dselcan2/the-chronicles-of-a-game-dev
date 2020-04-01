<template>
  <section v-if="section1" class="intro">
    <div class="intro-inner">
      <h3 v-if="section1Pretitle" class="pretitle text-bluegray-600">{{ section1Pretitle }}</h3>
      <div class="container-center">
        <div class="left">
          <h1 class="title" >&lt;</h1>
        </div>
          <h1 v-if="section1Title" v-formatted-text="section1Title" class="title" />
          <div class="right">
            <h1 class="title" >/&gt;</h1>
          </div>
      </div>
      <div v-if="section1Content" class="content text-bluegray-600">{{ section1Content }}</div>

      <div v-if="section1Buttons" class="buttons">
        <template v-for="(button, index) in section1Buttons">
          <factor-link
            v-if="button.link"
            :key="index"
            v-formatted-text="button.text"
            :path="button.link"
            :btn="button.btn"
            :class="button.classes"
          />
        </template>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { setting } from "@factor/api"
import { factorLink } from "@factor/ui"
import Vue from "vue"
export default Vue.extend({
  components: {
    factorLink
  },
  data() {
    return {
      loading: true,
      section1: setting("home.intro"),
      section1Pretitle: setting("home.intro.pretitle"),
      section1Title: setting("home.intro.title"),
      section1Content: setting("home.intro.content"),
      section1Buttons: setting("home.intro.buttons")
    }
  },
  methods: {
    setting
  }
})
</script>
<style lang="less">
.intro {
  background-color: var(--color-bg-dark);
  color: #fff;
  position: relative;
  .intro-inner {
    display: flex;
    flex-direction: column;
    max-width: 850px;
    margin: 0 auto;
    padding: 7em 2em;
    z-index: 1;
    @media (max-width: 900px) {
      padding: 4em 2em;
    }
    .left {
        margin-top: 0%;
        margin-right: 0px;
        font-size: 2em;
        @media (max-width: 900px) {
          font-size: 1em;
        }
    }
    .right {
        margin-top: 0%;
        margin-left: 0px;
        font-size: 2em;
        @media (max-width: 900px) {
          font-size: 1em;
        }
    }
    .container-center {
        display: flex;
        justify-content: space-between;
        @media (max-width: 670px) {
          .right{
            font-size: 1em;
            margin-top: 25px;
            @media (max-width: 405px) {
                font-size: 2em;
                margin-top: 50px;
            }
          }
          .left{
            font-size: 1em;
            margin-top: 25px;
            @media (max-width: 405px) {
                font-size: 2em;
                margin-top: 50px;
            }
          }
        }
    }
    .pretitle {
      text-align: center;
      position: relative;
      text-transform: uppercase;
    }
    .title {
      text-align: center;
      font-weight: var(--font-weight-bold);
      font-size: 3.6em;
      letter-spacing: -0.03em;
      margin: 10px 0;
      margin-left: 30px;
      color: #fff;
      @media (max-width: 900px) {
        font-size: 2em;
        margin-left: 5px;
      }
    }
    .content {
      text-align: center;
      max-width: 900px;
      font-size: 1.4em;
      line-height: 1.6em;
    }
    .buttons {
      text-align: center;
      z-index: 2;
      margin-top: 2em;
      .btn + .btn {
        margin-left: 1em;
        @media (max-width: 900px) {
          margin-left: 0;
          margin-top: 1.4em;
        }
        i {
          padding-left: 1rem;
        }
      }
    }
  }
}
</style>