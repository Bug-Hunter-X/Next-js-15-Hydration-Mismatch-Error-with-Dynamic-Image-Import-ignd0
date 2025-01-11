# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a hydration mismatch bug in Next.js 15 that occurs when importing an image dynamically within a component. The issue arises from the discrepancy between the server-side rendering (SSR) and client-side hydration phases, where the image path resolution differs.

## Bug Description

A hydration mismatch error is thrown when navigating to the `/about` page. This happens because the image import in the `About` component uses a relative path that isn't handled correctly during SSR and client-side rendering. The server renders a different image path than the client, resulting in a mismatch and the error.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `/about`.
5. Observe the hydration mismatch error in the console.

## Solution

The solution involves using a static import for the image or using an absolute path to the image. Using static import resolves the image path at build time, removing any runtime discrepancies between the server and the client.