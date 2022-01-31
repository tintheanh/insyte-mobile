/**
 * Method check if password is valid
 * @param password
 */
export default function validatePassword(password: string) {
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }
}
