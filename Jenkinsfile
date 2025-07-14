pipeline {
    agent any
    
    environment {
        NODE_ENV = 'production'
        RENDER_SERVICE_URL = 'https://your-app-name.onrender.com'
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        
        stage('Deploy to Render') {
            steps {
                script {
                    // Deploy to Render using node server
                    sh 'node server.js &'
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}