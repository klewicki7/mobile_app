/* import {Buffer} from "buffer";
import * as fs from "react-native-fs";

export const fileUploadService = {
    uploadImage: async (method, url, file, fileName) => {
        const base64 = await fs.readFile(file, 'base64');
        const buffer = Buffer.from(base64, 'base64');
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'image/jpeg; charset=utf-8',
            },
            body: {
            	fileName: fileName,
                content: buffer
            }
        })
    }
}; */

//metodo viejo 
import {Buffer} from "buffer";
import * as fs from "react-native-fs";

export const fileUploadService = {
    uploadImage: async (method, url, file) => {
        const base64 = await fs.readFile(file, 'base64');
        const buffer = Buffer.from(base64, 'base64');
        return fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'image/jpeg; charset=utf-8',
            },
            body: buffer,
        })
    }
};