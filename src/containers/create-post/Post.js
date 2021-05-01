import React, { useState, useContext } from "react";
import SignInBtn from "../../components/sign-in-btn/SignInBtn";
import { UserContext } from "../../contexts/user";
import "./style.css";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import makeId from "../../helper/functions";

export default function Post() {
  const [user, setUser] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);

      var selectedImageSrc = URL.createObjectURL(e.target.files[0]);
      var imgPreview = document.getElementById("img-preview");

      imgPreview.src = selectedImageSrc;
      imgPreview.style.display = "block";
    }
  };
  const handleUpload = () => {
    if (image) {
      var imageName = makeId(10);
      const uploadTask = storage.ref(`images/${imageName}.jpg`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          //get download url and upload post info
          storage
            .ref("images")
            .child(`${imageName}.jpg`)
            .getDownloadURL()
            .then((imageUrl) => {
              db.collection("posts").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                caption: caption,
                photoUrl: imageUrl,
                username: user.email.replace("@gmail.com", ""),
                profileUrl: user.photoURL,
              });
            });
          setCaption("");
          setProgress(0);
          setImage(null);
          document.getElementById("img-preview").style.display = "none";
        }
      );
    }
  };

  return (
    <div className="post">
      <div className="post-container">
        {user ? (
          <>
            <div className="create-post">
              <div className="create-post-container">
                <p className="create-post-p">Create a Post</p>
                <div className="create-post-center">
                  <textarea
                    className="create-post-textarea"
                    rows="3"
                    placeholder="Enter captions here..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                  />
                  <div className="create-post-img-preview">
                    <img id="img-preview" alt="" />
                  </div>
                </div>
                <div className="create-post-image-upload">
                  <label htmlFor="fileInput">
                    <AddAPhotoIcon
                      style={{ cursor: "pointer", fontSize: "20px" }}
                    />
                  </label>
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                  <div>
                    <button
                      className="create-post-upload-btn"
                      onClick={handleUpload}
                      style={{
                        color: caption ? "#17252A" : "lightgrey",
                        fontWeight: "500",
                      }}
                    >
                      {`Upload ${progress != 0 ? progress : ""}`}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="post-sign-in">
              <div>
                <SignInBtn />
              </div>
              <div>
                <p className="post-p-c"> to Post and Comment</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
