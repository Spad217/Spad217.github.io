<template>
  <div class="fr" style="flex-wrap: wrap">
    <input
      @input="hotkey"
      @focusout="refocus"
      type="text"
      autofocus=""
      style="width: 1px; height: 1px; position: absolute; top: -100px"
    />
    <button
      v-for="block in buttons"
      :key="block.alias"
      class="fc box aic noselect"
      @click="choise(block.alias)"
    >
      <div class="fc item aic">
        <span class="iconfont" :class="block.icon"></span
        ><span class="b-txt">{{ block.text }}</span>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

declare interface Block {
  text: string;
  alias: string;
  icon: string;
}

@Options({
  props: {
    buttons: Array,
  },
  methods: {
    choise(block: string) {
      this.$emit('component', block);
    },
    hotkey(event: Event) {
      if (event instanceof InputEvent) {
        const char = event.data;
        console.log(char);
      }
    },
    refocus(event: Event) {
      if (event.target instanceof HTMLInputElement) {
        event.target.select();
      }
    },
  },
})
export default class Menu extends Vue {
  buttons?: Array<Block> = [
    { icon: 'icon-json', text: 'JSON Format(j)', alias: 'json' },
    { icon: 'icon-suffix-url', text: 'URL Encode(u)', alias: 'urlEncode' },
    {
      icon: 'icon-Field-time',
      text: 'Timestamp Convert(t)',
      alias: 'timestamp',
    },
    {
      icon: 'icon-bianmashengchengqix',
      text: 'Base64 Convert(b)',
      alias: 'base64',
    },
    { icon: 'icon-erweima', text: 'QRCode Generater(q)', alias: 'qrcode' },
  ];

  // mounted(): void {
  // }
}
</script>

<style>
.box {
  width: 100px;
  padding-top: 30px;
  padding-bottom: 30px;
  margin: 5px;
  border-width: 2px;
  border: #2c3e50;
}
.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
}
</style>
