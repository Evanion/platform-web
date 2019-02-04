interface LoginPayload {
  email: string;
  password: string;
}

interface NewUser {
  email: string;
  password: string;
  displayName: string;
  code?: string;
}

const storageKey = 'user';

//mock backend
const users: NewUser[] = [
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
export const login = async (values:LoginPayload): Promise<boolean> => {
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
export async function logout(): Promise<boolean> {
  await localStorage.removeItem(storageKey);
  return true;
}

/**
 * Register a new user
 */
export async function register(user: NewUser):Promise<{displayName: string}> {
  const [existing] = users.filter(usr => usr.email === user.email);
  if(existing) {
    throw new Error('User already registered');
  }

  users.push(user);
  login({email: user.email, password: user.password});
  return {displayName: user.displayName};
}

export async function requestResetPassword({email}:any): Promise<string | boolean> {
  const code = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  const index = users.findIndex(user => user.email === email)
  if(!(index + 1)){
    return false;
  } 
  users[index].code = code;

  await localStorage.removeItem(storageKey);
  return code;
}

export async function resetPassword({code, password}:any):Promise<boolean> {
  const index = users.findIndex(user => user.code === code);
  if(!(index + 1)){
    return false;
  } 
  users[index].password = password;
  return true;
}