#!/usr/bin/env bash

ansible-galaxy collection install openstack.cloud: 2.0.0

. ./unimelb-comp90024-2023-grp-61-openrc.sh; ansible-playbook mrc.yaml