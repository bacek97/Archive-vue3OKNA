<template>
	<transition mode="">
		<nuxt keep-alive :keep-alive-props="{ max: 10 }" />
	</transition>
</template>

<script>
export default {
  head () {
    return this.$nuxtI18nSeo()
  }
}
</script>