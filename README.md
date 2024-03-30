# netAppAssessment


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
* add jenkins to docker user group and restart jenkins - sudo systemctl restart jenkins
