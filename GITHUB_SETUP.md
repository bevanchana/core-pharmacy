# 🚀 Push to GitHub - Step by Step Guide

Your Core Pharmacy project is ready to be pushed to GitHub! Follow these steps:

## Step 1: Create a New Repository on GitHub

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `core-pharmacy` (or your preferred name)
   - **Description**: "Modern pharmacy website with React, TypeScript, and Tailwind CSS"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, GitHub will show you commands. Use these:

### Option A: If you see the "Quick setup" page

Copy the repository URL (it will look like: `https://github.com/YOUR_USERNAME/core-pharmacy.git`)

Then run these commands in your terminal:

```bash
cd pharmacy-app

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/core-pharmacy.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Option B: Using SSH (if you have SSH keys set up)

```bash
cd pharmacy-app

# Add the remote repository (SSH)
git remote add origin git@github.com:YOUR_USERNAME/core-pharmacy.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Verify

1. Refresh your GitHub repository page
2. You should see all your files uploaded!
3. The README.md will be displayed on the repository homepage

## 🎉 Success!

Your Core Pharmacy website is now on GitHub!

## Next Steps

### Update README Links

Don't forget to update the placeholder links in README.md:
- Replace `YOUR_USERNAME` with your actual GitHub username
- Update the repository URL throughout the README

### Enable GitHub Pages (Optional)

To host your site for free on GitHub Pages:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Create a new file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

5. Commit and push this file
6. Your site will be live at: `https://YOUR_USERNAME.github.io/core-pharmacy/`

### Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `core-pharmacy` repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"
7. Your site will be live in minutes!

## 📝 Git Commands Reference

```bash
# Check status
git status

# Add files
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull

# Create a new branch
git checkout -b feature-name

# Switch branches
git checkout main
```

## 🆘 Troubleshooting

### Authentication Issues

If you get authentication errors:

1. **Use Personal Access Token** (recommended):
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token (classic)
   - Use the token as your password when pushing

2. **Or set up SSH keys**:
   - Follow [GitHub's SSH guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Already have a remote?

If you see "remote origin already exists":

```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/core-pharmacy.git
```

---

Need help? Check the [GitHub documentation](https://docs.github.com) or ask for assistance!
