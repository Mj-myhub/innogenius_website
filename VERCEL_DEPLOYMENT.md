# Vercel Deployment Instructions for InnoGenius.ai

This guide provides step-by-step instructions for deploying the InnoGenius.ai website to Vercel's free tier.

## Prerequisites

1. A GitHub account
2. A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)
3. The InnoGenius.ai codebase pushed to a GitHub repository

## Step 1: Push Code to GitHub

1. Create a new repository on GitHub
2. Initialize Git in your local InnoGenius.ai project folder:
   ```bash
   cd /path/to/innogenius-website/innogenius
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/innogenius.git
   git push -u origin main
   ```

## Step 2: Connect GitHub Repository to Vercel

1. Log in to your Vercel account at [vercel.com](https://vercel.com)
2. Click on "Add New..." and select "Project"
3. Under "Import Git Repository", find and select your InnoGenius.ai repository
4. If you don't see your repository, you may need to click "Configure GitHub App" and grant Vercel access to the repository

## Step 3: Configure Project Settings

1. **Project Name**: Enter "innogenius" or your preferred name
2. **Framework Preset**: Vercel should automatically detect Next.js, but if not, select it manually
3. **Root Directory**: Leave as `.` (default) if your project is at the root of the repository
4. **Build and Output Settings**: These should be automatically configured for Next.js

## Step 4: Set Environment Variables

Add the following environment variables:

1. Click on "Environment Variables" section
2. Add each of these variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics measurement ID (e.g., G-XXXXXXXXXX)
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Your Formspree endpoint (e.g., https://formspree.io/f/your-formspree-id)
   - `AI_API_KEY`: Your AI service API key (if applicable)

## Step 5: Deploy

1. Click "Deploy" to start the deployment process
2. Vercel will build and deploy your application
3. Once complete, you'll receive a URL like `https://innogenius.vercel.app`

## Step 6: Enable Automatic HTTPS with Let's Encrypt

This is automatically handled by Vercel. All Vercel deployments come with:
- Automatic HTTPS/SSL certificates via Let's Encrypt
- Global CDN distribution
- Edge caching

## Step 7: Set Up Custom Domain (Optional)

To use your own domain (e.g., innogenius.ai):

1. Go to your project dashboard in Vercel
2. Click on "Settings" > "Domains"
3. Enter your domain name (e.g., innogenius.ai)
4. Follow Vercel's instructions to configure your DNS settings:
   - Option 1: Update nameservers at your domain registrar to use Vercel's nameservers
   - Option 2: Add the required A, CNAME, or ALIAS records at your domain registrar

## Step 8: Configure Temporary Domain Redirect (Optional)

If you want to redirect from the temporary Vercel URL to your custom domain:

1. Go to your project dashboard in Vercel
2. Click on "Settings" > "Domains"
3. Find your Vercel deployment URL (e.g., innogenius.vercel.app)
4. Click on the three dots menu and select "Redirect to Production Domain"

## Continuous Deployment

Vercel automatically deploys changes when you push to your GitHub repository:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update description"
   git push
   ```
3. Vercel will automatically detect the changes and deploy a new version

## Monitoring and Analytics

1. View deployment status and logs in your Vercel dashboard
2. Set up Vercel Analytics for performance monitoring:
   - Go to your project dashboard
   - Click on "Analytics" tab
   - Follow the instructions to enable Vercel Analytics

## Troubleshooting

If you encounter deployment issues:

1. Check the build logs in the Vercel dashboard
2. Ensure all required environment variables are set
3. Verify your Next.js configuration is compatible with Vercel
4. Check that your package.json has the correct build scripts:
   ```json
   "scripts": {
     "dev": "next dev",
     "build": "next build",
     "start": "next start"
   }
   ```

For additional help, refer to [Vercel's documentation](https://vercel.com/docs) or contact Vercel support.
