<script setup lang="ts">
import { MD5 } from 'crypto-js';

const host = ref('');
const path = ref('');
const finalUrl = ref('');
const key = ref('');

function build() {
  const realPath = path.value.split('?')[0];
  const code = MD5(realPath + key.value);
  const pre = path.value.includes('?') ? '&' : '?';
  finalUrl.value = `${host.value}${path.value}${pre}code=${code}`;
}
</script>

<template>
  <div flex flex-col gap-4>
    <c-input-text v-model:value="key" placeholder="RSSHub Access Key" raw-text autosize label="Acess Key:" />
    <c-input-text
      v-model:value="host"
      placeholder="Your url(host) to build..."
      raw-text
      autosize
      label="Feed URL(Host):"
    />
    <c-input-text
      v-model:value="path"
      placeholder="Your url(path) to build..."
      raw-text
      autosize
      multiline
      rows="5"
      label="Feed URL(Path):"
    />
    <c-input-text
      v-model:value="finalUrl"
      placeholder="Final URL..."
      raw-text
      autosize
      multiline
      rows="5"
      label="Final URL:"
    />
    <div mt-5 flex justify-center>
      <c-button @click="build()">Build</c-button>
    </div>
  </div>
</template>

<!-- <style lang="less" scoped>
</style> -->
