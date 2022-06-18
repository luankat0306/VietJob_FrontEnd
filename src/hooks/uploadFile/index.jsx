import { selectUserInfo } from '@/redux/authSlice';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useSelector } from 'react-redux';

const firebaseConfig = {
  apiKey: 'AIzaSyCVjn5fWMGPdUKEGnY4JIUVg0CoCnIorBI',
  authDomain: 'vietjob-3a5f6.firebaseapp.com',
  projectId: 'vietjob-3a5f6',
  storageBucket: 'vietjob-3a5f6.appspot.com',
  messagingSenderId: '559388826476',
  appId: '1:559388826476:web:6f2abe63883690c7fdb149',
  measurementId: 'G-CCCV0RWFD1'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
export const storageRef = ref(storage);

const useUploadFile = () => {
  const info = useSelector(selectUserInfo);

  const uploadFile = async (file) => {
    const idRef = ref(storageRef, info?._id);
    const fileRef = ref(idRef, `${new Date().getTime()}_${file.name}`);
    const uploadTask = await uploadBytes(fileRef, file);
    const url = await getDownloadURL(uploadTask.ref);
    return url;
  };

  const downloadFile = async (url) => {
    const patch = url?.split('/');
    const fileName = patch[patch.length - 1]?.split('%2F')[1]?.split('?')[0];
    const blob = await fetch(url).then((res) => res.blob());
    const file = new File([blob], 'fileA');
    return { blob, file };
  };
  return {
    uploadFile,
    downloadFile
  };
};

export default useUploadFile;
