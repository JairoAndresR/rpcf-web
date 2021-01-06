docker-compose down

echo "### Starting nginx ..."
docker-compose up --force-recreate --build --remove-orphans -d
echo

echo "### Reloading nginx ..."
docker-compose exec -T web-app nginx -s reload
