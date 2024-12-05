import { useState } from "react";

export default function useModel() {
    const [isOpenModel , setIsOpenModel] = useState(false);

    return {
        isOpenModel,
        open : () => setIsOpenModel(true),
        close : () => setIsOpenModel(false)
    }
}