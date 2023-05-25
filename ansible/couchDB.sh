export user='admin'
export pass='pass'
export VERSION='3.2.1'
export cookie='a192aeb9904e6590849337933b000c99'
export my_ip=`echo $(hostname -I) | cut -f1 -d' '`
export masternode='172.26.129.169' #change your ip adress here
sudo chmod 777 /mnt/data


sudo docker run -d \
  --name couchdb${my_ip}\
  --network host\
  --mount type=bind,source=/mnt/data,target=/opt/couchdb/data\
  --env COUCHDB_USER=${user} \
  --env COUCHDB_PASSWORD=${pass} \
  --env COUCHDB_SECRET=${cookie} \
  --env ERL_FLAGS="-setcookie \"${cookie}\" -name \"couchdb@${my_ip}\"" \
  ibmcom/couchdb3:${VERSION}




