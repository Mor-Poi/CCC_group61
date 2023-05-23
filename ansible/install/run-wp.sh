#!/bin/bash
ansible-galaxy collection install community.docker
ansible-playbook -i hosts -u ubuntu install.yaml