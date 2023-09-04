up-all:
	docker-compose -f docker-compose.yml \
					-f ./server/docker-compose.yml \
					-f ./client/docker-compose.yml \
					up --build -d

off-all:
	docker-compose -f docker-compose.yml \
					-f ./server/docker-compose.yml \
					-f ./client/docker-compose.yml \
					down

up-server:
	docker-compose -f docker-compose.yml \
					-f ./server/docker-compose.yml \
					up --build -d

off-server:
	docker-compose -f docker-compose.yml \
					-f ./server/docker-compose.yml \
					down

up-client:
	docker-compose -f ./client/docker-compose.yml \
					up --build -d

off-client:
	docker-compose -f ./client/docker-compose.yml \
					down
