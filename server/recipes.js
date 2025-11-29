import {db, storage} from "./dbinit.js";
import * as fbs from "firebase/firestore";


let recipeCols = fbs.collection(db, "recipes");
//crud
export async function getAllRecipes() {
    const recipeSnapshot = await fbs.getDocs(recipeCols);
    const recipeList = recipeSnapshot.docs.map(doc => doc.data());
    return recipeList;
}

export async function getOne(id) {
   const recipe = await fbs.getDoc(fbs.doc(db, "recipes", id));
   return recipe.data();
}

export async function add(title, ingredients, imageBytes, userId) {
    const imageRef = ref(storage, `images/${title}-${Date.now()}.jpg`);
    await uploadBytes(imageRef, imageBytes);
    const imageUrl = await getDownloadURL(imageRef);
    //title, ingredients, imageUrl, userId, createdAt
    const newRecipe = {
        title,
        ingredients,
        userId,
        imageUrl,
        createdAt: new Date(),
    };

    await fbs.addDoc(recipeCols, newRecipe);
}

export async function update(id, title, ingredients, imageBytes) {
    const recipeRef = fbs.doc(db, "recipes", id);
    
}

export async function remove(id) {
    await fbs.deleteDoc(fbs.doc(db, "recipes", id));
}

