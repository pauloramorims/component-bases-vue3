<template>
  <button
    type="button"
    :class="[
      'btn', 
      `btn-${type}`, 
      { 'is-disabled': disabled }, 
      { 'dashed': dashed }, 
      { 'is-danger': danger },
      { 'circle': circle }, 
      syze
    ]"
    @click="handleClick"
  >
    <component v-if="prefixIcon" :is="prefixIcon" />
    <slot />
    <component v-if="suffixIcon" :is="suffixIcon" />
    <component v-if="loading" :is="IconLoader" class="spin" />
  </button>
</template>

<script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  import { IconLoader } from '@tabler/icons-vue';

  type ButtonType = 'primary' | 'secondary' | 'tertiary';
  type ButtonSyze = 'default' | 'medium' | 'small' | 'mine';

  defineProps({
    prefixIcon: { type: String, default: '' },
    suffixIcon: { type: String, default: '' },
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    dashed: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    circle: { type: Boolean, default: false },
    type: { type: String as () => ButtonType, default: 'primary' },
    syze: { type: String as () => ButtonSyze, default: 'default' },
  });

  const emit = defineEmits(['click']);

  const handleClick = (e: Event) => {
    emit('click', e);
  };
</script>


<style lang="scss" scoped>
svg {
  color: currentColor;
}

.btn {
  border-radius: 4px;
  padding: 13px 16px 13px 16px;
  height: 48px;
  min-width: 50px;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  line-height: 24px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid get-color(primary, low-medium);
  appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  box-shadow: 0px 1px 2px rgba(66, 59, 59, 0.32), 0px 1px 4px 1px rgba(0, 0, 0, 0.16);

  &.mine {
    height: 32px;
    min-width: 32px;
    padding: 6px;

    > svg {
      width: 20px;
      height: 20px;
    }
  }

  &.small {
    height: 40px;
    min-width: 40px;
    padding: 8px;
  }

  > svg {
    width: 24px;
    height: 24px;
  }

  &.is-disabled, &.is-danger.is-disabled {
    &.btn-primary, &.btn-secondary {
      background-color: get-color(neutral, high-medium);
      color: get-color(neutral, high-dark);
      border-color: get-color(neutral, high-medium);
      box-shadow: none;
      cursor: not-allowed;
      pointer-events: none;

      &:hover {
        background-color: get-color(neutral, high-medium);
        color: get-color(neutral, high-dark);
        border-color: get-color(neutral, high-medium);
        box-shadow: none;
        cursor: not-allowed;
      }

      &:focus {
        background-color: get-color(neutral, high-medium);
        color: get-color(neutral, high-dark);
        border-color: get-color(neutral, high-medium);
        box-shadow: none;
        cursor: not-allowed;
      }
    }
  }

  &-primary {
    background-color: get-color(primary,  ultra-dark);
    border-color: get-color(primary,  ultra-dark);
    color: get-color(neutral, ultra-light);

    &:hover{
      background: get-color(primary, low-dark);
      border-color: get-color(primary, low-dark);
    }
  }

  &-secondary {
    background-color: #FFF;
    border-color: get-color(primary, ultra-dark);
    color: get-color(primary, ultra-dark);

    &:hover{
      background-color: rgba(get-color(primary, ultra-dark), 0.08);
    }

    &:focus {
      border: 2px solid get-color(primary, ultra-dark);
      background-color: rgba(get-color(primary, ultra-dark), 0.08);
    }
  }

  &.dashed {
    border-style: dashed ;
    border-width: 1px;
    box-shadow: none;

    &:hover{
      border: 1px dashed;
    }
  }

  &.circle {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  &-tertiary {
    border: none;
    color: get-color(primary, ultra-dark);
    box-shadow: none;
    background: transparent;

    &:hover{
      background: get-color(neutral, high-light);
    }
  }

  &.is-danger {
    border-color: get-color(error, low-light);
    color: get-color(error, low-light);
    &.btn-primary {
      background-color: get-color(error, low-light);
      color: #FFF;

      &:hover {
        background-color: get-color(error, high-medium);
        color: get-color(error, low-light);
      }
    }

    &.btn-secondary {
      border-color: get-color(error, low-light);
      background-color: get-color(error, high-medium);
      color: get-color(error, low-light);

      &:hover {
        background-color: get-color(error, high-dark);
      }
    }

    &.btn-tertiary {
      border: none;
      background-color: transparent;
      &:hover {
        background-color: get-color(error, high-medium);
      }
    }
  }

  .spin {
    margin-left: 1cqmax;
    animation: spin 1.3s infinite linear;
  }
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
