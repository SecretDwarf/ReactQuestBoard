import React, { useEffect, useState } from 'react';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "./firebase"
import {db} from './firebase';
import {setDoc, doc, getDoc, collection} from 'firebase/firestore';

import {useNavigate} from 'react-router-dom'
// import HeaderFooter from './components/HeaderFooter';

function Login(props) {
    let navigate = useNavigate();
    useEffect(()=>{
        const key = localStorage.getItem("user")
        if (key){
            navigate("/")
        }else{
            navigate("/login")
        }
    },[])

    // const getUsers = async () => {
    //     const querySnapshot = await getDocs(collection(db, "users"));
    //     querySnapshot.forEach((doc) => {
    //         setUsers(oldData => [...oldData, doc.id])
    //     })
    // }

    const addUser = async (username, uid, email) => {
        try { await setDoc(doc(db, "users" ,uid), {
            userID: uid,
            userName: username,
            userEmail: email,
        });
            console.log("done")
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const GoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.idToken;
            // The signed-in user info.
            const user = result.user;

            const uid = user.uid
            const name = user.displayName
            const email = user.email
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()){
                localStorage.setItem("user",JSON.stringify({"uid":uid, "name":name, "email":email}))
                navigate("/")
            }else{
                addUser(name, uid, email)
                localStorage.setItem("user",JSON.stringify({"uid":uid, "name":name, "email":email}))
                navigate("/question");
            }
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }
    return (
          <div>
              <h1>Welcome to React Quest!</h1>
              <p>Life should be fun. Adventure your way to a better life with React Quest</p>
          <button className="SignIn" onClick={GoogleSignIn}>Sign In with Google</button>
          </div>
    );
}

export default Login;