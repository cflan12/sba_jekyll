SHELL := /bin/bash
NPM := npm 
VENDOR_DIR := assets/vendor/
JEKYLL := jekyll

PROJECT_DEPS := package.json

.PHONY: all clean install update

all: serve

check:
	$(JEKYLL) doctor
	$(HTMLPROOF) --check-html \
		--http-status-ignore 999 \
		--internal-domains localhost:4000 \
		--assume-extension \
		_site

install: $(PROJECT_DEPS)
	$(NPM) install

update: $(PROJECT_DEPS)
	$(NPM) update

include-npm-deps:
	mkdir -p $(VENDOR_DIR)
	cp node_modules/jquery/dist/jquery.min.js $(VENDOR_DIR)
	CP node_modules/popper.js/dist/umd/popper.min.js $(VENDOR_DIR)
	CP node_modules/boostrap/dist/js/bootstrap.min.js $(VENDOR_DIR)

build: include-npm-deps
	$(JEKYLL) build

serve: include-npm-deps
	JEKYLL_ENV = production $(JEKYLL) serve