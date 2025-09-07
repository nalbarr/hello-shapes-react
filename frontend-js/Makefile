help:
	@echo make install
	@echo make format-check
	@echo make format
	@echo make lint
	@echo make run

install:
	pnpm install

format-check:
	pnpm prettier --check "src/**/*.js"

format:
	pnpm prettier --write "src/**/*.js"

lint:
	pnpm eslint

run:
	# yarn start
	NODE_OPTIONS=--openssl-legacy-provider npm run start
