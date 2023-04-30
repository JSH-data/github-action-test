<template>
  <img src="https://cdn.aitimes.com/news/photo/202303/150082_159039_97.jpg" alt="알체라" />
  {{ textData }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      textData: '알체라디오디오지호'
    }
  }
})
</script>
