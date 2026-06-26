Full-screen slide-up sheet (scrim + grab handle + sticky title/footer). Host of the "Filter & Show" overlay. Render inside a `position:relative` phone frame.

```jsx
<SlideSheet open={open} title="Filter & Show" onClose={close}
  footer={<Button fullWidth size="lg">Apply Filters</Button>}>
  {/* Accordion list */}
</SlideSheet>
```
