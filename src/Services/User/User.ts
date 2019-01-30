interface LoginPayload {
  email: string;
  password: string;
}

interface NewUser {
  email: string;
  password: string;
  displayName: string;
}

const storageKey = 'user';

//mock backend
const users = [
  {
    email: 'test@testsson.se',
    password: 'test22',
    displayName: 'Tester'
  },
  {
    email: 'admin@testsson.se',
    password: 'test22',
    displayName: 'Admin'
  }
]

/**
 * Login a user
 */
export const login = async (values:LoginPayload) => {
  const [user] = await users.filter(usr => usr.email === values.email && usr.password === values.password);
  if(!user) {
    throw new Error('invalid email or password');
  }
  localStorage.setItem(storageKey, user.displayName);
  return true;
}

/**
 * Check if a user is logged in
 */
export function isAuthenticated():boolean {
  const user = localStorage.getItem(storageKey);
  return Boolean(user);
}

/**
 * Logout a user
 */
export async function logout() {
  await localStorage.removeItem(storageKey);
  return true;
}

/**
 * Register a new user
 */
export async function register(user: NewUser) {
  const [existing] = users.filter(usr => usr.email === user.email);
  if(existing) {
    throw new Error('User already registered');
  }

  users.push(user);
  login({email: user.email, password: user.password});
  return {displayName: user.displayName};
}

export async function requestResetPassword({email}:any) {
  console.log(email);
  await localStorage.removeItem(storageKey);
  return true;
}

export async function resetPassword() {
  await localStorage.removeItem(storageKey);
  return true;
}