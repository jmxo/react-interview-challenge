import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useLocalStorageFavorites(
  initialValue?: string[]
): [string[], Dispatch<SetStateAction<string[]>>] {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const valueInStorage = window.localStorage.getItem(
      "moismat/react-task/favorites"
    );

    if (valueInStorage) {
      return JSON.parse(valueInStorage);
    }

    return initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(
      "moismat/react-task/favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  return [favorites, setFavorites];
}
