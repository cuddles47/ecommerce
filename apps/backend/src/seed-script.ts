import { connect, model, Schema, disconnect } from 'mongoose';
import 'dotenv/config';
import { generateUsers } from './utils/seed-users';
import { hash } from 'argon2';

// Define simplified User schema for seeding purposes
const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: Boolean,
  avatar: String,
  createdAt: Date,
});

async function seedUsers() {
  try {
    // Get MongoDB connection string from .env file
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/modern-ecommerce';
    
    console.log('Connecting to MongoDB at:', uri);
    await connect(uri);
    console.log('✅ Connected to MongoDB');
    
    // Create User model
    const UserModel = model('User', UserSchema);
    
    // Create a specific admin account with predictable credentials
    const hashedPassword = await hash('admin123');
    const adminUser = {
      name: 'Admin User',
      email: 'admin@gmail.com',
      password: hashedPassword,
      isAdmin: true,
      avatar: '',
      createdAt: new Date(),
    };
    
    // Insert the admin user first (or check if it already exists)
    const existingAdmin = await UserModel.findOne({ email: 'admin@gmail.com' });
    if (!existingAdmin) {
      await UserModel.create(adminUser);
      console.log('✅ Created admin account with email: admin@gmail.com and password: admin123');
    } else {
      console.log('✅ Admin account already exists');
    }
    
    // Generate random users
    const users = await generateUsers(19); // Generate 19 random users + 1 admin = 20 total
    
    // Map user data
    const mappedUsers = users.map(user => ({
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      avatar: user.avatar,
      createdAt: user.createdAt,
    }));
    
    // Insert into database
    const result = await UserModel.insertMany(mappedUsers);
    console.log(`✅ Successfully seeded ${result.length} additional users`);
    console.log(`✅ Total users in database: ${result.length + 1} (including admin)`);
  } catch (error) {
    console.error('❌ Error seeding users:', error);
  } finally {
    // Disconnect from MongoDB
    await disconnect();
    console.log('✅ Disconnected from MongoDB');
  }
}

// Run the seeder
seedUsers();