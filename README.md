# CCC group61

## Contributors

YUANBO XU Student ID: 1118904 yuanbo.xu@student.unimelb.edu.au

XUEKE ZHENG Student ID: 1135290 xueke.zhenng@student.unimelb.edu.au

JIEXIN JI Student ID: 1175682 jiexin.ji@student.unimelb.edu.au

ZESONG ZHANG Student ID: 1118527 zesong.zhang@student.unimelb.edu.au

ZE PENG Withdraw zep@student.unime



## User Guide
```
In order to deploy the solution, please follow the step below.
1. Prepare a clean project on MRC, update unimelb-comp90024-2023-grp-61-openrc.sh
to your own openrc.sh code.
2. Go to the github repository, clone the repository and change directory to ./ansible
3. Run run-mrc.sh to install all to create all instances
4. Run run-install.sh to install all dependencies
5. Run run-havest.sh to install all to create all instances
6. Choose one of node as the msaternode of CouchDB cluster, then change the IP adress of
couchDB.sh and couchDB2.sh Run run-couchDB.sh to create the CouchDB cluster
7. Run run-swarm-up.sh to deploy the front-end and back-end
To scale up instances
To scale up service
```

## Videos

Architecture&deployment:
https://www.youtube.com/watch?v=xpSJ8oawTHI

Scenarios:
https://www.youtube.com/watch?v=6jAlVfXnsOo
