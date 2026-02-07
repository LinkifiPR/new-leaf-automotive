# New Leaf Automotive

Next.js website scaffold for SEO-friendly server-rendered HTML.

## 1) Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 2) Create GitHub repo and push

```bash
git init
git add .
git commit -m "Initial Next.js site for New Leaf Automotive"
git branch -M main
git remote add origin https://github.com/<your-username>/new-leaf-automotive.git
git push -u origin main
```

## 3) Automatic deployments (Netlify)

1. In Netlify, select **Add new site** -> **Import an existing project**.
2. Connect GitHub and choose this repository.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Deploy.

After that, every push to `main` will auto-deploy, and pull requests can have deploy previews.

## 4) Continuous integration

GitHub Actions workflow at `.github/workflows/ci.yml` runs lint and build on push/PR.
