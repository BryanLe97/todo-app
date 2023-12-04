<script setup lang="ts"></script>
<template>
	<div class="banner">
		<div class="banner__main">
			<div class="banner_banner">
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div
							v-for="val in 5"
							:key="val"
							class="swiper-slide banner__banner-img"
						>
							<img src="../asset/banner-1.webp" alt="img" class="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/swiper';
</style>
