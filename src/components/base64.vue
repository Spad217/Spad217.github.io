<template>
  <button @click="$emit('component', '')"> &lt; </button>
  <textarea v-model="message" name="" id="" cols="30" rows="10"></textarea>
  <div>{{encode(message)}}</div>
  <div>{{decode(message)}}</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  },
  methods: {
    encode(str: string): string {
      try {
        return btoa(str || '');
      } catch (err) {
        return '';
      }
    },
    decode(str: string): string {
      try {
        return atob(str || '');
      } catch (err) {
        return '';
      }
    },
  },
})
export default class Base64 extends Vue {
  message = '';

  async mounted() {
    this.message = await navigator.clipboard.readText();
  }
}
</script>>

<style>

</style>
