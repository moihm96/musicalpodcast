export const setLocalStorageExpiration = (
  key: string,
  value: string,
  expiration: number
) => {
  const now = new Date();
  const expirationDate = new Date(
    now.getTime() + expiration * 24 * 60 * 60 * 1000
  );
  const item = {
    value,
    expiry: expirationDate.getTime(),
  };
  localStorage.setItem(key, JSON.stringify(item));
};

export function getLocalStorageExpiration(key: string) {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  const parsedItem = JSON.parse(item);
  const now = new Date().getTime();

  if (now > parsedItem.expiry) {
    // Item has expired, remove it from localStorage
    localStorage.removeItem(key);
    return null;
  }
  return item;
}
