Neon-blue verification checkmark. Render inline beside a seeker's name only when `isVerified` is true. `withLabel` adds the word "Verified".

```jsx
<h3>Selam Tesfaye {seeker.isVerified && <VerifiedBadge size={20} />}</h3>
```
