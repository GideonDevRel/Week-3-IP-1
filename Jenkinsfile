pipeline {
    agent any
    
    environment {
        NODE_ENV = 'production'
        RENDER_SERVICE_URL = 'https://your-app-name.onrender.com'
        BUILD_ID = "${env.BUILD_ID}"
    }
    
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    sh 'npm test'
                }
            }
            post {
                failure {
                    emailext (
                        subject: "Test Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}",
                        body: """
                        Build Failed: ${env.JOB_NAME} - ${env.BUILD_NUMBER}
                        
                        Check console output at: ${env.BUILD_URL}console
                        
                        Tests have failed. Please check the code and fix the issues.
                        """,
                        to: "your-email@example.com"
                    )
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
            post {
                success {
                    slackSend (
                        channel: '#YourFirstName_IP1',
                        color: 'good',
                        message: """
                        ✅ Deployment Successful!
                        Build ID: ${env.BUILD_ID}
                        Render URL: ${env.RENDER_SERVICE_URL}
                        """
                    )
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