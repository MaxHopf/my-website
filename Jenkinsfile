pipeline {
    agent any

    environment {
        NODE_ENV = "development"
    }

    options {
        skipDefaultCheckout(true)
    }

    stages {
        


    //     stage('Setup Workspace') {
    //         steps {
    //             script {
    //                 echo "Cleaning workspace..."
    //                 deleteDir()
    //                 echo "Workspace cleaned."
    //             }
    //         }
    //     }

        // stage('Cleanup') {
        //     steps {
        //         script {
        //             sh 'rm -rf dist'
        //         }
        //     }
        // }
        
        
        stage('Clone Repository') {
            steps {
                script {
                    echo "Cloning repository..."
                    checkout scm
                    sh 'ls -la'
                }
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    echo "Installing dependencies..."
                    sh "npm install"
                }
            }
        }

        stage('Build Project') {
            steps {
                script {
                    echo "Building the project..."
                    sh "npm run build"
                }
            }
        }

        // stage('Deploy Build') {
        //     steps {
        //         script {
        //             echo "Deploying build artifacts..."
        //              sh '''
        //                 mkdir -p /var/jenkins_home/workspace/my-pipeline/deploy-dist/
        //                 cp -r dist/* /var/jenkins_home/workspace/my-pipeline/deploy-dist/
        //             '''
        //         }
        //     }
        // }

        // stage('Restart Nginx') {
        //     steps {
        //         sh 'docker restart nginx-web-server'
        //     }
        // }
    }

    post {
        // always {
        //     echo "Cleaning up workspace..."
        //     cleanWs()
        // }
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline execution failed!"
        }
    }
}
