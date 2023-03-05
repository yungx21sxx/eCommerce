<template>

	<div class="cart__item">
		<div class="cart__product-info">
			<div class="cart__left-block">
			<nuxt-link :to="product.href" no-prefetch>
				<v-img :src="product.img" alt="" class="cart__img"/>
			</nuxt-link>


				<div class="cart__params">
					<h3 class="cart__product-name">{{ product.title }}</h3>
					<article class="cart__params_body">
						<div class="cart__size">
							<span>Размер:</span><span>{{ product.size }}</span>
						</div>
						<div class="cart__amount">
							<span>Количество: {{product.amount}}</span>
							<div class="cart__chose-amount">
						<span
							 @click=""
						>-</span>
								<span>{{ product.amount }}</span>
								<span
									 @click=""
								>+</span>
							</div>
						</div>
						<div class="cart__price">
							<span>Цена:</span><span>{{ product.price }} $</span>
						</div>

					</article>
				</div>
			</div>

			<div class="cart__product-amount">
				<div class="cart__chose-amount">
					<span @click="">-</span>
					<span>{{product.amount}}</span>
					<span @click="">+</span>
				</div>
				<p class="cart__product-price">
					{{product.price * product.amount}} $
				</p>
			</div>
		</div>
	</div>



</template>

<script setup>

const props = defineProps({
	product: {
		required: true,
		type: Object
	}
})

const router = useRouter()





</script>

<style scoped lang="sass">
.cart
	&__item
		@media screen and (max-width: 750px)
			flex-direction: column

		display: flex
		justify-content: space-between
		margin-top: 20px
		padding-bottom: 10px
		border-bottom: 1px solid #d4d4d4
	&__img
		object-fit: cover
		@media screen and (max-width: 750px)
			align-self: flex-start
			height: 150px
		height: 120px
		width: 120px
	&__color, &__size, &__amount, &__price
		@media screen and (max-width: 750px)
			max-width: 250px
		max-width: 150px
		margin-bottom: 10px
		display: flex
		justify-content: space-between
		color: #505050
		span + span
			color: black
	&__product-info
		width: 100%
		display: flex
		justify-content: space-between
		gap: 20px
	&__left-block
		display: flex
		gap: 15px
		
	&__params
		display: flex
		flex-direction: column
		justify-content: space-between

		@media screen and (max-width: 750px)
			gap: 20px
	@media screen and (min-width: 750px)
		&__amount, &__price
			display: none

		&__product-amount
			display: flex !important
			
	&__product-name
		font-size: 20px
		font-weight: 400
	&__product-amount
		display: none
		justify-content: space-between
		align-items: center
		height: fit-content
		font-size: 24px
		width: 200px
		@media screen and (max-width: 750px)
			align-self: flex-end
	&__chose-amount
		display: flex
		gap: 10px
		
		span
			font-size: 1.4rem
</style>