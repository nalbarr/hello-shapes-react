help:
	@echo make install
	@echo make format-check
	@echo make format
	@echo make lint
	@echo make run

install:
	yarn install

format-check:
	yarn prettier --check "src/**/*.js"

format:
	yarn prettier --write "src/**/*.js"

lint:
	yarn eslint

run:
	# yarn start
	# https://levelup.gitconnected.com/how-to-fix-the-err-ossl-evp-unsupported-error-in-node-js-197082f42185
	NODE_OPTIONS=--openssl-legacy-provider npm run start
	
