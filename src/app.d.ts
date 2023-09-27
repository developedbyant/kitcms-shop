// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			svelteCMS:import("svelteCMS/types/locals").Locals
		}
		interface PageData {
			cartData:import("svelteCMS/types/generated").CartsData|null
			svelteCMS:import("svelteCMS/types/locals").PageData
		}
		// interface Platform {}
	}
}

export {};
