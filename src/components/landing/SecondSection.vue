<script setup>
import {ref, markRaw} from "vue";
import InfoBlock from '@/components/ui/InfoBlock.vue'

const infos = ref([
  {
    title: 'Global',
    subtitle: 'Connecting to servers in N countries around the world',
    icon: markRaw(''),
    background: '#FFDCB9'
  },
  {
    title: 'Instant',
    subtitle: 'Easy one-click \n' +
        'connection',
    icon: markRaw(''),
    background: '#AFFCA9'
  },
  {
    title: 'Comfortable',
    subtitle: 'Use it on all your devices',
    icon: markRaw(''),
    background: '#E0B8FF'
  },
  {
    title: 'Safe',
    subtitle: 'Data encryption and \n' +
        'IP address protection',
    icon: markRaw(''),
    background: '#FF8A8A'
  },
  {
    title: 'Limitless',
    subtitle: 'Unlimited access to all \n' +
        'resources with a subscription',
    icon: markRaw(''),
    background: '#B8D7FF'
  },
  {
    title: 'Fast',
    subtitle: 'Optimized servers \n' +
        'with high speed',
    icon: markRaw(''),
    background: '#FFF7B8'
  },
  {
    title: 'Stable',
    subtitle: 'Reliable connection without disabling VPN',
    icon: markRaw(''),
    background: '#BDA8F8'
  },
  {
    title: 'Private',
    subtitle: 'We do not store connection and activity data',
    icon: markRaw(''),
    background: '#FFDBDE'
  },
  {
    title: 'Modern',
    subtitle: 'Support for split tunneling of VPN traffic',
    icon: markRaw(''),
    background: '#FFDBDE'
  },
])
</script>

<template>
<section class="second-section">
  <h2>Why you should choose <span>Bro!</span> VPN</h2>
  <div class="infos-wrap">
    <InfoBlock
        v-for="(item, index) in infos"
        :key="index"
        :title="item.title"
        :subtitle="item.subtitle"
        :background="item.background"
    />
  </div>
</section>
</template>

<style scoped lang="scss">
.second-section {
  @include flex-container(column, center, center);
  h2 {
    @include text-property(64px, 88px, 500);
    span {
      @include text-property(64px, 88px, 700);
    }
  }
  gap: 100px;
  .infos-wrap {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 36px;
    grid-row-gap: 60px;
  }
}
</style>