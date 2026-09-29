<script setup>
defineProps({
  class: {
    type: String,
    default: ''
  },
  animate: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" fill="none" :class="$props.class" class="overflow-visible" aria-hidden="true" focusable="false">
    <template v-if="animate">
      <defs>
        <mask id="block-doorway-mask-hero">
          <rect width="1024" height="1024" fill="white" />
          <path d="M555 565 C555 548 568 535 585 535 H635 C652 535 665 548 665 565 V665 C665 682 652 695 635 695 H585 C568 695 555 682 555 665 Z" fill="black" class="animate-doorway" style="transform-origin: 610px 615px;" />
        </mask>
      </defs>
      
      <path d="M555 565 C555 548 568 535 585 535 H635 C652 535 665 548 665 565 V665 C665 682 652 695 635 695 H585 C568 695 555 682 555 665 Z" class="fill-amber animate-fadeLight" />
      
      <path d="M470 440 H710 C754 440 790 476 790 520 V710 C790 754 754 790 710 790 H470 Z" fill="currentColor" class="animate-slide" style="transform-origin: 800px 600px;" mask="url(#block-doorway-mask-hero)" />
      
      <path d="M300 270 C300 248 318 230 340 230 H430 C452 230 470 248 470 270 V790 H340 C318 790 300 772 300 750 Z" fill="currentColor" class="animate-rise" style="transform-origin: 390px 790px;" />
    </template>
    
    <template v-else>
      <path 
        fill="currentColor" 
        fill-rule="evenodd" 
        clip-rule="evenodd" 
        d="M300 270 C300 248 318 230 340 230 H430 C452 230 470 248 470 270 V440 H710 C754 440 790 476 790 520 V710 C790 754 754 790 710 790 H340 C318 790 300 772 300 750 Z M555 565 C555 548 568 535 585 535 H635 C652 535 665 548 665 565 V665 C665 682 652 695 635 695 H585 C568 695 555 682 555 665 Z" 
      />
    </template>
  </svg>
</template>