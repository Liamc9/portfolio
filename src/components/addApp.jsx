// IMPORTS
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { db, storage } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {FileUpload} from 'liamc9npm'

// CREATE FUNCTION
export default function AddAppModal({ isModalOpen, closeModal }) {
    // STATE VARIABLES
    const [isSubmitLoading, setIsSubmitLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        image: null,
        url: "",
        githubUrl: ""
    });

    // JAVASCRIPT LOGIC
    useEffect(() => {
        // Lock body scroll when modal is open
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        }
        // Re-enable body scroll when modal is closed
        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileUpload = (file) => {
        setFormData({ ...formData, image: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitLoading(true);

        try {
            // Ensure image is selected
            if (!formData.image) {
                alert("Please upload an image");
                setIsSubmitLoading(false);
                return;
            }

            // Upload image to Firebase Storage
            const imageRef = ref(storage, `images/${formData.image.name}`);
            await uploadBytes(imageRef, formData.image);
            const imageUrl = await getDownloadURL(imageRef);

            // Add document to Firestore
            const docRef = await addDoc(collection(db, "appList"), {
                name: formData.name,
                imageUrl: imageUrl,
                url: formData.url,
                githubUrl: formData.githubUrl
            });

            setIsSubmitLoading(false);
            closeModal();
            window.location.reload();
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.error("Error adding document: ", error);
            setIsSubmitLoading(false);
        }
    };

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative rounded-lg bg-white shadow-lg h-auto w-[400px] p-6">
                <button
                    onClick={closeModal}
                    className="absolute right-2 top-2 text-lg text-gray-500"
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
                <div className="mt-4">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <div className="relative font-sans">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2.5 focus:border-b-4 focus:border-purple-500 text-base border-2 border-gray-300 rounded-lg outline-none bg-transparent peer"
                                />
                                <label
                                    htmlFor="name"
                                    className={`absolute left-0 p-1.5 m-1 text-base text-gray-500 transform bg-white transition-transform duration-300 ease-in-out pointer-events-none ml-2.5 peer-focus:text-purple-500 peer-focus:-translate-y-[70%] peer-focus:scale-90 peer-focus:ml-5 peer-focus:p-1 ${formData.name ? 'translate-y-[-50%] scale-90 ml-5 p-1' : ''
                                        }`}
                                >
                                    Name
                                </label>
                            </div>
                            <div className="relative font-sans">
                                <input
                                    type="url"
                                    name="url"
                                    required
                                    value={formData.url}
                                    onChange={handleChange}
                                    className="w-full p-2.5 focus:border-b-4 focus:border-purple-500 text-base border-2 border-gray-300 rounded-lg outline-none bg-transparent peer"
                                />
                                <label
                                    htmlFor="url"
                                    className={`absolute left-0 p-1.5 m-1 text-base text-gray-500 transform bg-white transition-transform duration-300 ease-in-out pointer-events-none ml-2.5 peer-focus:text-purple-500 peer-focus:-translate-y-[70%] peer-focus:scale-90 peer-focus:ml-5 peer-focus:p-1 ${formData.url ? 'translate-y-[-50%] scale-90 ml-5 p-1' : ''
                                        }`}
                                >
                                    URL
                                </label>
                            </div>
                            <div className="relative font-sans">
                                <input
                                    type="url"
                                    name="githubUrl"
                                    required
                                    value={formData.githubUrl}
                                    onChange={handleChange}
                                    className="w-full p-2.5 focus:border-b-4 focus:border-purple-500 text-base border-2 border-gray-300 rounded-lg outline-none bg-transparent peer"
                                />
                                <label
                                    htmlFor="githubUrl"
                                    className={`absolute left-0 p-1.5 m-1 text-base text-gray-500 transform bg-white transition-transform duration-300 ease-in-out pointer-events-none ml-2.5 peer-focus:text-purple-500 peer-focus:-translate-y-[70%] peer-focus:scale-90 peer-focus:ml-5 peer-focus:p-1 ${formData.githubUrl ? 'translate-y-[-50%] scale-90 ml-5 p-1' : ''
                                        }`}
                                >
                                    GitHub URL
                                </label>
                            </div>
                            <div className="relative font-sans">
                                <FileUpload onFileUpload={handleFileUpload} />
                            </div>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                type="submit"
                                className="rounded bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 transition-colors duration-300"
                                disabled={isSubmitLoading}
                            >
                                {isSubmitLoading ? (
                                    <>
                                        <FontAwesomeIcon
                                            icon={faSpinner}
                                            className="mr-2 animate-spin"
                                        />{" "}
                                        Adding Stack App...
                                    </>
                                ) : (
                                    "Add Stack App"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
