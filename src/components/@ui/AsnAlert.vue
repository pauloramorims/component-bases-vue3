<template>
  <div ref="alertContent" class="alert-component" :class="['alert-component__' + type]">
    <div class="alert-component__start">
      <i :class="`alert-component__icon-${type}`">
        <component :is="iconType[type]" />
      </i>

      <div :class="`alert-component__text-${type} text`">
        <slot name="alert-title" />
        <slot name="alert-text" />
      </div>
    </div>

    <div v-if="closeAlert" :class="`alert-component__close-${type} close-content`">
      <div :class="`pipe alert-component__pipe-${type}`" />
      <i :class="`alert-component__icon-${type} close`" @click="handleCloseAlert">
        <IconX/>
      </i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { IconInfoCircle, IconCircleCheck, IconAlertTriangle, IconAlertCircle, IconX,
  type Icon } from '@tabler/icons-vue';

type AlertType = 'info' | 'success' | 'warning' | 'danger';

defineProps({
  closeAlert: { type: Boolean, default: false },
  type: { type: String as () => AlertType, default: 'info' }
});

const alertContent = ref<HTMLElement | null>(null);

const iconType:Record<AlertType, Icon> = {
  ['info']: IconInfoCircle,
  ['success']: IconCircleCheck,
  ['warning']: IconAlertTriangle,
  ['danger']: IconAlertCircle,
};

const handleCloseAlert = () => {
  if (alertContent.value) {
    alertContent.value.style.display = 'none';
  }
};
</script>

<style scoped lang="scss">
svg {
  width: 2rem;
  height: 2rem;
}

.close svg {
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
}

.pipe {
  width: 0.0625rem;
  height: 2.375rem;
}

.close-content {
  display: flex;
  gap: 1rem;
}

.text {
  display: flex;
  flex-direction: column;
  word-break: break-word;
}

.alert-component {
  width: 100%;
  padding: 1rem;
  gap: 0.625rem;

  display: flex;
  justify-content: space-between;

  border-radius: 0.25rem;

  &__start {
    display: flex;
    gap: 1rem;
  }

  &__info {
    background: #DEEEFF;
  }

  &__success {
    background: #E9F1F0;
  }

  &__warning {
    background: #FDF5E8;
  }

  &__danger {
    background: #FDEBF1;
  }

  &__icon-info svg,
  &__text-info,
  &__close-info {
    color: #276aae;
  }

  &__icon-success svg,
  &__text-success,
  &__close-success {
    color: #00645d;
  }

  &__icon-warning svg,
  &__text-warning,
  &__close-warning {
    color: #d98c14;
  }

  &__icon-danger svg,
  &__text-danger,
  &__close-danger {
    color: #a63348;
  }

  &__pipe-info {
    background: #276aae;
  }

  &__pipe-success {
    background: #00645d;
  }

  &__pipe-warning {
    background: #d98c14;
  }

  &__pipe-danger {
    background: #a63348;
  }
}
</style>
