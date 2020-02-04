.PHONY: all build check clean install update serve

SHELL   := /bin/bash
BUNDLE  := bundle
JEKYLL  := $(BUNDLE) exec jekyll
GEMFILE := Gemfile

JEKYLL_ENV    := production
JEKYLL_HOST   := 0.0.0.0
JEKYLL_CONFIG := _config.yml,_config_dev.yml


all : serve

check:
	$(JEKYLL) doctor

install: $(GEMFILE)
	$(BUNDLE) install

update: $(GEMFILE)
	$(BUNDLE) update

build: install
	$(JEKYLL) build

serve: install
	JEKYLL_ENV=$(JEKYLL_ENV) $(JEKYLL) serve \
		--host $(JEKYKLL_HOST) \
		--config $(JEKYLL_CONFIG)
