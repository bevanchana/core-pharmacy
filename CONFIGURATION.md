# Pharmacy Configuration Guide

## Overview

All pharmacy-specific details (name, location, WhatsApp number) are centralized in the `src/config.ts` file. This makes it easy to update pharmacy information in one place.

## Configuration File Location

```
pharmacy-app/src/config.ts
```

## Current Configuration

### Pharmacy Information
- **Name**: Core Pharmacy
- **Location**: Likomba, South-West | Near PCC & Redeemed House of Prayer

### WhatsApp Integration
- **Phone Number**: `237XXXXXXXXX` (placeholder - needs to be updated)
- **Format**: Country code + phone number (e.g., `237XXXXXXXXX` for Cameroon)

## How to Update the WhatsApp Number

1. Open `src/config.ts`
2. Locate the `whatsappNumber` field in the `PHARMACY_CONFIG` object
3. Replace `"237XXXXXXXXX"` with the actual pharmacy WhatsApp number
4. Ensure the format is: `237` (Cameroon country code) + 9-digit phone number
5. Example: `"237612345678"`

### Example Configuration

```typescript
export const PHARMACY_CONFIG = {
  name: "Core Pharmacy",
  location: "Likomba, South-West | Near PCC & Redeemed House of Prayer",
  whatsappNumber: "237612345678", // Replace with actual number
  reservationMessageTemplate: (medicationName: string) => 
    `Hello, I would like to reserve ${medicationName}`,
} as const;
```

## Testing WhatsApp Integration

### Desktop Testing
1. Start the development server: `npm run dev`
2. Open the website in a browser
3. Click on a medication's "Reserve via WhatsApp" button
4. Verify that WhatsApp Web opens in a new tab
5. Check that the pre-filled message includes the medication name
6. Verify the phone number is correct

### Mobile Testing
1. Access the website on a mobile device
2. Tap the floating WhatsApp button (bottom-right corner)
3. Verify that the WhatsApp mobile app opens
4. Check that the pharmacy number is correct
5. Test the "Reserve via WhatsApp" button on medication cards
6. Verify the pre-filled message includes the medication name

## WhatsApp Link Format

The application generates WhatsApp links in the following format:

```
https://wa.me/{phoneNumber}?text={encodedMessage}
```

### For Medication Reservations:
```
https://wa.me/237XXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20reserve%20Paracetamol%20500mg
```

### For General Contact (Floating Button):
```
https://wa.me/237XXXXXXXXX
```

## Verification Checklist

After updating the configuration, verify:

- [ ] Pharmacy name displays correctly in the header
- [ ] Location displays correctly in the header
- [ ] WhatsApp number is in the correct format (237 + 9 digits)
- [ ] Reserve buttons open WhatsApp with the correct number
- [ ] Pre-filled messages include the medication name
- [ ] Floating WhatsApp button opens WhatsApp with the correct number
- [ ] Links work on both desktop (WhatsApp Web) and mobile (WhatsApp app)
- [ ] All tests pass: `npm test`

## Customizing the Reservation Message

To customize the message template sent when reserving medications:

1. Open `src/config.ts`
2. Modify the `reservationMessageTemplate` function
3. The function receives `medicationName` as a parameter
4. Return the desired message string

### Example Custom Messages

**Formal Style:**
```typescript
reservationMessageTemplate: (medicationName: string) => 
  `Good day. I would like to inquire about reserving ${medicationName}. Is it currently available?`
```

**Brief Style:**
```typescript
reservationMessageTemplate: (medicationName: string) => 
  `Hi! Reserve ${medicationName} please`
```

**With Additional Info:**
```typescript
reservationMessageTemplate: (medicationName: string) => 
  `Hello Core Pharmacy, I would like to reserve ${medicationName}. When can I pick it up?`
```

## Troubleshooting

### WhatsApp Links Not Opening

**Desktop:**
- Ensure WhatsApp Web is accessible in your browser
- Check if popup blockers are preventing the new tab from opening
- Try allowing popups for the website

**Mobile:**
- Ensure WhatsApp is installed on the device
- Check if the browser has permission to open external apps
- Try using a different mobile browser

### Incorrect Phone Number Format

The phone number must:
- Start with country code `237` (for Cameroon)
- Contain only digits (no spaces, dashes, or parentheses)
- Be in the format: `237XXXXXXXXX` (12 digits total)

**Incorrect formats:**
- ❌ `+237 6 12 34 56 78` (has spaces and +)
- ❌ `237-612-345-678` (has dashes)
- ❌ `06 12 34 56 78` (missing country code)

**Correct format:**
- ✅ `237612345678`

## Additional Notes

- The configuration uses TypeScript's `as const` to ensure type safety
- All components automatically use the centralized configuration
- Changes to `config.ts` require rebuilding the application
- The configuration is included in the production build
- No environment variables are needed for basic configuration

## Support

For questions or issues with the configuration:
1. Check this documentation
2. Review the `src/config.ts` file
3. Run tests to verify configuration: `npm test`
4. Check the browser console for any errors
