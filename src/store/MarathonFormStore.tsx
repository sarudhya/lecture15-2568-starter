import { create } from "zustand";
import { type MarathonFormState } from "../libs/Store";
export const useMarathonFormStore = create<MarathonFormState>((set) => ({
  fname: "",
  lname: "",
  plan: "funrun",
  gender: "male",
  buyBottle: false,
  buyShoes: false,
  buyCap: false,
  total: 0,
  email:"",
  setFname: (fname) =>
    set(() => ({
      fname: fname,
    })),
  setLname: (_lname) =>
    set(() => ({
      lname: _lname,
    })),
  setPlan: (_plan) =>
    set(() => ({
      plan: _plan,
    })),
  setGender: (_gender) =>
    set(() => ({
      gender: _gender,
    })),
  setBuyBottle: (_buyBottle) =>
    set(() => ({
      buyBottle: _buyBottle,
    })),
  setBuyShoes: (_buyShoes) =>
    set(() => ({
      buyShoes: _buyShoes,
    })),
  setBuyCap: (_buyCap) =>
    set(() => ({
      buyCap: _buyCap,
    })),
    setEmail: (_email) => set(() => ({
      email: _email
    })),
  // Function คำนวณ total ตรงนี้
  computeTotalPayment: () =>
    set((state) => {
      let totalPayment = 0;
      if (state.plan === "funrun") totalPayment += 500;
      if (state.plan === "mini") totalPayment += 800;
      if (state.plan === "half") totalPayment += 1200;
      if (state.plan === "full") totalPayment += 1500;

      if (state.buyBottle && state.buyShoes && state.buyCap) {
        let itemTotal = 0;
        if (state.buyBottle) itemTotal += 200;
        if (state.buyShoes) itemTotal += 600;
        if (state.buyCap) itemTotal += 400;
        const discount = itemTotal * 0.2;
        totalPayment += itemTotal - discount;
      } else {
        if (state.buyBottle) totalPayment += 200;
        if (state.buyShoes) totalPayment += 600;
        if (state.buyCap) totalPayment += 400;
      }

      return { total: totalPayment };
      //  return object ซึ่ง object ต้องใช้ {ระบุ key : value } ในการสร้าง
    }),
  reset: () =>
    set({
      fname: "",
      lname: "",
      plan: "funrun",
      gender: "male",
      buyBottle: false,
      buyShoes: false,
      buyCap: false,
      total: 0,
      email:"",
    }),
}));
