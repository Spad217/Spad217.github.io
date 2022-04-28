<template>
  <component
    :is="component"
    v-if="componentExist(component)"
    @component="changeComponent"
  >
  </component>
  <Menu
    v-else
    :buttons="buttons"
    @component="changeComponent"
  />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Menu from './components/Menu.vue';
import json from './components/json.vue';
import qrcode from './components/qrcode.vue';
import base64 from './components/base64.vue';
import urlEncode from './components/urlEncode.vue';
import timestamp from './components/timestamp.vue';

declare interface Block {
  text: string;
  alias: string;
  icon: string;
}

@Options({
  components: {
    Menu,
    json,
    base64,
    qrcode,
    urlEncode,
    timestamp,
  },
  methods: {
    componentExist(name: string): boolean {
      return name in this.$options.components;
    },
    changeComponent(component: string) {
      this.component = component;
    },
  },
})
export default class App extends Vue {
  component = '';

  buttons?: Array<Block> = [
    {
      icon: 'icon-bianmashengchengqix',
      text: 'Base64 Convert(b)',
      alias: 'base64',
    },
    { icon: 'icon-json', text: 'JSON Format(j)', alias: 'json' },
    { icon: 'icon-suffix-url', text: 'URL Encode(u)', alias: 'urlEncode' },
    {
      icon: 'icon-Field-time',
      text: 'Timestamp Convert(t)',
      alias: 'timestamp',
    },
    { icon: 'icon-erweima', text: 'QRCode Generater(q)', alias: 'qrcode' },
  ];

  mounted(): void {
    this.component = '1';
  }
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
