pipeline {
    agent any

    environment {
        PODMAN_HOST = "unix:///var/run/podman/podman.sock"
        NODE_ENV = "development" // Ensure to install all dependencies 
    }

    stages {
        stage('Clone Repository') {
            steps {
                checkout scm
                sh "ls -l"
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                sh "npm install"
            }
        }

        stage('Build and Deploy') {
            steps {
                echo "Building the project..."
                sh "npm run build"
                echo "Build completed!"
            }
        }
    }

    post {
        success {
            echo "Deployment successful!"
        }
        failure {
            echo "Deployment failed!"
        }
    }
}