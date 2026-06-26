Pill action button — lime `primary` is the single loudest CTA per screen; `secondary`/`ghost`/`danger` recede.

```jsx
<Button variant="primary" size="lg" fullWidth>Continue</Button>
<Button variant="secondary">Skip for now</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger">Reject</Button>
<Button loading>Saving…</Button>
```

Variants: `primary` (lime + glow), `secondary` (glass), `ghost` (text), `danger`. Sizes `sm | md | lg`. Press shrinks to 0.97. Pass `leadingIcon`/`trailingIcon` as nodes.
