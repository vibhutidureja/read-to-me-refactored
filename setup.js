#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up ReadToMe application...\n');

// Function to run commands
function runCommand(command, cwd = process.cwd()) {
  try {
    execSync(command, { cwd, stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`❌ Error running command: ${command}`);
    return false;
  }
}

// Function to create .env file
function createEnvFile() {
  const envPath = path.join(__dirname, 'backend', '.env');
  const envContent = `PORT=5000
MONGO_URI=mongodb://localhost:27017/read-to-me
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development`;

  if (!fs.existsSync(envPath)) {
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Created .env file in backend directory');
  } else {
    console.log('ℹ️  .env file already exists in backend directory');
  }
}

// Main setup process
async function setup() {
  console.log('📦 Installing root dependencies...');
  if (!runCommand('npm install')) {
    console.error('❌ Failed to install root dependencies');
    process.exit(1);
  }

  console.log('\n📦 Installing backend dependencies...');
  if (!runCommand('npm install', path.join(__dirname, 'backend'))) {
    console.error('❌ Failed to install backend dependencies');
    process.exit(1);
  }

  console.log('\n📦 Installing frontend dependencies...');
  if (!runCommand('npm install', path.join(__dirname, 'frontend'))) {
    console.error('❌ Failed to install frontend dependencies');
    process.exit(1);
  }

  console.log('\n🔧 Creating environment file...');
  createEnvFile();

  console.log('\n✅ Setup completed successfully!');
  console.log('\n📋 Next steps:');
  console.log('1. Make sure MongoDB is running on your system');
  console.log('2. Update the MONGO_URI in backend/.env if needed');
  console.log('3. Run "npm run dev" to start both servers');
  console.log('4. Open http://localhost:3000 in your browser');
  console.log('\n🎉 Happy reading!');
}

setup().catch(console.error); 