#!/bin/bash
while [[ $# -gt 0 ]]
do
key="$1"
HELP=0
HELPTRUE=1
case $key in
    -d|--database-connection)
    CONNECTION="$2"
    shift # past argument
    shift # past value
    ;;
    -t|--token-secret)
    TOKEN="$2"
    shift # past argument
    shift # past value
    ;;
    -h|--help)
    HELP=1
    shift # past argument
    ;;
esac
done

if [ ${HELP} -eq ${HELPTRUE} ]
then
    echo "This program prints the input arguments to the .env file"
    echo "Usage: program [flag [argument]]"
    echo "-d | --database-connection [string]"
    echo "-t | --token-secret [string]"
    echo "-h |--help display this help"
    exit
fi
if [ -z ${CONNECTION+x} ]; 
then 
    echo "-d|--database-connection has no value"; 
else 
    CONNECTIONSTRING="DB_CONNECTION=\"$CONNECTION\""
fi
if [ -z ${TOKEN+x} ]; 
then 
    echo "-t|--token-secret has no value"; 
else 
    TOKENSTRING="TOKEN_SECRET=\"$TOKEN\"" 
fi
if test -f .env;
then
    echo ".env exists"
else
    touch .env
fi
printf "$CONNECTIONSTRING\n$TOKENSTRING" > .env