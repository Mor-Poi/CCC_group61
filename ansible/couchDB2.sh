export user='admin'
export pass='pass'
export VERSION='3.2.1'
export cookie='a192aeb9904e6590849337933b000c99'
export my_ip=`echo $(hostname -I) | cut -f1 -d' '`
export masternode='172.26.129.169' #change your ip adress here
sudo chmod 777 /mnt/data

curl -XPOST "http://${user}:${pass}@$masternode:5984/_cluster_setup" \
      --header "Content-Type: application/json"\
      --data "{\"action\": \"enable_cluster\", \"bind_address\":\"0.0.0.0\",\
             \"username\": \"${user}\", \"password\":\"${pass}\", \"port\": \"5984\",\
             \"remote_node\": \"$my_ip\", \"node_count\": \"3\",\
             \"remote_current_user\":\"${user}\", \"remote_current_password\":\"${pass}\"}"


curl -XPOST "http://${user}:${pass}@$masternode:5984/_cluster_setup"\
      --header "Content-Type: application/json"\
      --data "{\"action\": \"add_node\", \"host\":\"$my_ip\",\
             \"port\": \"5984\", \"username\": \"${user}\", \"password\":\"${pass}\"}"


curl -XPOST "http://${user}:${pass}@$masternode:5984/_cluster_setup"\
    --header "Content-Type: application/json" --data "{\"action\": \"finish_cluster\"}"


couch="-H Content-Type:application/json -X PUT http://$user:$pass@$masternode:5984"; \
curl $couch/photon; curl https://raw.githubusercontent.com/ermouth/couch-photon/master/photon.json | \
curl $couch/photon/_design/photon -d @- ; curl $couch/photon/_security -d '{}' ; \
curl $couch/_node/_local/_config/csp/attachments_enable -d '"false"' ; \
curl $couch/_node/_local/_config/chttpd_auth/same_site -d '"lax"' ;


