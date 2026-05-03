# Deploy To `https://anyachaudhary.github.io`

This guide is for deploying this Vite/React portfolio to Anya's root GitHub Pages URL:

```text
https://anyachaudhary.github.io
```

## 1. Create The GitHub Repository

On GitHub, create a new repository named exactly:

```text
anyachaudhary.github.io
```

The exact name matters. A GitHub Pages user site must live in a repository named:

```text
<username>.github.io
```

So for the GitHub user `anyachaudhary`, the repository must be:

```text
anyachaudhary.github.io
```

## 2. Put This Project In That Repository

Clone the new repository:

```bash
git clone https://github.com/anyachaudhary/anyachaudhary.github.io.git
cd anyachaudhary.github.io
```

Then copy this project into that folder.

If this project is already cloned locally and just needs to point at Anya's repo, run:

```bash
git remote set-url origin https://github.com/anyachaudhary/anyachaudhary.github.io.git
```

If there is no `origin` remote yet, run:

```bash
git remote add origin https://github.com/anyachaudhary/anyachaudhary.github.io.git
```

## 3. Update `package.json`

Open `package.json` and set:

```json
"homepage": "https://anyachaudhary.github.io"
```

## 4. Update `vite.config.js`

Open `vite.config.js` and set the Vite base path to `/`:

```js
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
```

For a root GitHub Pages site, the base path is `/`.

## 5. Install Dependencies

Run:

```bash
npm install
```

## 6. Test The Site Locally

Run:

```bash
npm run dev
```

Open the local URL printed in the terminal and check that the site looks right.

Then test the production build:

```bash
npm run build
```

## 7. Commit And Push The Source Code

Run:

```bash
git add .
git commit -m "Add portfolio site"
git branch -M main
git push -u origin main
```

## 8. Deploy To GitHub Pages

Run:

```bash
npm run deploy
```

This builds the site and publishes the `dist` folder to a branch called:

```text
gh-pages
```

## 9. Configure GitHub Pages

On GitHub, go to the repository:

```text
anyachaudhary/anyachaudhary.github.io
```

Then go to:

```text
Settings -> Pages
```

Under **Build and deployment**, set:

```text
Source: Deploy from a branch
Branch: gh-pages
Folder: /root
```

Click **Save**.

## 10. Open The Live Site

Wait a minute or two, then open:

```text
https://anyachaudhary.github.io
```

## Updating The Site Later

After making changes:

```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

## Common Problems

If the page is blank, check that `vite.config.js` says:

```js
base: '/',
```

If the site is not appearing, check:

- The repository is named exactly `anyachaudhary.github.io`.
- The `gh-pages` branch exists after running `npm run deploy`.
- GitHub Pages is set to publish from the `gh-pages` branch and `/root` folder.
- The live site may take a couple of minutes to update.

## References

- GitHub Pages user sites use a repository named `<owner>.github.io`: https://docs.github.com/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Pages can publish from a selected branch and folder: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- Vite root GitHub Pages deployments should use `base: '/'`: https://vite.dev/guide/static-deploy.html
