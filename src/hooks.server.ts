import svelteCMSHooks from "svelteCMS/lib/hooks.server"
import { clientHooks } from "./clientHooks";
import { sequence } from '@sveltejs/kit/hooks';
import type { Handle } from '@sveltejs/kit';
export const handle:Handle = sequence(clientHooks,svelteCMSHooks)