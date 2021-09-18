export default function paginationField() {
  return {
    keyArgs: false,
    read(existing, { args: { skip, first } }) {
      if (!existing) return false;
      const requiredItem = existing.slice(skip, skip + first).filter((x) => x);
      return !!requiredItem.length && requiredItem;
    },

    merge(existing = [], incoming, { args: { skip = 0 } }) {
      const merged = [...existing];
      for (let i = 0; i < incoming.length; ++i) {
        merged[skip + i] = incoming[i];
      }
      return merged;
    },
  };
}
