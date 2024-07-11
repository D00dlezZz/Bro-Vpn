<script setup>
import {ref, markRaw} from "vue";
import InfoCard from '@/components/ui/InfoCard.vue'
import IconMemojiGlobal from "@/components/icons/memoji/IconMemojiGlobal.vue";
import IconMemojiInstant from "@/components/icons/memoji/IconMemojiInstant.vue";
import IconMemojiComfortable from "@/components/icons/memoji/IconMemojiComfortable.vue";
import IconMemojiSafe from "@/components/icons/memoji/IconMemojiSafe.vue";
import IconMemojiNoLimit from "@/components/icons/memoji/IconMemojiNoLimit.vue";
import IconMemojiFast from "@/components/icons/memoji/IconMemojiFast.vue";
import IconMemojiStable from "@/components/icons/memoji/IconMemojiStable.vue";
import IconMemojiPrivate from "@/components/icons/memoji/IconMemojiPrivate.vue";
import IconMemojiModern from "@/components/icons/memoji/IconMemojiModern.vue";

const infos = ref([
  {
    title: 'Global',
    subtitle: 'Connecting to servers in N countries around the world',
    icon: markRaw(IconMemojiGlobal),
  },
  {
    title: 'Instant',
    subtitle: 'Easy one-click connection',
    icon: markRaw(IconMemojiInstant),
  },
  {
    title: 'Comfortable',
    subtitle: 'Use it on all your devices',
    icon: markRaw(IconMemojiComfortable),
  },
  {
    title: 'Safe',
    subtitle: 'Data encryption and \n' +
        'IP address protection',
    icon: markRaw(IconMemojiSafe),
  },
  {
    title: 'Limitless',
    subtitle: 'Unlimited access to all \n' +
        'resources with a subscription',
    icon: markRaw(IconMemojiNoLimit),
  },
  {
    title: 'Fast',
    subtitle: 'Optimized servers \n' +
        'with high speed',
    icon: markRaw(IconMemojiFast),
  },
  {
    title: 'Stable',
    subtitle: 'Reliable connection without disabling VPN',
    icon: markRaw(IconMemojiStable),
  },
  {
    title: 'Private',
    subtitle: 'We do not store connection and activity data',
    icon: markRaw(IconMemojiPrivate),
  },
  {
    title: 'Modern',
    subtitle: 'Support for split tunneling of VPN traffic',
    icon: markRaw(IconMemojiModern),
  },
])
</script>

<template>
<section class="second-section">
  <h2>Why you should choose <span>Bro!</span> VPN</h2>
  <div class="infos-wrap">
    <InfoCard
        v-for="(item, index) in infos"
        :key="index"
        :title="item.title"
        :background="item.backgroundColor"
        :subtitle="item.subtitle"
        :icon="item.icon"
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