# Variables
HUGO_BIN=hugo
PUBLIC_DIR=public
# Get the current user and group
USER=$(shell id -u)
GROUP=$(shell id -g)

.PHONY: all build clean deploy

# Default task
all: build

# 1. Build the site and immediately fix permissions
build: clean
	@echo "Building Hugo site..."
	$(HUGO_BIN)
	docker compose restart


# 2. Clean the public directory
clean:
	@echo "Cleaning old build files..."
	rm -rf $(PUBLIC_DIR)

# 3. Optional: Restart your docker container to pick up changes
# (Only use if Nginx needs a hard refresh, usually not needed for static files)
refresh: build
	docker compose up -d

# Help message
help:
	@echo "Usage:"
	@echo "  make build   - Run Hugo and fix permissions"
	@echo "  make clean   - Remove the public folder"
