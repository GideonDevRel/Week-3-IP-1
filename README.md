# Gallery App - Week 1 IP1

A Node.js image gallery application with complete CI/CD pipeline using Jenkins, MongoDB Atlas, and Render deployment.

## 🚀 Features

- **Image Upload & Gallery**: Upload and view images in a responsive gallery
- **MongoDB Atlas Integration**: Cloud-hosted MongoDB database
- **CI/CD Pipeline**: Automated testing and deployment with Jenkins
- **Render Deployment**: Cloud deployment platform
- **Slack Notifications**: Real-time deployment status
- **Email Alerts**: Test failure notifications

## 📋 Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- Render account
- Jenkins server
- Slack workspace

## 🛠️ Setup Instructions

### Quick Start
1. Follow the detailed setup instructions in [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
2. Update `_config.js` with your MongoDB Atlas credentials
3. Deploy to Render
4. Configure Jenkins pipeline
5. Set up Slack integration

### Local Development
```bash
# Clone the repository
git clone https://github.com/GideonDevRel/Week-3-IP-1.git

# Install dependencies
npm install

# Start the application
npm start
```

### Running Tests
```bash
npm test
```

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────┐    ┌─────────────────┐
│   GitHub Repo   │───▶│   Jenkins    │───▶│   Render Deploy │
└─────────────────┘    └──────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌──────────────┐
                       │   MongoDB    │
                       │    Atlas     │
                       └──────────────┘
                              │
                              ▼
                       ┌──────────────┐
                       │    Slack     │
                       │ Notification │
                       └──────────────┘
```

## 📁 Project Structure

```
├── models/           # MongoDB models
├── routes/           # Express routes
├── views/            # EJS templates
├── public/           # Static assets
├── test/             # Test files
├── _config.js        # Database configuration
├── server.js         # Main application file
├── Jenkinsfile       # CI/CD pipeline
└── package.json      # Dependencies
```

## 🔧 Configuration

### Environment Variables
- `NODE_ENV`: Application environment (development/production)
- `PORT`: Server port (default: 5000)
- `MONGODB_USERNAME`: MongoDB Atlas username
- `MONGODB_PASSWORD`: MongoDB Atlas password

### Jenkins Pipeline Stages
1. **Install Dependencies**: `npm install`
2. **Run Tests**: `npm test`
3. **Deploy to Render**: `node server.js`
4. **Notifications**: Email on failure, Slack on success

## 🎯 Milestones

- ✅ **Milestone 1**: MongoDB Atlas setup
- ✅ **Milestone 2**: Basic Jenkins pipeline
- ✅ **Milestone 3**: Test integration with email notifications
- ✅ **Milestone 4**: Slack integration

## 📚 Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Frontend**: EJS, Materialize CSS
- **Testing**: Mocha, Chai
- **CI/CD**: Jenkins
- **Deployment**: Render
- **Notifications**: Slack, Email

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support, email your TM or create an issue in the GitHub repository.