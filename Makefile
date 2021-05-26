help:
	@echo make install
	@echo make format
	@echo make lint
	@echo make run

install:
	yarn install

format:
	prettier --check "src/**/*.js"

lint:
	npx eslint

run:
	yarn start
