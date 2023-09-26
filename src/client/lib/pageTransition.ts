import { onNavigate } from '$app/navigation';

export const preparePageTransition = () => {
	onNavigate(async (navigation) => {
        // @ts-ignore
		if (!document.startViewTransition) {
			return;
		}
		return new Promise((oldStateCaptureResolve) => {
            // @ts-ignore
			document.startViewTransition(async () => {
				oldStateCaptureResolve();
				await navigation.complete;
			});
		});
	});
};