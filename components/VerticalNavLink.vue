<script lang="ts" setup>
import type { NavLink } from './types';
import { getComputedNavLinkToProp } from './utils';

const props = defineProps<{ item: NavLink}>()
</script>

<template>
  <li
    class="nav-link"
    :class="{ disabled: item.disable }"
  >
    <nuxt-link :to="{ path: `${item.to}` }" :target="item.target">
      <VIcon
        v-bind="item.icon"
        class="nav-item-icon"
      />
      <TransitionGroup name="transition-slide-x">
        <!-- 👉 Title -->
        <span
          key="title"
          class="nav-item-title"
        >
          {{ item.title }}
        </span>

        <!-- 👉 Badge -->
        <span
          v-if="item.badgeContent"
          key="badge"
          class="nav-item-badge"
          :class="item.badgeClass"
        >
          {{ item.badgeContent }}
        </span>
      </TransitionGroup>
    </nuxt-link>
  </li>
</template>

<style lang="scss">
.layout-vertical-nav {
  .nav-link a {
    display: flex;
    align-items: center;
  }
}
</style>
