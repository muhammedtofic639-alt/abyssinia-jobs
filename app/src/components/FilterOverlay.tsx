"use client";

import React from "react";
import { SlideSheet } from "@/components/ui/SlideSheet";
import { Accordion } from "@/components/ui/Accordion";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import type { MainCategoryWithSubs } from "@/lib/types";

export interface FilterOverlayProps {
  open: boolean;
  onClose: () => void;
  selected: Set<string>;
  onApply: (subCategoryIds: Set<string>) => void;
}

/** "Filter & Show" sheet — nested Main Category accordions, each containing checkbox subcategory toggles. */
export function FilterOverlay({ open, onClose, selected, onApply }: FilterOverlayProps) {
  const [categories, setCategories] = React.useState<MainCategoryWithSubs[]>([]);
  const [openId, setOpenId] = React.useState<string | null>(null);
  const [sel, setSel] = React.useState<Set<string>>(selected);

  React.useEffect(() => {
    if (open) setSel(new Set(selected));
  }, [open, selected]);

  React.useEffect(() => {
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  function toggleSub(id: string) {
    setSel((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <SlideSheet
      open={open}
      title="Filter & Show"
      onClose={onClose}
      footer={
        <Button
          fullWidth
          size="lg"
          onClick={() => {
            onApply(sel);
            onClose();
          }}
        >
          Apply filters {sel.size > 0 ? `(${sel.size})` : ""}
        </Button>
      }
    >
      {categories.map((cat) => (
        <Accordion
          key={cat.id}
          title={cat.name}
          count={cat.subCategories.length}
          open={openId === cat.id}
          onToggle={() => setOpenId((o) => (o === cat.id ? null : cat.id))}
        >
          {cat.subCategories.map((sub) => (
            <Checkbox key={sub.id} checked={sel.has(sub.id)} onChange={() => toggleSub(sub.id)} label={sub.name} />
          ))}
        </Accordion>
      ))}
    </SlideSheet>
  );
}
