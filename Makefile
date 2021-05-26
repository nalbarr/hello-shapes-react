help:
	@echo make install
	@echo make run

install:
	yarn install

lint:
	npx eslint

run:
	yarn start
