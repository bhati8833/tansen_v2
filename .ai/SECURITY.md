# Security Standards — Tansen Sangeet Mahavidyalaya Website

## Current Security Measures

### Static Site

- No server-side logic at runtime (fully static export)
- No database connections
- No authentication system
- No sensitive data in client-side code

### Environment Variables

- `.env.local` contains site configuration only
- No API keys or secrets exposed to client
- Environment variables not used in client-side code

### Dependencies

- All dependencies from npm registry
- `npm audit` should be run regularly
- Next.js 16.3.3 (latest stable)

### Content Security

- User input only in contact form (client-side, simulated submission)
- No actual data persistence (form submission is simulated)
- No file uploads
- No user authentication

## Security Considerations

### Contact Form

- Currently simulated with `setTimeout` (no actual API)
- When real API is added:
  - Implement CSRF protection
  - Validate and sanitize all inputs server-side
  - Rate limiting on form submissions
  - CAPTCHA or honeypot for spam prevention

### Google Maps Embed

- Uses standard iframe embed
- No API key exposed in client code
- Consider adding `referrer-Policy` header

### External Links

- Social media links open in new tabs
- WhatsApp link uses `wa.me` protocol
- Google Maps link uses standard URL

### Headers (Recommended)

When deploying to a server:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` (restrictive)

## Security Gaps

1. **No CSRF protection** — form has no anti-CSRF token (currently simulated, but needed for real API)
2. **No rate limiting** — when API is added, needs rate limiting
3. **No input validation** — client-side only (needs server-side validation)
4. **No Content-Security-Policy headers** — depends on deployment platform
5. **No Subresource Integrity** — for any external scripts (currently none)
