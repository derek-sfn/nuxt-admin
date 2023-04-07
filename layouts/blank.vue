<template>
  <VApp>
    <VLayout class="layout-wrapper layout-blank">
      <VMain>
        <div class="layout-page-content">
          <RouterView />
        </div>
      </VMain>
    </VLayout>
  </VApp>
</template>

<style>
.layout-wrapper.layout-blank {
  flex-direction: column;
}
</style>
