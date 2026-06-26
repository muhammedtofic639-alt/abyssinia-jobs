The 1-to-10 admin rating scale. Ten lime star pips + a `N / 10` mono chip. Read-only when displayed to seekers; `interactive` in the admin console.

```jsx
<StarRating value={employer.adminRating} />              {/* read-only display */}
<StarRating value={draft} interactive onRate={setDraft} /> {/* admin sets it */}
```
