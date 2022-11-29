.PHONY: all createDB start startDB startUnleashServer startUnleashProxy startFrontEndClient clean

unleash-server-username :=admin
unleash-server-password :=unleash4all

all:start

start: startDB startUnleashServer startUnleashProxy startFrontEndClient

createDB:
	@echo 'Starting postgres container'
	docker run -p5432:5432 -e POSTGRES_PASSWORD=password -e POSTGRES_USER=unleash_user -e POSTGRES_DB=unleash --name postgres postgres:15.1

startDB:
	@echo 'Starting postgres container'
	docker start postgres

startUnleashServer: 
	@echo 'Starting Unleash Server'
	node feature-server/server.js &

startUnleashProxy:
	sleep 5
	@echo 'Starting Unleash Proxy'
	node feature-proxy/proxy.js &

startFrontEndClient:
	sleep 5
	@echo 'Starting Frontend client'
	npm start --prefix feature-frontend-client

clean:
	@echo 'Cleaning Up'
	docker stop postgres