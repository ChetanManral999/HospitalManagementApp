#!/bin/bash

# Function to handle termination
terminate() {
  echo "Terminating all processes..."
  pkill -P $$
  wait
  exit 0
}

# Trap SIGINT (Ctrl+C) and call the terminate function
trap terminate SIGINT


# Navigate to MernBackend and start it
cd Mernbackend
npm install
npm uninstall bcrypt
npm install bcrypt
npm run dev &

# Navigate to MernDashboard and start it
cd ../MernDashboard
npm install
npm run dev &

# Navigate to MernFrontend and start it
cd ../Mernfrontend
npm install
npm run dev &

# Wait for all background processes to finish
wait