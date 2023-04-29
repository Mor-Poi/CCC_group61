#!/bin/bash

. ./unimelb-comp90024-2023-grp-61-openrc.sh; ansible-playbook -vv mrc.yaml | tee output.txt