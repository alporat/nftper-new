import { create } from 'zustand'

interface StoreState {
    ishome:boolean,
    setIshome:(ishome:boolean) =>void;

}

export const useStore = create<StoreState>((set) => ({
    ishome: false,
    setIshome: (ishome) => set({ ishome: ishome })
}));