

export declare nodes=(172.26.129.57 172.26.131.146)
export masternode=`echo ${nodes} | cut -f1 -d' '`
export declare othernodes=`echo ${nodes[@]} | sed s/${masternode}//`
export size=${#nodes[@]}
export user='admin'
export pass='admin'
export VERSION='3.2.1'
export cookie='a192aeb9904e6590849337933b000c99'




docker create\
  --name couchdb${masternode}\
  --env COUCHDB_USER=${user}\
  --env COUCHDB_PASSWORD=${pass}\
  --env COUCHDB_SECRET=${cookie}\
  --env ERL_FLAGS="-setcookie \"${cookie}\" -name \"couchdb@${masternode}\""\
  --publish 5984:5984\
  ibmcom/couchdb3:${VERSION}


for node in "${node[@]}" 
  do
    if [ "${node}" != "${masternode}" ]
      then
        docker create\
          --name couchdb${node}\
          --env COUCHDB_USER=${user}\
          --env COUCHDB_PASSWORD=${pass}\
          --env COUCHDB_SECRET=${cookie}\
          --env ERL_FLAGS="-setcookie \"${cookie}\" -name \"couchdb@${node}\""\
          ibmcom/couchdb3:${VERSION}
    fi  
done


couch="-H Content-Type:application/json -X PUT http://$user:$pass@localhost:5984"; \
curl $couch/photon; curl https://raw.githubusercontent.com/ermouth/couch-photon/master/photon.json | \
curl $couch/photon/_design/photon -d @- ; curl $couch/photon/_security -d '{}' ; \
curl $couch/_node/_local/_config/csp/attachments_enable -d '"false"' ; \
curl $couch/_node/_local/_config/chttpd_auth/same_site -d '"lax"' ; 
