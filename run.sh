# run.sh - Script to start the generation process

node_max_memory=40960

# Set node max memory to a large number (highest possible, based on available RAM)
export NODE_OPTIONS=--max_old_space_size=$node_max_memory

# Start the generation process
# Install required packages
npm install
# Install required python dependencies
pip install pandas
# Start the generation process. Save the screen output to a file
npm run build

# Run python program to create rarity and occurences for NFT partner
cd utils && python3 occurences.py

