// script.js

import { db } from './firebase.js';
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Referencia a la colección de comentarios
const commentsRef = collection(db, "comments");
const q = query(commentsRef, orderBy("timestamp", "desc"));

// Manejo del formulario
const form = document.getElementById("commentForm");
const nameInput = document.getElementById("userName");
const commentInput = document.getElementById("userComment");
const commentContainer = document.getElementById("commentContainer");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();

  if (name && comment) {
    await addDoc(commentsRef, {
      name,
      comment,
      timestamp: Date.now()
    });
    nameInput.value = "";
    commentInput.value = "";
  }
});

// Mostrar comentarios en tiempo real
onSnapshot(q, (snapshot) => {
  commentContainer.innerHTML = "";
  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const div = document.createElement("div");
    div.classList.add("comment");

    div.innerHTML = `
      <button class="delete-btn" data-id="${docSnap.id}">✖</button>
      <strong>${data.name}</strong><br/>
      <span>${data.comment}</span>
    `;

    commentContainer.appendChild(div);
  });
});

// Borrar comentario
commentContainer.addEventListener("click", async (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const id = e.target.getAttribute("data-id");
    await deleteDoc(doc(db, "comments", id));
  }
});
