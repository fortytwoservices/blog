#!/bin/sh

# Jump into correct folder
cd /workspaces/amestofortywo-blog

# Install Gatsby CLI
sudo npm install -g gatsby-cli

# Setup and install prereqs 
sudo npm install

# Increase node memory allocation
export NODE_OPTIONS="--max-old-space-size=5096"

# Wipe all cache node_modules and package-lock.json file
gatsby clean

# Build
npm run build

# Run development instance
gatsby develop