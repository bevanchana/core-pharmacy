# WhatsApp Integration Testing Guide

## Overview

This guide provides step-by-step instructions for manually testing the WhatsApp integration on both desktop and mobile devices.

## Prerequisites

- Development server running (`npm run dev`)
- WhatsApp Web account (for desktop testing)
- WhatsApp mobile app installed (for mobile testing)
- Actual pharmacy WhatsApp number configured in `src/config.ts`

## Desktop Testing

### Test 1: Medication Reservation Button

1. **Start the application**
   ```bash
   npm run dev
   ```

2. **Open in browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

3. **Wait for medications to load**
   - You should see skeleton loaders for ~1.5 seconds
   - Then medication cards should appear

4. **Test "Reserve via WhatsApp" button**
   - Click the blue "Reserve via WhatsApp" button on any in-stock medication
   - A new browser tab should open
   - WhatsApp Web should load (you may need to scan QR code if not logged in)

5. **Verify the pre-filled message**
   - The message field should contain: "Hello, I would like to reserve [Medication Name]"
   - The recipient should be the pharmacy's WhatsApp number
   - Example: "Hello, I would like to reserve Paracetamol 500mg"

6. **Check out-of-stock medications**
   - Find a medication with "Out of Stock" badge (red)
   - The "Unavailable" button should be disabled (grayed out)
   - Clicking should have no effect

### Test 2: Contact Desk Button (Desktop Only)

1. **Locate the header**
   - At the top of the page, you should see "Core Pharmacy"
   - On desktop screens, a "Contact Desk" button should be visible

2. **Click "Contact Desk"**
   - Currently, this button doesn't have WhatsApp integration
   - It's a placeholder for future functionality

### Test 3: Search and Reserve

1. **Use the search bar**
   - Type "para" in the search field
   - Results should filter to show only medications containing "para"
   - Example: "Paracetamol 500mg"

2. **Reserve a filtered medication**
   - Click "Reserve via WhatsApp" on a filtered result
   - Verify WhatsApp opens with the correct medication name

3. **Clear search**
   - Clear the search field
   - All medications should reappear

## Mobile Testing

### Test 1: Floating WhatsApp Button

1. **Access on mobile device**
   - Open the website on your mobile device
   - Use the same URL: `http://[your-ip]:5173`
   - Or deploy to a test server

2. **Locate the floating button**
   - Look for a green circular button in the bottom-right corner
   - It should have a WhatsApp message icon
   - The button should NOT appear on desktop screens

3. **Tap the floating button**
   - The WhatsApp mobile app should open
   - The chat should be with the pharmacy's number
   - No pre-filled message (this is for general contact)

### Test 2: Medication Reservation on Mobile

1. **Browse medications**
   - Scroll through the medication list
   - Cards should be in a single column on mobile

2. **Tap "Reserve via WhatsApp"**
   - Tap the button on any in-stock medication
   - WhatsApp app should open
   - Pre-filled message should include the medication name

3. **Test touch targets**
   - All buttons should be easy to tap (minimum 44px height)
   - No accidental taps on nearby elements

### Test 3: Responsive Behavior

1. **Rotate device**
   - Test in portrait mode
   - Test in landscape mode
   - Layout should adapt appropriately

2. **Test on different screen sizes**
   - Small phone (< 375px width)
   - Standard phone (375px - 768px)
   - Tablet (768px - 1024px)

## Automated Test Verification

Before manual testing, ensure all automated tests pass:

```bash
npm test
```

Expected output:
- All tests should pass
- Configuration tests verify pharmacy details
- Component tests verify WhatsApp integration logic

## Test Scenarios Checklist

### Desktop
- [ ] Medication reservation opens WhatsApp Web
- [ ] Pre-filled message includes medication name
- [ ] Out-of-stock medications have disabled buttons
- [ ] Floating WhatsApp button is hidden on desktop
- [ ] Search + reserve works correctly
- [ ] Multiple reservations work (different medications)

### Mobile
- [ ] Floating WhatsApp button is visible
- [ ] Floating button opens WhatsApp app
- [ ] Medication reservation opens WhatsApp app
- [ ] Pre-filled message includes medication name
- [ ] Touch targets are adequate size
- [ ] Single-column layout on mobile
- [ ] Sticky header and search bar work

### Cross-Platform
- [ ] Pharmacy name displays correctly
- [ ] Location displays correctly
- [ ] WhatsApp number is correct in all links
- [ ] URL encoding works (special characters in medication names)
- [ ] Links open in new tab/window (desktop) or app (mobile)

## Common Issues and Solutions

### Issue: WhatsApp Web doesn't open

**Solution:**
- Check if popup blocker is enabled
- Allow popups for the website
- Try a different browser

### Issue: Wrong phone number in WhatsApp

**Solution:**
- Verify `src/config.ts` has the correct number
- Rebuild the application: `npm run build`
- Clear browser cache and reload

### Issue: Pre-filled message is empty

**Solution:**
- Check the `reservationMessageTemplate` in `src/config.ts`
- Verify the medication name is being passed correctly
- Check browser console for errors

### Issue: Floating button appears on desktop

**Solution:**
- Check browser window width (should be < 768px to show)
- Verify Tailwind CSS is loaded correctly
- Check for CSS conflicts

### Issue: Links don't open on mobile

**Solution:**
- Ensure WhatsApp is installed
- Check browser permissions for opening external apps
- Try a different mobile browser

## Testing with Different Medications

Test with medications that have:
- Short names: "Aspirin 75mg"
- Long names: "Artemether-Lumefantrine"
- Special characters: "Vitamin C 1000mg"
- Multiple words: "Cough Syrup"

Verify that all names are correctly encoded in the WhatsApp URL.

## Performance Testing

1. **Loading state**
   - Verify skeleton loaders appear immediately
   - Verify they disappear after ~1.5 seconds
   - Verify smooth transition to medication cards

2. **Search performance**
   - Type quickly in the search field
   - Results should update smoothly
   - No lag or stuttering

3. **Button responsiveness**
   - Buttons should respond immediately to clicks/taps
   - No delay in opening WhatsApp

## Accessibility Testing

1. **Keyboard navigation**
   - Tab through all interactive elements
   - Verify focus indicators are visible
   - Test Enter key on buttons

2. **Screen reader testing**
   - Use a screen reader (VoiceOver on iOS, TalkBack on Android)
   - Verify all buttons have proper labels
   - Verify medication information is announced correctly

## Reporting Issues

If you encounter issues during testing:

1. Note the device/browser being used
2. Describe the steps to reproduce
3. Include any error messages from the console
4. Take screenshots if applicable
5. Check if the issue occurs on other devices/browsers

## Next Steps After Testing

Once all tests pass:
- [ ] Deploy to production
- [ ] Test on production URL
- [ ] Monitor for any user-reported issues
- [ ] Consider adding analytics to track WhatsApp link clicks
