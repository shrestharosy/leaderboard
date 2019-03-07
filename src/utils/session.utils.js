const storageType = localStorage;

export function setSession(key, value) {
  storageType.setItem(key, JSON.stringify(value));
}

export function setUser(key, value) {
  storageType.setItem(key, JSON.stringify(value));
}

export function setJsonStorageComponent(key, value) {
  storageType.setItem(key, JSON.stringify(value));
}

export function getJsonStorageComponent(key) {
  const data = storageType.getItem(key);
  let result;
  if (data !== null && data !== "null") {
    result = JSON.parse(data);
    return result;
  }
  return null;
}

export const sessionUtils = {
  setSession,
  setUser,
  setJsonStorageComponent,
  getJsonStorageComponent
};
