import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "@firebase/auth";
import { auth } from "./dbinit";

export async function signUp(email, password) {
   const {user} = await createUserWithEmailAndPassword(auth, email, password);
   return user;
}

export async function signIn(email, password) {
   const { user } = await signInWithEmailAndPassword(auth, email, password);
   return user;
}

export function logoutUser() {
  return signOut(auth);
}

export function onUserStateChanged(callback) {
  return onAuthStateChanged(auth, (user) => {
    callback(user || null);
  });
}