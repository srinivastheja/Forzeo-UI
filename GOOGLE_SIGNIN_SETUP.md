# Google Sign-In Setup Guide

## Features Implemented

✅ **Google OAuth Sign-In** - Users can now login with their Google account
✅ **User Avatar** - Blue avatar on the right edge of the dashboard
✅ **User Profile Menu** - Click avatar to see user name and logout option

## Setup Instructions

### 1. Get Google Client ID

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Google+ API"
4. Go to Credentials → Create OAuth 2.0 Client ID
5. Choose "Web application"
6. Add authorized JavaScript origins:
   - `http://localhost:5173` (for development)
   - Your production domain
7. Copy the Client ID

### 2. Add Environment Variable

1. Open or create `.env.local` in the project root
2. Add your Google Client ID:
   ```
   VITE_GOOGLE_CLIENT_ID=your_client_id_here
   ```

### 3. Install Dependencies

The following packages have been installed:
- `@react-oauth/google` - Google OAuth integration
- `js-cookie` - Cookie management

### 4. Run the Application

```bash
npm run dev
```

## How It Works

### Login Flow
- Users can login with email/password OR Google Sign-In
- Google Sign-In decodes the JWT token and extracts user info
- User data (name, email, profile picture) is stored in localStorage

### Avatar Display
- Blue avatar appears on the top-right of the dashboard
- Shows user initials if no profile picture
- Click to open menu with user name and logout option

### Data Structure
The User object now includes:
```typescript
{
  id: string;           // User ID from Google
  email: string;        // User email
  name?: string;        // User full name
  picture?: string;     // Profile picture URL
}
```

## Customization

### Change Avatar Color
Edit [src/components/TopAppBar.tsx](src/components/TopAppBar.tsx#L64) and modify the `backgroundColor` property:
```typescript
backgroundColor: '#2196F3',  // Change this color
```

### Customize Menu Items
Edit the Menu section in [TopAppBar.tsx](src/components/TopAppBar.tsx#L80) to add more options.

## Troubleshooting

**Google button not appearing?**
- Make sure `VITE_GOOGLE_CLIENT_ID` is set in `.env.local`
- Check browser console for errors

**Login not working?**
- Verify Client ID is correct
- Check that authorized origins include your current domain
- Clear browser localStorage and try again

**Profile picture not loading?**
- Google URL might be blocked by CORS
- Consider serving images through your backend as a workaround
