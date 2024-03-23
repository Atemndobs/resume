# Use the official Node.js 18 image as a parent image
FROM atemndobs/resume:v1.0
# node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json, package-lock.json, and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile
#RUN yarn add @supabase/supabase-js



# Copy the rest of your application's code
COPY . .


# Expose the port the app runs on
EXPOSE 3000

# Command to run your app in development mode
CMD ["yarn", "dev"]
