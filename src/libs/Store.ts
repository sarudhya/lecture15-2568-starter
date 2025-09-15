
interface MarathonFormState {
  fname: string;
  lname: string;
  plan: "funrun" | "mini" | "half" | "full";
  gender: "male" | "female";
  buyBottle: boolean;
  buyShoes: boolean;
  buyCap: boolean;
  total: number;
  email: string;
  // Setters
  setFname: (v: string) => void;
  setLname: (v: string) => void;
  setPlan: (v: "funrun" | "mini" | "half" | "full") => void;
  setGender: (v: "male" | "female") => void;
  setBuyBottle: (v: boolean) => void;
  setBuyShoes: (v: boolean) => void;
  setBuyCap: (v: boolean) => void;
  setEmail: ( v: string ) => void;
  // Function คำนวณ total ตรงนี้
  computeTotalPayment: () => void;
  reset: () => void;
}
export type { MarathonFormState }