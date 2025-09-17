import { create } from "zustand";

export const usePropertyStore = create((set) => ({
  properties: [],
  addProperty: (property) =>
    set((state) => ({
      properties: [...state.properties, { id: Date.now(), ...property }],
    })),
}));
