<script>
	import GalleryVerticalEndIcon from "@lucide/svelte/icons/gallery-vertical-end";
	import LoginForm from "$lib/components/login-form.svelte";
	import LogoImage from '$lib/images/Last_logo2.svg';
	import BannerImage from '$lib/images/about-us-banner-image.jpg';
</script>

<div class="grid min-h-svh lg:grid-cols-2">
	<div class="flex flex-col p-6 md:p-10">
		<div class="flex justify-center">
			<a href="##" class="flex items-center font-medium">
				<img src={LogoImage} alt="Busy Bee Cleaning Co." style="height: 80px;">
			</a>
		</div>
		<div class="flex flex-1 items-center justify-center">
			<div class="w-full max-w-xs">
				<LoginForm />
			</div>
		</div>
	</div>
	<div class="bg-accent relative hidden lg:block">
		<img
			src={BannerImage}
			alt="placeholder"
			class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
		/>
	</div>
</div>