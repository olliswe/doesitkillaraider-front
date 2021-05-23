import create from "zustand";

type TRerolls = "ones" | "all" | "none";

type TSpecs = {
  bs: string;
  shots: string;
  s: string;
  ap: string;
  d: string;
  rerollHit: TRerolls;
  rerollWound: TRerolls;
};

type TFormStore = TSpecs & {
  errors: { [key in keyof TSpecs]: boolean };
  setState: (input: Partial<TSpecs>) => void;
  setErrors: (input: Partial<{ [key in keyof TSpecs]: boolean }>) => void;
};

const useFormStore = create<TFormStore>((set) => ({
  bs: "",
  shots: "",
  s: "",
  ap: "",
  d: "",
  rerollHit: "none",
  rerollWound: "none",
  errors: {
    bs: false,
    shots: false,
    s: false,
    ap: false,
    d: false,
    rerollHit: false,
    rerollWound: false,
  },
  setState: (input) => set((state) => ({ ...state, ...input })),
  setErrors: (input) =>
    set((state) => ({ ...state, errors: { ...state.errors, ...input } })),
}));

export default useFormStore;
