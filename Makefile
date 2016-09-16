PROJECT_NAME=jstools
VENV_DIR?=.venv
VENV_ACTIVATE?=$(VENV_DIR)/bin/activate
WITH_VENV?=. $(VENV_ACTIVATE);

COMPILED_STATIC=.compiled-static
NODE_MODULES?=node_modules


##########
# Python #
##########

$(VENV_ACTIVATE): requirements*.txt
	test -d $(VENV_DIR) || virtualenv $(VENV_DIR)
	$(WITH_VENV) pip install -r requirements.txt


.PHONY: venv
venv: $(VENV_ACTIVATE)


runserver: venv
	$(WITH_VENV) python manage.py runserver 5050 --settings=jstools.settings


shell: venv
	$(WITH_VENV) python manage.py shell


migrate: venv
	$(WITH_VENV) python manage.py migrate --settings=jstools.settings


##############
# JavaScript #
##############

$(NODE_MODULES): package.json
	npm install
	touch $@


$(COMPILED_STATIC):
	mkdir $@


babel: $(NODE_MODULES) $(COMPILED_STATIC)
	$(NODE_MODULES)/.bin/babel/index.js \
		$(PROJECT_NAME)/static/js/ \
		--out-file $(COMPILED_STATIC)/js/index.js \
		--presets es2015,react


webpack: $(NODE_MODULES) $(COMPILED_STATIC)
	$(NODE_MODULES)/.bin/webpack --progress \
		--colors \
		--config webpack.config.js \
		--output-path $(COMPILED_STATIC)


###########
# "OTHER" #
###########

clean:
	rm -rf $(NODE_MODULES)
	rm -rf $(COMPILED_STATIC)
