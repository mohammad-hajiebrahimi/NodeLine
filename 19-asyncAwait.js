// Simulate validation
function validateUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!user.email.includes('@')) {
        return reject('❌ Invalid email address');
      }
      resolve('✅ Validation passed');
    }, 1000);
  });
}

// Simulate DB save
function saveUserToDB(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`🗃️ User ${user.name} saved to database`);
    }, 1500);
  });
}

// Simulate sending email
function sendWelcomeEmail(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`📧 Welcome email sent to ${user.email}`);
    }, 1000);
  });
}

// Main function using async/await
async function registerUser(user) {
  try {
    const validationMessage = await validateUser(user);
    console.log(validationMessage);

    const dbMessage = await saveUserToDB(user);
    console.log(dbMessage);

    const emailMessage = await sendWelcomeEmail(user);
    console.log(emailMessage);

    console.log('🎉 User registration complete!');
  } catch (err) {
    console.error(err);
  }
}

// Try registering a user
const newUser = {
  name: 'Alice',
  email: 'alice@example.com'
};

registerUser(newUser);
