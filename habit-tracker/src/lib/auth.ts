const CREDENTIALS = { username: "user", password: "password" };

export function verifyCredentials(username: string, password: string): boolean {
  return username === CREDENTIALS.username && password === CREDENTIALS.password;
}
