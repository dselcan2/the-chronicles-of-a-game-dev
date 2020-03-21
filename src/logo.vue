<template>
  <div class="logo-img" :class="theme">
    <img width="200" svg-inline src='./static/Logo.svg' alt="example" />
  </div>
</template>
<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  props: {
    theme: { type: String, default: "" }
  }
})
</script>


<style lang="less">
.logo-img {
  // width: 100px;
  svg {
    display: block;
  }
  .thelogotext {
    fill: #fdfdfd;
  }
  &:hover {
    .thelogotext {
      fill: var(--color-primary);
    }
  }
}
</style>