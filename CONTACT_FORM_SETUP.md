# Contact Form Setup Instructions

## 📧 Email Configuration

The contact form is now fully functional with backend email sending using **Resend**.

### Setup Steps:

1. **Get a Resend API Key**
   - Go to [https://resend.com](https://resend.com)
   - Sign up for a free account
   - Navigate to API Keys section
   - Create a new API key

2. **Add API Key to Environment**
   - Create a `.env.local` file in the root directory
   - Add the following line:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. **Verify Your Domain (Optional but Recommended)**
   - For production, verify your domain in Resend dashboard
   - Update the `from` field in `/src/app/api/contact/route.ts`:
   ```typescript
   from: 'Contact Form <noreply@your-domain.com>'
   ```

4. **Update Email Recipient (Already Done)**
   - Emails are sent to: `k.nemeth@advokatur-kuk.com`
   - To change this, edit the `to` field in `/src/app/api/contact/route.ts`

5. **Restart Development Server**
   ```bash
   npm run dev
   ```

## 🧪 Testing

1. Fill out the contact form at `/kontakt`
2. Submit the form
3. Check your email inbox for the formatted message
4. The form will show a success message if sent successfully

## ✨ Features

- ✅ Full form validation
- ✅ Loading states during submission
- ✅ Success/Error messages
- ✅ Beautiful HTML email template
- ✅ Reply-to functionality (emails can be replied to directly)
- ✅ All form data included in email

## 📝 Form Fields

- First Name (required)
- Last Name (required)
- Email (required)
- Phone (optional)
- Subject (required)
- Message (required)
- Privacy Policy Consent (required)

## 🔧 Technical Details

- **API Route**: `/api/contact`
- **Email Service**: Resend
- **Form Component**: `/src/app/kontakt/page.tsx`
- **Method**: POST with JSON payload
