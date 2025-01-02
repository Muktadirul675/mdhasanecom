'use client'

import { useState } from "react";

interface ImageUpload {
    image: File;
    preview: string;
    id: number;
}

export default function useImageUpload() {
    const [images, setImages] = useState<ImageUpload[]>([]);
    const [lastImgId, setLastImgId] = useState<number>(0);

    function addImage({ files }: { files: File[] }) {
        let imgId = lastImgId;
        const newImages = files.map((file) => {
            const obj = URL.createObjectURL(file);
            return { image: file, preview: obj, id: imgId++ };
        });
        setImages((prev) => [...prev, ...newImages]);
        setLastImgId(imgId);
    }

    function removeImage({ id }: { id: number }) {
        setImages((prev) => {
            const toRemove = prev.find((i) => i.id === id);
            if (toRemove) {
                URL.revokeObjectURL(toRemove.preview);
            }
            return prev.filter((i) => i.id !== id);
        });
    }

    function clearImages() {
        images.forEach((img) => URL.revokeObjectURL(img.preview));
        setImages([]);
        setLastImgId(0);
    }

    return { images, addImage, removeImage, clearImages };
}