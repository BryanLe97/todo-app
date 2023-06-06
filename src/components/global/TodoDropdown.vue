<template>
    <div class="dropdown">
        <div class="dropdown__toggle">
            <slot name="dropdown-toggle" />
        </div>
        <div class="dropdown__content">
            <slot class="dropdown__items" name="dropdown-items" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dropdown {
  position: relative;
    &__content {
        background: rgba(119, 119, 119, 1);
        position: absolute;
        top: 100%;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        transition: all 0.3s ease-in-out;
        min-width: 154px;
    }
    &:hover &__content {
        opacity: 1;
        visibility: visible;
        transform: translateY(10px);
    }
}




</style>