Large selectable tile for the Step 1 role gate. Selected = lime border, soft lime fill, glow, filled radio check.

```jsx
<RoleCard title="I'm hiring" description="Post roles, browse verified talent" icon={<BriefcaseIcon/>} selected={role==='EMPLOYER'} onSelect={()=>setRole('EMPLOYER')} />
<RoleCard title="I'm looking for work" description="Build a video profile, get discovered" icon={<UserIcon/>} selected={role==='SEEKER'} onSelect={()=>setRole('SEEKER')} />
```
