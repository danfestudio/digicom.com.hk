# Use the official Alpine Linux base image
FROM alpine:latest

# Set the working directory inside the container
WORKDIR /app

# Update package index and install Node.js and npm
RUN apk update && apk add --no-cache nodejs npm && rm -rf /var/cache/apk/*

# Copy package.json (and package-lock.json if it exists) to the working directory
COPY package.json ./
COPY package-lock.json* ./

# Install all dependencies (needed for next build)
RUN npm install

# Copy the rest of your application files
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "start"]