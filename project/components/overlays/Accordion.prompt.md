One expandable section (smooth height + fade). Stack to build the nested category filter; put `Checkbox` rows inside.

```jsx
<Accordion title="Creative Arts & Media" count={128} open={openId==='ca'} onToggle={()=>toggle('ca')}>
  <Checkbox label="Video Editor" count={42} ... />
  <Checkbox label="Cinematographer" count={18} ... />
</Accordion>
```
