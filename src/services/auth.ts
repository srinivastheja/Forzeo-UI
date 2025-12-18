type User = { id: string; email: string; name?: string } | null;

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
