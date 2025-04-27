# Feature Explanations for InnoGenius.ai

This document provides detailed explanations of key features in the InnoGenius.ai website, focusing on the usage tracking system and email capture functionality.

## Usage Tracking System

### How It Works

The usage tracking system in InnoGenius.ai is designed to monitor and display the number of AI tool uses across all features combined. Here's a detailed explanation of how it works:

#### 1. Usage Calculation and Display

The dashboard displays the user's current usage with several UI elements:

- **Usage Counter**: Shows remaining uses in the format "X/Y uses remaining this month"
- **Progress Bar**: Visual representation of usage (filled portion represents used credits)
- **Tooltip**: Appears when hovering over the question mark icon, explaining the usage limits

The calculation logic works as follows:
- Each time a user uses any AI tool (Humanizer, Text Detector, CV Writer, etc.), it counts as 1 use
- The system tracks total uses across all tools combined, not per individual tool
- The Free Plan includes 5 total uses per month
- The Standard Plan includes 50 uses per month
- The Premium Plan includes unlimited uses

#### 2. Monthly Reset Mechanism

In a production environment, the usage tracking would reset on the 1st of each month:

```javascript
// Pseudocode for monthly reset
function shouldResetUsage(user) {
  const today = new Date();
  const lastResetDate = user.lastUsageResetDate;
  
  // If it's a new month since the last reset
  if (today.getMonth() !== lastResetDate.getMonth() || 
      today.getFullYear() !== lastResetDate.getFullYear()) {
    return true;
  }
  return false;
}

// Reset user's usage count
function resetUsage(user) {
  user.usageCount = 0;
  user.lastUsageResetDate = new Date();
  saveUserData(user);
}
```

#### 3. Usage Limit Enforcement

When a user reaches their usage limit:
- The system displays a message indicating they've used all their monthly credits
- Tool buttons are disabled or show an upgrade prompt when clicked
- A prominent "Upgrade Plan" button is displayed

#### 4. Implementation Details

In the current implementation:
- Usage data is displayed in the dashboard page (`/src/app/dashboard/page.tsx`)
- The usage counter includes tooltips with the `?` icon that explain the limits
- The UI shows both numerical values and a progress bar for better visualization
- The dashboard also shows a "Recent Activity" section with the last 3 tool uses

In a production environment, this would be connected to a backend database that stores:
- Current usage count per user
- Last reset date
- Subscription tier
- Usage history

## Email Capture Form

### How It Works

The email capture form is designed to collect early-access sign-ups for the InnoGenius.ai launch. It's implemented in two locations:

1. In the footer of every page
2. As a dedicated section on the homepage

#### 1. Form Configuration

The form is configured to work with Formspree, a form backend service that handles form submissions and forwards them to your email:

```jsx
<form 
  action="https://formspree.io/f/your-formspree-endpoint" 
  method="POST"
  className="max-w-md mx-auto"
>
  {/* Form fields */}
</form>
```

The form endpoint is configured via an environment variable:
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-formspree-id
```

#### 2. Form Fields and Validation

The form collects two pieces of information:
- **Name**: Required field for personalization
- **Email**: Required field with email format validation

Client-side validation is implemented using HTML5 validation attributes:
- `required` attribute ensures fields cannot be empty
- `type="email"` validates proper email format

```jsx
<input
  type="text"
  id="name"
  name="name"
  placeholder="Your name"
  required
  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
/>

<input
  type="email"
  id="email"
  name="email"
  placeholder="Your email address"
  required
  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
/>
```

#### 3. Form Submission Process

When a user submits the form:
1. The browser validates the fields (required fields and email format)
2. If validation passes, the form data is sent to Formspree via POST request
3. Formspree processes the submission and forwards it to your designated email
4. The user sees a success message or is redirected to a thank-you page

#### 4. Implementation Details

The email capture form is implemented in two components:

1. **Footer Component** (`/src/components/Footer.tsx`):
   - Simpler version with name and email fields
   - Part of the "Stay Updated" section in the footer
   - Present on every page of the website

2. **EmailCaptureForm Component** (`/src/components/EmailCaptureForm.tsx`):
   - Larger, more prominent version
   - Includes additional messaging about early access
   - Displayed on the homepage

#### 5. Formspree Integration

To complete the Formspree integration:
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID (looks like `xrgvwpae`)
3. Set the environment variable `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to `https://formspree.io/f/your-form-id`
4. Formspree will send submissions to the email you registered with

#### 6. Additional Features

The form implementation includes:
- Responsive design that works on mobile and desktop
- Clear privacy policy reference
- Success/error handling via Formspree's built-in functionality
- Accessible form fields with proper labels

In a production environment, you might want to enhance this with:
- Custom success/error pages
- Double opt-in confirmation emails
- Integration with email marketing services like Mailchimp
- GDPR compliance features like explicit consent checkboxes
