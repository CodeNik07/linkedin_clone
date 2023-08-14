import { fireStore } from "../firebaseConfig"
import { Firestore, addDoc, collection, deleteDoc, doc, onSnapshot, query, setDoc, updateDoc, where } from "firebase/firestore"
import { toast } from "react-toastify";

let dbRef = collection(fireStore, 'posts');
let userRef = collection(fireStore, 'users');
let likeRef = collection(fireStore, 'likes');
let commentsRef = collection(fireStore, 'comments');

// Upload Post Data to the Firebase
export const PostStatus = (obj) => {
    addDoc(dbRef, obj).then(() => {
        toast.success("Document has been added successfully")
    }).catch((err) => {
        console.log(err);
    })
};

// Get the Data from the Firebase
export const GetStatus = (setAllStatus) => {
    onSnapshot(dbRef, (responce) => {
        setAllStatus(responce.docs.map((docs) => {
            return { ...docs.data(), id: docs.id };
        }));
    });
};

export const getSingleStatus = (setAllStatus, id) => {
    const singlePostQuery = query(dbRef, where("userId", "==", id));
    onSnapshot(singlePostQuery, (responce) => {
        setAllStatus(
            responce.docs.map((docs) => {
                return { ...docs.data(), id: docs.id }
            })
        );
    });
};


export const getSingleUser = (setCurrentUser, email) => {
    const singleUserQuery = query(userRef, where("email", "==", email));
    onSnapshot(singleUserQuery, (responce) => {
        setCurrentUser(
            responce.docs.map((docs) => {
                return { ...docs.data(), id: docs.id }
            })[0]
        );
    });
};




// Upload the data to user collections
export const postUserData = (obj) => {
    addDoc(userRef, obj).then(() => { }).catch((err) => { console.log(err) })
};

// Get current user data from firebase
export const getCurrentUser = (setCurrentUser) => {
    let currEmail = localStorage.getItem('userEmail');
    onSnapshot(userRef, (responce) => {
        setCurrentUser(responce.docs.map((docs) => {
            return { ...docs.data(), userId: docs.id };
        }).filter((item) => {
            return item.email === currEmail;
        })[0]);
    });
};

// 
export const editProfile = (userId, payload) => {
    let userToEdit = doc(userRef, userId);

    updateDoc(userToEdit, payload).then(() => {
        toast.success("Profile has been updated successfully")
    }).catch((err) => {
        console.log(err)
    })
}

export const likePost = (userId, postId, Liked) => {
    try {
        let docToLike = doc(likeRef, `${userId}_${postId}`);
        if (Liked) {
            deleteDoc(docToLike);
        } else {
            setDoc(docToLike, { userId, postId });
        }

    } catch (err) {
        console.log(err);
    }

}

export const getLikesByUser = (userId, postId, setLiked, setLikesCount) => {
    try {
        let likeQuery = query(likeRef, where('postId', '==', postId));

        onSnapshot(likeQuery, (responce) => {
            let likes = responce.docs.map((doc) => doc.data())
            let likeCount = likes.length;

            const isLiked = likes.some((like) => like.userId === userId)
            setLikesCount(likeCount);
            setLiked(isLiked);
        })

    } catch (err) {
        console.log(err);
    }
}

export const postComment = (obj) => {
    try {
        addDoc(commentsRef, obj).then(() => { }).catch((err) => { console.log(err) })
    } catch (err) {
        console.log(err)
    }
}


export const getComments = (postId, setComments) => {
    try {
        let singlePostQuery = query(commentsRef, where("postId", "==", postId));

        onSnapshot(singlePostQuery, (responce) => {
            const comments = responce.docs.map((doc)=>{
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            });

            setComments(comments);
        })
    } catch (err) {
        console.log(err)
    }
}
