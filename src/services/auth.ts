export type User = { id: string; email: string; name?: string; picture?: string } | null;

const STORAGE_KEY = 'forzeo_auth';

function wait(ms = 500) {
  return new Promise((res) => setTimeout(res, ms));
}

export const authService = {
  async login(email: string, password: string) {
    await wait(500);
    // VERY simple mock: any email/password accepted
    const user: User = { id: '1', email, name: 'Demo User' };
    const token = btoa(`${email}:${password}`);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
    return { user, token };
  },
  async signup(email: string, password: string) {
    await wait(700);
    const user: User = { id: '2', email, name: 'New User' };
    const token = btoa(`${email}:${password}`);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
    return { user, token };
  },
  async loginWithGoogle(credentialResponse: any) {
    await wait(300);
    // Decode JWT token from Google
    const base64Url = credentialResponse.credential.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    const decoded = JSON.parse(jsonPayload);

    const user: User = {
      id: decoded.sub,
      email: decoded.email,
      name: decoded.name,
      picture: decoded.picture,
    };
    const token = credentialResponse.credential;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
    return { user, token };
  },
  logout() {
    localStorage.removeItem(STORAGE_KEY);
  },
  getSession() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as { user: User; token: string };
    } catch {
      return null;
    }
  },
  isAuthenticated() {
    return !!this.getSession();
  }
};
