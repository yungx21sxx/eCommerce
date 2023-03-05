<template>
	<client-only>
		<div class="cart wrapper" v-if="cartStore.cartLength > 0">
			<div class="cart__col cart__col_left">
				<h2 class="cart__title cart__title_main">Корзина</h2>
				<CartItem
					 v-for="product in cartStore.cart"
					 :product="product"
					 :key="product.id"
				/>
			</div>
			<div class="cart__col cart__col_right">
				<h2 class="cart__title cart__title_order">Обзор</h2>
				<div class="cart__addit">
					<div class="cart__delivery">
						<p>Стандартная доставка <br><span>В течение 6 - 14 рабочих дней</span></p>
						<span>10 $</span>
					</div>
				</div>

				<div class="cart__sum">
					<span>Сумма (включая НДС):</span><span>{{cartStore.cartTotal + 10}} $</span>
				</div>

				<button class="cart__btn">Перейти к оформлению</button>
				<div class="cart__footer">
					<p>КАК МОЖНО ОПЛАТИТЬ</p>
					<img src="~/assets/icons/debit1.png" alt="" class="cart__debit-icon">
					<img src="~/assets/icons/debit2.png" alt="" class="cart__debit-icon">
					<div class="cart__product-back">
						Бесплатный возврат вещей в течение Двух Недель с момента получения.
					</div>
				</div>

			</div>
		</div>
		<div class="cart__empty wrapper" v-else>
			<h2 class="cart__title">Корзина пуста!</h2>
			<NuxtLink class="cart__btn cart__btn_small" to="/all">Перейти в каталог</NuxtLink>
		</div>
	</client-only>

</template>

<script setup>

import useCart from "~/composables/useCart";
// import CartItem from "~/components/CartItem.vue";

const cartStore = useCart()





</script>

<style scoped lang="sass">
.cart


	display: grid
	@media screen and (max-width: 900px)
		grid-template-columns: 1fr
	grid-template-columns: 2fr 1fr
	gap: 35px
	margin-top: 20px

	&__empty
		display: flex
		align-items: center
		flex-direction: column
		margin-top: 100px

		h2
			font-weight: 300

	&__product-back
		margin-top: 10px
		font-weight: 300
		line-height: 20px
	&__debit-icon
		height: 25px
		margin-top: 10px
		margin-right: 5px

	&__img
		object-fit: cover
		@media screen and (max-width: 750px)
			align-self: flex-start
			height: 150px
		height: 120px
		width: 120px
	&__item
		@media screen and (max-width: 750px)
			flex-direction: column

		display: flex
		justify-content: space-between
		margin-top: 20px
		padding-bottom: 10px
		border-bottom: 1px solid #d4d4d4
	&__product-info
		width: fit-content
		display: flex
		gap: 20px
	&__params
		display: flex
		flex-direction: column
		justify-content: space-between

		@media screen and (max-width: 750px)
			gap: 20px
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
		font-size: 24px
		width: 200px
		@media screen and (max-width: 750px)
			align-self: flex-end

	&__chose-amount
		display: flex
		gap: 10px
		align-items: center
		span
			font-size: 1.4rem

	&__addit
		padding: 12px 0
		margin: 15px 0
		border-top: 1px solid #d4d4d4
		border-bottom: 1px solid #d4d4d4
		font-size: 14px
		display: flex
		flex-direction: column
		gap: 12px
		font-weight: 300

		> *
			display: flex
			justify-content: space-between

	&__sum
		display: flex
		justify-content: space-between
		align-items: center
		span + span
			font-size: 20px
	&__btn
		&_small
			width: 250px
		width: 100%
		height: 58px
		text-align: center
		border: none
		background: rgba(217, 217, 217, 1)
		font-weight: 400
		font-size: 16px
		margin-top: 20px
		line-height: 24px
		transition: .3s ease-in-out
		margin-bottom: 20px
		&:hover
			background: rgb(206, 206, 206)
	&__delivery
		p span
			font-size: 12px
			color: #505050









</style>