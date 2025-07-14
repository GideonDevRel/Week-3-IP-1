# Setup Instructions for Week 1 IP1 Gallery App

## 1. MongoDB Atlas Setup

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for a free account
3. Create a new project (e.g., "Gallery App")

### Step 2: Create a Cluster
1. Click "Build a Database"
2. Choose "M0 Sandbox" (Free tier)
3. Select your preferred cloud provider and region
4. Name your cluster (e.g., "gallery")
5. Click "Create Cluster"

### Step 3: Create Database User
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create username and password (save these!)
5. Set privileges to "Read and write to any database"
6. Click "Add User"

### Step 4: Configure Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Choose "Allow Access from Anywhere" (0.0.0.0/0)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go to "Clusters" and click "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<USERNAME>` and `<PASSWORD>` in `_config.js`

## 2. Render Deployment Setup

### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with your GitHub account

### Step 2: Create Web Service
1. Click "New +" → "Web Service"
2. Connect your GitHub repository
3. Select your repository: `GideonDevRel/Week-3-IP-1`
4. Configure:
   - Name: `gallery-app-[your-name]`
   - Environment: `Node`
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Instance Type: `Free`

### Step 3: Add Environment Variables
1. In your Render service settings, add:
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (Render default)

### Step 4: Deploy
1. Click "Create Web Service"
2. Copy the service URL (e.g., `https://gallery-app-yourname.onrender.com`)

## 3. Slack Integration Setup

### Step 1: Create Slack Workspace (if needed)
1. Go to https://slack.com/create
2. Create a new workspace or use existing

### Step 2: Create Channel
1. Create channel: `#YourFirstName_IP1`
2. Invite your TM to the channel

### Step 3: Configure Slack App
1. Go to https://api.slack.com/apps
2. Click "Create New App" → "From scratch"
3. Name: "Jenkins Gallery App"
4. Select your workspace

### Step 4: Configure Webhooks
1. Go to "Incoming Webhooks"
2. Toggle "Activate Incoming Webhooks" to On
3. Click "Add New Webhook to Workspace"
4. Select your channel `#YourFirstName_IP1`
5. Copy the webhook URL

## 4. Jenkins Configuration

### Plugins Required:
- Email Extension Plugin
- Slack Notification Plugin
- NodeJS Plugin

### Email Configuration:
1. Go to "Manage Jenkins" → "Configure System"
2. Find "Extended E-mail Notification"
3. Configure SMTP server settings
4. Update email in Jenkinsfile

### Slack Configuration:
1. Go to "Manage Jenkins" → "Configure System"
2. Find "Slack" section
3. Add your webhook URL
4. Test connection

## 5. Update Configuration Files

After completing above steps, update the following files with your actual values:

### _config.js
Replace `<USERNAME>` and `<PASSWORD>` with your MongoDB Atlas credentials

### Jenkinsfile
Update these values:
- `RENDER_SERVICE_URL`: Your Render app URL
- Email address in emailext section
- Slack channel name if different

## 6. Testing

1. Push changes to GitHub
2. Jenkins should automatically trigger
3. Check Slack for success notification
4. Visit your Render URL to see the live app