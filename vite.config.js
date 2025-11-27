import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "logan-munsee",
            project: "javascript-sveltekit"
        }
    }), sveltekit()],
	server: {
		host: '0.0.0.0', // This makes the server accessible from other devices
		port: 5173 // Your desired port
	}
});