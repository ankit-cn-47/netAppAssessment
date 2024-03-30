# netAppAssessment

## [ProjectRepository](https://github.com/ankit-cn-47/netAppAssessment.git)
## [DockerhubImage](https://hub.docker.com/repository/docker/ankitchandra47/netapp-assessment)

### Ansible
* make sure the sshd service is enabled on the target machine
* create ssh key using ssh-keygen on the target machine
* copy the the appropriate key to the controller using ssh-copy-id <user>@<ip of controller machine>
* enable passwordless login for the ansible user on the target machine

### Node application
* to create docker image : docker build -t node-app .
* to run application : docker run -p 3000:3000 node-app

### Jenkins
* plugins to configure - nodejs and cloudbees docker build and publish (docker root : /usr/bin/docker)
* configure docker and node plugin in global tool configuration
* add jenkins to docker user group and restart jenkins - sudo systemctl restart jenkins - sudo usermod -aG docker jenkins

### Argo CD
* create argocd namespace in the minikube cluster
* apply the argo cd install.yaml from the official repo
* add the git repo using argocd dashboard
* create application to watch the kubernetes repo
* add secret to minikube default cluster to access the dockerhub account to pull the images

### Kubernetes
* start the minikube cluster using minikube start
* configure the docker secret to enable access to dockerhub registry to use images



